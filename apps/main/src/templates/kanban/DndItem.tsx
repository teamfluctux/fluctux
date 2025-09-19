import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanDndDataEnum } from "./constant";
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { Plus } from "lucide-react";
import React from "react";

type DndItemType = {
  id: UniqueIdentifier;
  title?: string;
  priority?: string;
  start_date?: string; // it should be date
  due_date?: string; // it should be date
  state?: string;
  assignees?: string; // it should be array
};

export const DndItem = React.memo(({
  id,
  title,
  priority,
  start_date,
  due_date,
  state,
  assignees,
}: DndItemType) => {
  const {
    setNodeRef,
    transition,
    transform,
    listeners,
    attributes,
    isDragging,
  } = useSortable({
    id,
    data: {
      type: KanbanDndDataEnum.ITEM,
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      className={`${isDragging && "!z-[9999999999999999999] !relative"} border border-border-color_1 bg-background-color_925C hover:bg-background-color_900C overflow-hidden transition-colors rounded  w-full h-fit`}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
    >
      <div
        className={`${isDragging && "!bg-background-color_800C transition-all !cursor-grabbing"} p-3 w-full h-full `}
        {...listeners}
      >
        <h4 className="font-medium text-workspace_1 cursor-default">{title}</h4>
       
      </div>
      <div></div>
    </div>
  );
});
