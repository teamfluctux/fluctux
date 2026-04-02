import { action, makeObservable, observable } from "mobx";

type MetaDataType = {
  title: string
  desc?: string
}

class WorkspaceHeaderStore {
  metaData: MetaDataType | null = null
  constructor() {
    makeObservable(this, {
      metaData: observable,
      setMetaData: action,
      clearMetaData: action
    });
  }

  setMetaData(data: MetaDataType) {
    this.metaData = data
  }

  clearMetaData() {
    this.metaData = null
  }

}

export const workspaceHeaderStore = new WorkspaceHeaderStore();
