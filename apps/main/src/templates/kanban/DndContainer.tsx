import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanDndDataEnum } from "./constant";
import { Ellipsis, Plus } from "lucide-react";
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE, IssueIcon } from "@fluctux/ui";

type ContainerType = {
  id: UniqueIdentifier;
  title: string;
  children: React.ReactNode;
};

export const DndContainer = ({ id, title, children }: ContainerType) => {
  const {
    setNodeRef,
    transition,
    attributes,
    listeners,
    isDragging,
    transform,
  } = useSortable({
    id,
    data: {
      type: KanbanDndDataEnum.CONTAINER,
    },
  });
  return (
    <div
      className={`${isDragging && "bg-red-500"}  !cursor-default h-full`}
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
    >
      <div className="w-full p-3 px-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <IssueIcon stateType="done" color="green" />
          <h3 className="text-read_16 font-medium">{title}</h3>
        </div>
        <div className="flex justify-end items-center gap-3">
          <FxButton
            className="w-[24px] h-[24px] "
            variant="ghost_zinc_2"
            radius="tiny"
          >
            <Ellipsis
              size={16}
              className="text-text-svg_default group-hover:text-text-color_1 transition-colors"
            />
          </FxButton>
          <FxButton
            className="w-[24px] h-[24px] "
            variant="ghost_zinc_2"
            radius="tiny"
          >
            <Plus
              size={16}
              className="text-text-svg_default group-hover:text-text-color_1 transition-colors"
            />
          </FxButton>
        </div>
      </div>
      <div className="w-full rounded-rounded_15C border border-border-color_1 bg-background-color_950C p-2 h-[calc(100%-47px)] overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};
