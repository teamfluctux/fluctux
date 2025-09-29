import { UniqueIdentifier } from "@dnd-kit/core"

type KanbanTaskType = {
    id: UniqueIdentifier,
    title: string,
    desc: string,
    start_date?: string,
    due_date?: string,
    column_id: UniqueIdentifier

}

type KanbanColumnType = {
    id: UniqueIdentifier,
    title: string
}