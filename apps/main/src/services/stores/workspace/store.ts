import { action, makeObservable, observable } from "mobx"

class WorkspaceStore {
    isLoadingWorkspace: boolean = false;
    isTopLoading: boolean = false;

    constructor(){
        makeObservable(this, {
            isLoadingWorkspace: observable,
            isTopLoading: observable,
            setLoadingWorkspace: action,
            setIsTopLoading: action
        })
    }

    setLoadingWorkspace(value: boolean) {
        this.isLoadingWorkspace = value
    }

    setIsTopLoading(value: boolean) {
        this.isTopLoading = value
    }


}

const workspaceStore = new WorkspaceStore()
export {workspaceStore}

