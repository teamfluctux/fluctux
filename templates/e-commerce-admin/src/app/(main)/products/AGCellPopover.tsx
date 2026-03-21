import type React from "react";
import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import {
  FxButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
} from "@fluctux/ui";
import { useImperativeHandle } from "react";
import { EditIcon, Trash2Icon, User2Icon, type LucideIcon } from "lucide-react";

type AgCellPopoverDataType = {
  label?: string;
  image?: string;
  icon?: LucideIcon;
  value: string;
  slug?: string;
};

type AgCellPopoverPropsType = {
  popoverTriggerNode?: React.ReactNode;
  initialData?: AgCellPopoverDataType[];
} & ICellRendererParams;

export const AgCellPopover = (
  props: AgCellPopoverPropsType,
  ref: React.Ref<Omit<ICellRendererComp, "getGui">>
) => {
  const { popoverTriggerNode, initialData } = props;

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="w-full h-full  px-4!  hover:!bg-background-color_850C"
      >
        <div className="w-full h-full ">
          {popoverTriggerNode ? popoverTriggerNode : "click me"}
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[250px]! h-[300px] overflow-hidden  text-workspace_2! bg-background-color_850C rounded-md "
      >
        <ScrollArea className="w-full h-full p-1!">
          <ul className="w-full h-fit">
            {Array.from({ length: 25 }).map((_, i) => {
              return (
                <li
                  key={i}
                  className="w-full py-1.5 one-line-ellipsis hover:bg-background-color_800C transition-colors text-text-color_4 hover:text-text-color_1 font-medium flex justify-between items-center px-2 rounded-sm"
                >
                  <div className="flex justify-start items-center gap-1">
                    <User2Icon size={14} />
                    <span>This is a list</span>
                  </div>
                  <div className="flex justify-end items-center gap-2">
                    <FxButton variant="secondary" size="sm" className="w-6! h-6! p-0! rounded-sm">
                    <EditIcon size={14} />
                    </FxButton>
                        <FxButton variant="destructive" size="sm" className="w-6! h-6! p-0! rounded-sm">
                    <Trash2Icon size={14} />
                    </FxButton>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};
