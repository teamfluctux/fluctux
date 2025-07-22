import { IHeaderParams } from "ag-grid-community";
import { Popover, PopoverContent, PopoverTrigger } from "@fluctux/ui";
import { AgGridMenuListButton } from "./menu-list-button";
import {
  ArrowDownAZ,
  ArrowUpAZ,
  ChevronDown,
  Eraser,
  MoveRight,
} from "lucide-react";

interface GridHeaderProps extends IHeaderParams {
  icon?: React.ElementType; // Optional icon component
  setSort: (order: "asc" | "desc" | null) => void;
  children?:
    | React.ReactNode
    | ((
        props: IHeaderParams & {
          setSort: (order: "asc" | "desc" | null) => void;
        }
      ) => React.ReactNode);
}

export const GridHeaderCustomMenu: React.FC<GridHeaderProps> = (props) => {
  const { icon, displayName, children } = props;

  const Icon = icon || null;

  return (
    <div className="flex gap-2 justify-between items-center w-full h-full">
      <div className="flex items-center gap-2 justify-start">
        {Icon && <Icon size={16} />}
        {displayName}
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center gap-2 text-text-color_2 flex-shrink-0 hover:bg-background-color_800C p-1.5 rounded-tiny hover:text-text-color_1">
            <ChevronDown size={16} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-fit !shadow-lg" align="end">
          <div className="p-1.5 border border-border-color_1 rounded-tiny bg-background-color_925C w-[200px]">
            {children && typeof children === "function"
              ? children(props)
              : children}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
