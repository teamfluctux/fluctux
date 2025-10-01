import { IHeaderParams } from "ag-grid-community";
import { Popover, PopoverContent, PopoverTrigger } from "@fluctux/ui";
import { AgGridMenuListButton } from "./menu-list-button";
import { BiFilterAlt } from "react-icons/bi";
import {
  ArrowDownAZ,
  ArrowUpAZ,
  ChevronDown,
  Eraser,
  Home,
  MoveRight,
} from "lucide-react";

interface GridHeaderProps extends IHeaderParams {
  icon?: React.ElementType; // Optional icon component
  setSort: (order: "asc" | "desc" | null) => void;
  doesShowFilter?: boolean;
  children?:
    | React.ReactNode
    | ((
        props: IHeaderParams & {
          setSort: (order: "asc" | "desc" | null) => void;
        }
      ) => React.ReactNode);
}

export const GridHeaderCustomMenu: React.FC<GridHeaderProps> = (props) => {
  const {
    icon,
    displayName,
    children,
    showFilter,
    doesShowFilter = false,
  } = props;

  const Icon = icon || null;

  return (
    <div className="flex gap-2 justify-between items-center w-full h-full">
      <div className="flex items-center gap-2 justify-start">
        {Icon && <Icon size={16} />}
        {displayName}
      </div>

      <div className="flex justify-end items-center gap-1">
        {doesShowFilter && (
          <button
            onClick={(e) => showFilter(e.currentTarget)}
            className="flex items-center gap-2 text-text-color_2 flex-shrink-0 hover:bg-background-color_800C w-[25px] h-[25px] justify-center rounded-tiny hover:text-text-color_1"
          >
            <BiFilterAlt />
          </button>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2 text-text-color_2 flex-shrink-0 hover:bg-background-color_800C w-[25px] h-[25px] justify-center rounded-tiny hover:text-text-color_1">
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
    </div>
  );
};
