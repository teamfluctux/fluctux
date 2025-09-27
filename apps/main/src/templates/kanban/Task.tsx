"use client";
import { kanbanStore } from "@/services/stores";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { observer } from "mobx-react";
import { CSS } from "@dnd-kit/utilities";

type KanbanTaskPropsType = {
  task: KanbanTaskType;
};

export const KanbanTask = observer(({ task }: KanbanTaskPropsType) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "task",
      task,
    },
    disabled: kanbanStore.editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return <div className="w-full h-fit bg-background-color_925C" ref={setNodeRef} {...listeners} {...attributes} style={style}>

  </div>;
});
