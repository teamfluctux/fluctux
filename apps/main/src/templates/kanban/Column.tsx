"use client";
import { KanbanColumnType, KanbanTaskType } from "@/types";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { Ellipsis, GripVertical, PlusIcon } from "lucide-react";
import { KanbanTask } from "./Task";
import { useMemo } from "react";
import { observer } from "mobx-react";

type KanbanColumnPropsType = {
  column: KanbanColumnType;
  tasks?: KanbanTaskType[];
};

export const KanbanColumn = observer((props: KanbanColumnPropsType) => {
  const { column, tasks } = props;
  const {
    setNodeRef,
    isDragging,
    listeners,
    attributes,
    transform,
    transition,
  } = useSortable({
    id: column.id,
    data: {
      type: "column",
      column,
    },
    disabled: false,
  });

  const taskIds = useMemo(() => tasks?.map((task) => task.id), [tasks]);

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
        className="w-full min-w-[330px] max-w-[330px]  h-full"
      >
        <div className="h-[40px] flex justify-between items-center group relative overflow-hidden">
          <div className="flex justify-start items-center gap-3 w-fit">
            <h3 className="text-text-color_1 text-workspace_1 opacity-40 font-medium relative left-3 group-hover:left-7 transition-all">
              {column.title}
            </h3>
          </div>
        </div>
        <div className="h-[calc(100%-40px)] w-full p-2 pb-0 rounded-rounded_15C bg-background-surface-indigo border-border-surface-indigo border overflow-y-auto overflow-x-hidden"></div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="w-full min-w-[330px] max-w-[330px]  h-full"
    >
      <div className="h-[40px] flex justify-between items-center group relative overflow-hidden">
        <div className="flex justify-start items-center gap-3 w-fit">
          <FxButton
            {...attributes}
            {...listeners}
            variant="ghost_zinc_2"
            className={`!w-[23px] !h-[23px] cursor-grab !p-0 absolute transition-all left-[-100%] group-hover:!left-0 top-1/2 -translate-y-1/2`}
            radius="tiny"
          >
            <GripVertical size={LUCIDE_WORKSPACE_ICON_SIZE} />
          </FxButton>
          <h3 className="text-text-color_1 text-workspace_1 font-medium relative left-3 group-hover:left-7 transition-all">
            {column.title}
          </h3>
        </div>
        <div className="w-fit justify-end items-center gap-2 flex pr-3 flex-shrink-0">
          <FxButton
            variant="ghost_zinc_2"
            className={`!w-[23px] !h-[23px] !p-0  `}
            radius="tiny"
          >
            <Ellipsis size={LUCIDE_WORKSPACE_ICON_SIZE} />
          </FxButton>
          <FxButton
            variant="ghost_zinc_2"
            className={`!w-[23px] !h-[23px]  !p-0  `}
            radius="tiny"
          >
            <PlusIcon size={LUCIDE_WORKSPACE_ICON_SIZE} />
          </FxButton>
        </div>
      </div>
      <div className="h-[calc(100%-40px)] w-full p-2 pb-0 rounded-rounded_15C border border-border-color_1 bg-background-color_950C overflow-y-auto overflow-x-hidden">
        <SortableContext items={taskIds || []}>
          {tasks?.map((task) => {
            return <KanbanTask key={task.id} task={task} />;
          })}
        </SortableContext>
      </div>
    </div>
  );
});
