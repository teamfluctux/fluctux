import { UniqueIdentifier } from "@dnd-kit/core";
import { action, makeObservable, observable } from "mobx";

class KanbanStore {
    activeId: UniqueIdentifier = ""
    currentContainerID: UniqueIdentifier = ""
    showAddContainerModel: boolean = false
    showAddItemModel: boolean = false
    constructor() {
        makeObservable(this, {
            activeId: observable,
            currentContainerID: observable,
            setActiveId: action,
            setCurrentContainerID: action,
            showAddContainerModel: observable,
            showAddItemModel: observable,
            setShowAddItemModel: action,
            setShowAddContainerModel: action
        })
    }

    setActiveId(value: UniqueIdentifier) {
        this.activeId = value
    }
    setCurrentContainerID(value: UniqueIdentifier) {
        this.currentContainerID = value
    }

    setShowAddItemModel(value: boolean) {
        this.showAddItemModel = value
    }

    setShowAddContainerModel(value: boolean) {
        this.showAddContainerModel = value
    }
}

export const kanbanStore = new KanbanStore()