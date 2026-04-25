import { action, makeObservable, observable } from "mobx";

class SettingsStore {
    isInstalledOneOfScraper: boolean = false;
    constructor() {
        makeObservable(this, {
            // -- States
            isInstalledOneOfScraper: observable,

            // -- Actions
            setIsInstalledOneOfScraper: action,
            clearSettingsStore: action,

        })
    }

    setIsInstalledOneOfScraper(value: boolean) {
        this.isInstalledOneOfScraper = value;
    }

    clearSettingsStore() {
        this.isInstalledOneOfScraper = false;
    }


}

export const settingsStore = new SettingsStore()