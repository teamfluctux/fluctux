import React, { forwardRef, useImperativeHandle } from "react";
import {
  ICellRenderer,
  ICellRendererComp,
  ICellRendererParams,
} from "ag-grid-community";
import {
  Edit,
  LucideIcon,
  Pencil,
  SquareEqualIcon,
  SquarePen,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  FxCommandBox,
} from "@fluctux/ui";

type EditCellAgGridType = {
  isEnableRightClickEdit: boolean;
  contextMenuComp: React.ReactNode
} & ICellRendererParams;

export const ManageCellWithContextMenu = forwardRef<
  Omit<ICellRendererComp, "getGui">,
  EditCellAgGridType
>((props, ref) => {
  const { isEnableRightClickEdit, contextMenuComp } = props;
//   useImperativeHandle(ref, () => ({
//     refresh: () => {
//       return true;
//     },
//   }));

  return (
    <div className="group">
      {isEnableRightClickEdit ? (
        <ContextMenu>
          <ContextMenuTrigger className="!px-4 !w-full flex flex-grow justify-start items-center !h-full hover:bg-surface-indigo-bg  hover:text-surface-indigo-fg">
            {props.value}
          </ContextMenuTrigger>
          <ContextMenuContent>
            {contextMenuComp}
          </ContextMenuContent>
        </ContextMenu>
      ) : (
        <div className="flex justify-between items-center ">
          <p className="one-line-ellipsis">{props.value}</p>
          <button className="w-[25px] h-[25px] rounded-tiny hidden group-hover:flex group-hover:bg-background-color_800C border border-border-color_1 hover:text-text-color_1 hover:!bg-background-color_750C transition-all items-center justify-center">
            <SquarePen size={16} />
          </button>
        </div>
      )}
    </div>
  );
});
