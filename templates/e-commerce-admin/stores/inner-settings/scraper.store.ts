import type { ScraperAppInfoTypes } from "@/types";
import type { ScraperConfigType } from "@/zod";
import { action, computed, makeObservable, observable } from "mobx";

/**
 * Store for managing scraper applications, their installation status, and selection states.
 */
export class ScraperStore {
    /** Set of scraper API URLs selected for installation */
    selectedScrapers = new Set<string>();
    /** Map of available scrapers indexed by their API URL */
    availableScrapers = new Map<string, ScraperAppInfoTypes>();
    /** Set of scraper API URLs selected for uninstallation */
    selectForUninstall = new Set<string>();
    /** List of installed scrapers fetched from the remote database */
    installedScrappers: ScraperAppInfoTypes[] = []

    /** Configuration settings for the scraping process */
    scrapingConfiguration: Partial<ScraperConfigType> = {
        apiUrl: "",
        numberOfProducts: 0,
        whatToDoWithScrapProducts: ""
    }

    constructor() {
        makeObservable(this, {
            // -- States
            selectedScrapers: observable,
            availableScrapers: observable,
            selectForUninstall: observable,
            installedScrappers: observable,
            scrapingConfiguration: observable,
            // -- Computed
            installedScrapersCount: computed,
            // -- Actions
            setSelectedScrapers: action,
            setAvailableScrapers: action,
            setInstallScraper: action,
            setUninstallScraper: action,
            setInstallMultiScrapers: action,
            setUninstallMultiScrapers: action,
            setClearAllSelections: action,
            setGetInstalledScrappersFromRemote: action,
            setScrapingConfiguration: action,
            // -- Clearing
            clearScrapingConfiguration: action,
            clearAllStates: action,

        })
    }

    /**
     * Toggles the selection of a scraper. 
     * If already installed, it toggles for uninstallation.
     * If not installed, it toggles for installation.
     */
    setSelectedScrapers(apiURL: string) {
        const installedScraper = this.availableScrapers.get(apiURL)
        /**
         * If app is installed and user check, then select that app for uninstallation
         */
        if (installedScraper?.isInstalled) {

            /**
                * Check if already recorded for uninstallation, then remove that app from uninstallation on check
                */
            const isExistForUninstall = this.selectForUninstall.has(apiURL)

            if (isExistForUninstall) {
                this.selectForUninstall.delete(apiURL)
                return
            }
            // -- If installed and selected move to uninstall
            this.selectForUninstall.add(apiURL)
            return
        }




        const isExistScraper = this.selectedScrapers.has(apiURL)
        if (isExistScraper) {
            this.selectedScrapers.delete(apiURL)
            return
        }
        this.selectedScrapers.add(apiURL)
    }

    /**
     * Initializes the available scrapers map.
     */
    setAvailableScrapers(data: ScraperAppInfoTypes[]) {
        // One time addition
        const newMap = new Map<string, ScraperAppInfoTypes>(data.map((item) => [item.apiURL, item]))
        this.availableScrapers = newMap
    }

    /**
     * Marks a specific scraper as installed and removes it from the selection set.
     */
    setInstallScraper(apiURL: string) {
        const existedScraper = this.availableScrapers.get(apiURL)
        if (this.selectedScrapers.has(apiURL)) {
            this.selectedScrapers.delete(apiURL)
            this.selectForUninstall.add(apiURL)
        }

        this.availableScrapers.set(apiURL, { ...existedScraper!, isInstalled: true })
    }

    /**
     * Marks a specific scraper as uninstalled and removes it from the uninstallation set.
     */
    setUninstallScraper(apiURL: string) {
        const existedScraper = this.availableScrapers.get(apiURL)
        if (this.selectForUninstall.has(apiURL)) {
            this.selectForUninstall.delete(apiURL)
            this.selectedScrapers.add(apiURL)
        }
        this.availableScrapers.set(apiURL, { ...existedScraper!, isInstalled: false })
    }

    /**
     * Clears all current selections for both installation and uninstallation.
     */
    setClearAllSelections() {
        this.selectedScrapers.clear()
        this.selectForUninstall.clear()
    }

    /**
     * Returns the total number of currently installed scrapers.
     */
    get installedScrapersCount() {
        let count = 0;
        this.availableScrapers.forEach(item => {
            if (item.isInstalled) count++;
        });
        return count;
    }

    /**
     * Installs all scrapers currently in the `selectedScrapers` set.
     */
    setInstallMultiScrapers() {
        this.selectedScrapers.forEach(apiURL => {
            this.availableScrapers.set(apiURL, { ...this.availableScrapers.get(apiURL)!, isInstalled: true })
        })
        this.selectedScrapers.clear()
    }

    /**
     * Uninstalls all scrapers currently in the `selectForUninstall` set.
     */
    setUninstallMultiScrapers() {
        this.selectForUninstall.forEach(apiURL => {
            this.availableScrapers.set(apiURL, { ...this.availableScrapers.get(apiURL)!, isInstalled: false })
        })
        this.selectForUninstall.clear()
    }

    setGetInstalledScrappersFromRemote(data: ScraperAppInfoTypes[]) {
        this.installedScrappers = data
    }


    setScrapingConfiguration(data: Partial<ScraperConfigType>) {
        Object.assign(this.scrapingConfiguration, data)
    }

    // =============================================
    // Clearing states
    // =============================================

    // -- Clear scraper configuration settings
    clearScrapingConfiguration() {
        this.scrapingConfiguration = {
            apiUrl: "",
            numberOfProducts: 0,
            whatToDoWithScrapProducts: ""
        }
    }

    /**
     * Resets the store to its initial state.
     */
    clearAllStates() {
        this.selectedScrapers.clear()
        this.availableScrapers.clear()
        this.selectForUninstall.clear()
        this.installedScrappers = []

    }



}

export const scraperStore = new ScraperStore()