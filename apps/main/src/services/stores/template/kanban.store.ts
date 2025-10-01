import { action, computed, makeObservable, observable } from "mobx";
import { TemplateStore } from "./store";
import { KanbanColumnType, KanbanTaskType } from "@/types";

class KanbanStore extends TemplateStore {
  columns: KanbanColumnType[] = []
  tasks: KanbanTaskType[] = []
  editMode: boolean = false
  activeColumn: KanbanColumnType | null = null
  activeTask: KanbanTaskType | null = null
  isOverAColumn: boolean = false

  constructor() {
    super()
    makeObservable(this, {
      columns: observable,
      isOverAColumn: observable,
      activeColumn: observable,
      activeTask: observable,
      tasks: observable,
      editMode: observable,
      setColumns: action,
      setActiveColumn: action,
      setActiveTask: action,
      setTasks: action,
      toggleEditMode: action,
      setIsOverAColumn: action,
    })
  }

  setColumns(value: KanbanColumnType[]) {
    this.columns = value
  }

  setIsOverAColumn(value: boolean) {
    this.isOverAColumn = value
  }

  setActiveColumn(value: KanbanColumnType | null) {
    this.activeColumn = value
  }

  setActiveTask(value: KanbanTaskType | null) {
    this.activeTask = value
  }

  setTasks(value: KanbanTaskType[]) {
    this.tasks = value
  }

  toggleEditMode(value: boolean | null = null) {
    this.editMode = value !== null ? value : !this.editMode
  }

}

export const kanbanStore = new KanbanStore()