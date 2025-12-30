import { SidebarDocListType } from "@/types"
import { action, makeObservable, observable } from "mobx"

class SidebarStore {
    public sidebarDocList: SidebarDocListType | {} = {}
    public isSidebarDocListLoading: boolean = true
    public isSidebarOpen: boolean = false
    constructor() {
        makeObservable(this, {
            sidebarDocList: observable,
            isSidebarOpen: observable,
            isSidebarDocListLoading: observable,
            setIsSiderbarOpen: action,
            setSidebarDocList: action,
            setIsSidebarDocListLoading: action
        })
    }
    setIsSiderbarOpen(value: boolean) {
        this.isSidebarOpen = value || !this.isSidebarOpen
    }

    async setSidebarDocList(data: SidebarDocListType) {
        if (!data) return
        this.isSidebarDocListLoading = true
        this.sidebarDocList = data
        this.isSidebarDocListLoading = false
    }

    setIsSidebarDocListLoading(value: boolean) {
        this.isSidebarDocListLoading = value || !this.isSidebarDocListLoading
    }

}

export const sidebarStore = new SidebarStore()