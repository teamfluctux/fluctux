import type { FilesManagerHeaderMenusType, } from "@/types";
import { action, makeObservable, observable } from "mobx";

class FileStore {
    fileNavType: FilesManagerHeaderMenusType["type"] | null = null;
    constructor() {
        makeObservable(this, {
            // -- States
            fileNavType: observable,
            // -- Actions
            setFileNavType: action,
            clearFileStore: action,
        })
    }

    setFileNavType(type: FilesManagerHeaderMenusType["type"]) {
        this.fileNavType = type;
    }

    clearFileStore() {
        this.fileNavType = null;   
    }


    
}

export const fileStore = new FileStore()