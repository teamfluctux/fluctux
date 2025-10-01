import { action, computed, makeObservable, observable } from "mobx";

class MainSidebarStore {
  isOpenSidebar: boolean = false;
  sidebarSize: number | null = null;

  constructor() {
    makeObservable(this, {
      isOpenSidebar: observable,
      setOpenSidebar: action,
      sidebarSize: observable,
      getSidebarSize: computed,
      setSidebarSize: action,
    });

    this.loadSidebarSizeFromLocalStorage();
  }

  setOpenSidebar(value: boolean) {
    this.isOpenSidebar = value;
  }

  toggleOpenSidebar() {
    this.isOpenSidebar = !this.isOpenSidebar;
  }

  setSidebarSize(size: number) {
    this.sidebarSize = size;
  }

  get getSidebarSize() {
    return this.sidebarSize;
  }

  private loadSidebarSizeFromLocalStorage() {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedSize = localStorage.getItem("workspaceSidebarWidth");
      if (savedSize) {
        this.setSidebarSize(parseInt(savedSize, 10));
      } else {
        this.setSidebarSize(250);
      }
    }
  }
}

const mainSidebarStore = new MainSidebarStore();
export { mainSidebarStore };
