import { action, makeObservable, observable } from "mobx";
import { TemplateStore } from "./store";
import { KanbanColumnType, KanbanTaskType } from "@/types";

class KanbanStore extends TemplateStore {
  columns: KanbanColumnType[] = []
  tasks: KanbanTaskType[] = []
  editMode: boolean = false
  activeColumn: KanbanColumnType | null = null
  activeTask: KanbanTaskType | null = null

  constructor() {
    super()
    makeObservable(this, {
      columns: observable,
      activeColumn: observable,
      activeTask: observable,
      tasks: observable,
      editMode: observable,
      setColumns: action,
      setActiveColumn: action,
      setActiveTask: action,
      setTasks: action,
      toggleEditMode: action,
    })
  }

  setColumns(value: KanbanColumnType[]) {
    this.columns = value
  }

  setActiveColumn(value: KanbanColumnType) {
    this.activeColumn = value
  }

  setActiveTask(value: KanbanTaskType) {
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