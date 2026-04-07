"use client";
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
import { forwardRef } from "react";

export type AgCellPopoverDataType = {
  label?: string;
  image?: string;
  icon?: LucideIcon;
  value: string;
  isPrimary?: boolean;
  slug?: string;
};

type AgCellPopoverParamsType = {
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
      AgCellPopoverParamsType,
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

/**
 * An AG Grid cell renderer that displays a popover list of items on click.
 *
 * Useful for fields that contain arrays of related entities (e.g. categories, tags, assignees)
 * where you want to show a preview in the cell and a full list in a popover.
 *
 * @param params - Component props extending AG Grid's `ICellRendererParams`
 * @param params.value - The cell value — must be an array of `AgCellPopoverDataType` objects
 * @param params.popoverTriggerNode - Optional custom React node to use as the popover trigger.
 * Defaults to showing the primary item's label or the first item's label, with `...` if multiple items exist.
 * @param params.isIcon - Whether to render the item's `icon` (LucideIcon) next to its label in the popover list
 * @param params.isImage - Whether to render the item's `image` as a small thumbnail next to its label
 * @param params.isOpenNewTabButton - Whether to show an `ArrowUpRight` link button that navigates to `item.slug`
 * @param params.onEditClick - Optional callback fired when the edit button is clicked on a list item. Receives `item.value`.
 * @param params.onDeleteClick - Optional callback fired when the delete button is clicked on a list item. Receives `item.value`.
 *
 * @example
 * ```tsx
 * // Basic usage with icons and edit/delete handlers
 * {
 *   field: "categories",
 *   cellRenderer: AgCellPopover,
 *   cellStyle: { padding: "0px 0px" },
 *   cellRendererParams: TAgCellPopoverRendererParams({
 *     isIcon: true,
 *     onEditClick: (value) => console.log("edit:", value),
 *     onDeleteClick: (value) => console.log("delete:", value),
 *   }),
 * }
 * ```
 *
 * @example
 * ```tsx
 * // With images and open-in-new-tab navigation
 * {
 *   field: "assignees",
 *   cellRenderer: AgCellPopover,
 *   cellStyle: { padding: "0px 0px" },
 *   cellRendererParams: TAgCellPopoverRendererParams({
 *     isImage: true,
 *     isOpenNewTabButton: true,
 *     onEditClick: (value) => router.push(`/users/${value}/edit`),
 *   }),
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Row data shape expected for value field
 * const categories: AgCellPopoverDataType[] = [
 *   { value: "cat-1", label: "Electronics", icon: CpuIcon, isPrimary: true, slug: "/categories/electronics" },
 *   { value: "cat-2", label: "Accessories", icon: PackageIcon, slug: "/categories/accessories" },
 * ];
 * ```
 *
 * @remarks
 * - The cell trigger shows the `isPrimary` item's label by default, falling back to `value[0].label`
 * - If `value.length > 1`, a `...` suffix is appended to the trigger label
 * - Items with a `slug` field can use `isOpenNewTabButton` to render a navigation link
 * - This component does not use `forwardRef` — it is display-only and does not expose `refresh` or `getValue`
 */
export const AgCellPopover = (
  params: AgCellPopoverParamsType,
  ref: Omit<ICellRendererComp, "getGui">
) => {
  const {
    popoverTriggerNode,
    value,
    isOpenNewTabButton,
    onEditClick,
    onDeleteClick,
    isIcon,
    isImage,
  } = params;

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
