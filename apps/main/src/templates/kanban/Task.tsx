"use client";

import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { observer } from "mobx-react";
import { CSS } from "@dnd-kit/utilities";
import { KanbanTaskType } from "@/types";
import { kanbanStore } from "@/services/stores/template";
import { IssueIcon, EmojiPickerPopover } from "@fluctux/ui";
import { useState } from "react";

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

  // use placeholder to avoid layout overlapping or flickering.
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`h-[100px] w-full bg-background-surface-indigo border-border-surface-indigo !cursor-grabbing  border  rounded mb-2`}
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`h-[100px] w-full bg-background-color_925C border border-border-color_1 rounded mb-2 ${isDragging ? "!cursor-grabbing" : "!cursor-default"}`}
    >
      <div className="p-3 h-fit flex justify-start items-center gap-2 group">
        <IssueIcon stateType={`${task.issue_type}`} size={18} />
        <h3 className="two-line-ellipsis w-full text-workspace_2 font-medium ">
          This is title
        </h3>
      </div>
    </div>
  );
});
