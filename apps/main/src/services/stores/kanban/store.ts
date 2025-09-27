import { UniqueIdentifier } from "@dnd-kit/core";
import { action, makeObservable, observable } from "mobx";

type DndType = {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  }[];
};

class KanbanStore {
  activeId: UniqueIdentifier | null = null;
  currentContainerID: UniqueIdentifier = "";
  showAddContainerModel: boolean = false;
  showAddItemModel: boolean = false;
  containers: DndType[] = [];
  editMode: boolean = false
  constructor() {
    makeObservable(this, {
      activeId: observable,
      currentContainerID: observable,
      editMode: observable,
      toggleEditMode: action,
      setActiveId: action,
      setCurrentContainerID: action,
      showAddContainerModel: observable,
      showAddItemModel: observable,
      setShowAddItemModel: action,
      setShowAddContainerModel: action,
      setContainers: action,
      containers: observable,
    });
  }

  toggleEditMode(value: boolean | null = null) {
    this.editMode = value === null ? !this.editMode : value
  }

  setActiveId(value: UniqueIdentifier | null) {
    this.activeId = value;
  }
  setCurrentContainerID(value: UniqueIdentifier) {
    this.currentContainerID = value;
  }

  setShowAddItemModel(value: boolean) {
    this.showAddItemModel = value;
  }

  setShowAddContainerModel(value: boolean) {
    this.showAddContainerModel = value;
  }

  setContainers(value: DndType[]) {
    this.containers = value;
  }
}

export const kanbanStore = new KanbanStore();
