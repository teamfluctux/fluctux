import { action, makeObservable, observable } from "mobx";

class WorkspaceHeaderStore {
  title: string = "";
  desc: string = "";
  constructor() {
    makeObservable(this, {
      title: observable,
      desc: observable,
      setTitle: action,
      setDesc: action,
    });
  }

  setTitle(value: string) {
    this.title = value;
  }

  setDesc(value: string) {
    this.desc = value;
  }
}

export const workspaceHeaderStore = new WorkspaceHeaderStore();
