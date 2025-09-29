"use client";
import { kanbanStore } from "@/services/stores";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { observer } from "mobx-react";
import { CSS } from "@dnd-kit/utilities";
import { KanbanTaskType } from "@/types";

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

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`h-[120px] w-full bg-background-surface-indigo border-border-surface-indigo   border  rounded mb-2`}
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`h-[120px] w-full bg-background-color_925C border border-border-color_1 rounded mb-2`}
    >
      <div className="p-3 h-fit">
        <h3 className="two-line-ellipsis w-full text-workspace_2 font-medium ">
          {task.id}
        </h3>
      </div>
    </div>
  );
});
