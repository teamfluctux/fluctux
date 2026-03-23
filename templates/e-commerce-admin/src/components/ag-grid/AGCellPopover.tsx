import type React from "react";
import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import {
  FxButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
} from "@fluctux/ui";
import {
  ArrowUpRight,
  EditIcon,
  Trash2Icon,
  User2Icon,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type AgCellPopoverDataType = {
  label?: string;
  image?: string;
  icon?: LucideIcon;
  value: string;
  isPrimary?: boolean;
  slug?: string;
};

type AgCellPopoverPropsType = {
  popoverTriggerNode?: React.ReactNode;
  isIcon?: boolean;
  isImage?: boolean;
  isOpenNewTabButton?: boolean;
  onEditClick?: (value: string) => void;
  onDeleteClick?: (value: string) => void;
} & ICellRendererParams;

export function TAgCellPopoverRendererParams(
  params: Partial<
    Pick<
      AgCellPopoverPropsType,
      | "popoverTriggerNode"
      | "isIcon"
      | "isImage"
      | "onEditClick"
      | "onDeleteClick"
      | "isOpenNewTabButton"
    >
  >
) {
  return params;
}

export const AgCellPopover = (props: AgCellPopoverPropsType) => {
  const {
    popoverTriggerNode,
    value,
    isOpenNewTabButton,
    onEditClick,
    onDeleteClick,
    isIcon,
    isImage,
  } = props;

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="w-full h-full  px-4!  hover:!bg-background-color_850C"
      >
        <div className="w-full h-full ">
          {popoverTriggerNode
            ? popoverTriggerNode
            : (value &&
                value.find((d: AgCellPopoverDataType) => d.isPrimary == true)
                  ?.label) ||
              value[0]?.label}
          {value && value?.length > 1 && "..."}
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[250px]! h-[300px] overflow-hidden  text-workspace_2! bg-background-color_850C rounded-md "
      >
        <ScrollArea className="w-full h-full p-1!">
          <ul className="w-full h-fit">
            {value &&
              value.length > 0 &&
              value.map((item: AgCellPopoverDataType, i: number) => {
                const Icon = item.icon;
                return (
                  <li
                    key={`${item.value || item.slug}-${i}`}
                    className="w-full py-1.5 one-line-ellipsis hover:bg-background-color_800C transition-colors text-text-color_4 hover:text-text-color_1 font-medium flex justify-between items-center px-2 rounded-sm"
                  >
                    <div className="flex justify-start items-center gap-1.5">
                      {isIcon && Icon && <Icon size={14} />}
                      {isImage && (
                        <Image
                          src={`${item.image}`}
                          width={200}
                          height={200}
                          className="w-4.5 h-4.5 rounded-sm border"
                          alt={``}
                        />
                      )}
                      <span>{item.label}</span>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                      {isOpenNewTabButton && (
                        <Link href={`${item.slug}`}>
                          <ArrowUpRight
                            size={16}
                            className="hover:text-surface-fg font-medium"
                          />
                        </Link>
                      )}
                      <FxButton
                        variant="secondary"
                        onClick={() => onEditClick?.(item.value)}
                        size="sm"
                        className="w-6! h-6! p-0! rounded-sm"
                      >
                        <EditIcon size={14} />
                      </FxButton>
                      <FxButton
                        onClick={() => onDeleteClick?.(item.value)}
                        variant="destructive"
                        size="sm"
                        className="w-6! h-6! p-0! rounded-sm"
                      >
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
