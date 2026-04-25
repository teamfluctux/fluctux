import type { ScraperAppInfoTypes } from "@/types";
import { action, computed, makeObservable, observable } from "mobx";

export class ScraperStore {
    selectedScrapers = new Set<string>();
    availableScrapers = new Map<string, ScraperAppInfoTypes>();
    selectForUninstall = new Set<string>();

    constructor() {
        makeObservable(this, {
            // -- States
            selectedScrapers: observable,
            availableScrapers: observable,
            selectForUninstall: observable,
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
            clearStates: action,
        })
    }

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

    setAvailableScrapers(data: ScraperAppInfoTypes[]) {
        // One time addition
        const newMap = new Map<string, ScraperAppInfoTypes>(data.map((item) => [item.apiURL, item]))
        this.availableScrapers = newMap
    }

    setInstallScraper(apiURL: string) {
        const existedScraper = this.availableScrapers.get(apiURL)
        if (this.selectedScrapers.has(apiURL)) {
            this.selectedScrapers.delete(apiURL)
            this.selectForUninstall.add(apiURL)
        }

        this.availableScrapers.set(apiURL, { ...existedScraper!, isInstalled: true })
    }

    setUninstallScraper(apiURL: string) {
        const existedScraper = this.availableScrapers.get(apiURL)
        if (this.selectForUninstall.has(apiURL)) {
            this.selectForUninstall.delete(apiURL)
            this.selectedScrapers.add(apiURL)
        }
        this.availableScrapers.set(apiURL, { ...existedScraper!, isInstalled: false })
    }

    setClearAllSelections() {
        this.selectedScrapers.clear()
        this.selectForUninstall.clear()
    }


    get installedScrapersCount() {
        let count = 0;
        this.availableScrapers.forEach(item => {
            if (item.isInstalled) count++;
        });
        return count;
    }

    setInstallMultiScrapers() {
        this.selectedScrapers.forEach(apiURL => {
            this.availableScrapers.set(apiURL, { ...this.availableScrapers.get(apiURL)!, isInstalled: true })
        })
        this.selectedScrapers.clear()
    }

    setUninstallMultiScrapers() {
        this.selectForUninstall.forEach(apiURL => {
            this.availableScrapers.set(apiURL, { ...this.availableScrapers.get(apiURL)!, isInstalled: false })
        })
        this.selectForUninstall.clear()
    }

    clearStates() {
        this.selectedScrapers.clear()
        this.availableScrapers.clear()
        this.selectForUninstall.clear()

    }



}

export const scraperStore = new ScraperStore()