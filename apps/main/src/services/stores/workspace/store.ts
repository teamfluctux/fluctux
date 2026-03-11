import { action, makeObservable, observable } from "mobx";

class WorkspaceStore {
  isMoutedWorkspace: boolean = false;
  isTopLoading: boolean = false;

  constructor() {
    makeObservable(this, {
      isMoutedWorkspace: observable,
      isTopLoading: observable,
      setMountedWorkspace: action,
      setIsTopLoading: action,
    });
  }

  setMountedWorkspace(value: boolean) {
    this.isMoutedWorkspace = value;
  }

  setIsTopLoading(value: boolean) {
    this.isTopLoading = value;
  }
}

const workspaceStore = new WorkspaceStore();
export { workspaceStore };
