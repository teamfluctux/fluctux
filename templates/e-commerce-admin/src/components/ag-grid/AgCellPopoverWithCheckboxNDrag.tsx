"use client";
import { DUMMY_PRODUCT_CATEGORIES } from "@/constants";
import type { MenuDataType } from "@fluctux/types";
import {
  Badge,
  Checkbox,
  cn,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
} from "@fluctux/ui";
import type { ICellRendererParams } from "ag-grid-community";
import React, { useState } from "react";
import { RestrictToElement } from "@dnd-kit/dom/modifiers";
import {
  DragDropProvider,
  DragOverlay,
} from "@dnd-kit/react";
import { RestrictToVerticalAxis } from "@dnd-kit/abstract/modifiers";

import { isSortable, useSortable } from "@dnd-kit/react/sortable";

function SortableDataList({
  id,
  index,
  item,
  isOverlay = false,
  containerRef,
}: {
  id: string;
  index: number;
  isOverlay?: boolean;
  item: AgCellPopoverWithCheckboxNDragDataType;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { ref, isDragging } = useSortable({
    id,
    index,
    // -- So that data can be pass through dndProvider
    data: { item },
    modifiers: [
      // -- Restrict to specific container
      RestrictToElement.configure({
        element: containerRef.current ?? undefined,
      }),
    ],
  });
  const elementRef = React.useRef<HTMLDivElement>(null);

  // -- Drag overlay should not contain this comp. This comp is for only if dragging is true then it will show in box overlay should get the default comp
  if (isDragging && !isOverlay) {
    return (
      <div
        style={{ width: `${elementRef.current?.offsetWidth}px` }}
        className={cn(
          "px-2  rounded-md border h-7 items-center flex  border-surface-border select-none text-workspace_2 font-medium cursor-default bg-surface-bg-active "
        )}
      ></div>
    );
  }

  return (
    <div
      ref={(node) => {
        ref(node);
        elementRef.current = node; // ← attach both refs
      }}
      className={cn(
        "px-2 rounded-md border bg-background-color_900C h-7 items-center flex border-border-color_1 w-fit select-none text-workspace_2 font-medium cursor-default hover:bg-background-color_800C"
      )}
    >
      {item?.label}
    </div>
  );
}

type AgCellPopoverWithCheckboxNDragPropsType = {} & ICellRendererParams;
export type AgCellPopoverWithCheckboxNDragDataType = MenuDataType & {};

export const AgCellPopoverWithCheckboxNDrag = (
  params: AgCellPopoverWithCheckboxNDragPropsType
) => {
  const { value } = params;
  const [selectedData, setSelectedData] =
    useState<AgCellPopoverWithCheckboxNDragDataType[]>(value);
  const handleAddData = (data: AgCellPopoverWithCheckboxNDragDataType) => {
    setSelectedData([...selectedData, data]);
  };
  const [activeDragList, setActiveDragList] =
    useState<AgCellPopoverWithCheckboxNDragDataType | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <Popover>
      <PopoverTrigger asChild className="w-full h-full px-4!">
        <div className="w-full h-full flex justify-start items-center gap-2">
          <div className="space-x-2 w-fit shrink-0">
            {selectedData.slice(0, 2).map((item) => {
              return (
                <Badge key={item.value} variant={"outline"}>
                  {item.label}
                </Badge>
              );
            })}
          </div>
          {selectedData.length > 2 && (
            <p className="w-fit text-workspace_3 font-medium">
              {" "}
              + {selectedData.length - 2} more
            </p>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[500px] h-[350px] flex justify-center items-start z-[9999999999999]!"
      >
        <ScrollArea className="h-full border-r border-border-color_1 w-full">
          <div className="w-full space-y-1 p-3" ref={containerRef}>
            <DragDropProvider
              modifiers={[RestrictToVerticalAxis]}
              onDragStart={(event, manager) => {
                const active = manager.dragOperation.source;
                setActiveDragList(active?.data?.item ?? null);
              }}
              onDragEnd={(event) => {
                if (event.canceled) return;

                const { source } = event.operation;

                if (isSortable(source)) {
                  const { initialIndex, index } = source;

                  if (initialIndex !== index) {
                    setSelectedData((items) => {
                      const newItems = [...items];
                      const [removed] = newItems.splice(initialIndex, 1);
                      newItems.splice(index, 0, removed!);
                      return newItems;
                    });
                  }
                }
              }}
            >
              {selectedData.map((item, i) => {
                return (
                  <SortableDataList
                    key={item.value}
                    id={item.value}
                    index={i}
                    item={item}
                    containerRef={containerRef}
                  />
                );
              })}
              <DragOverlay>
                {(source) => {
                  console.log("srouce is her mahin", source);
                  return (
                    <SortableDataList
                      index={0}
                      id={activeDragList?.value as string}
                      isOverlay={true}
                      containerRef={containerRef}
                      item={
                        activeDragList as AgCellPopoverWithCheckboxNDragDataType
                      }
                    />
                  );
                }}
              </DragOverlay>
            </DragDropProvider>
          </div>
        </ScrollArea>
        <ScrollArea className="h-full w-[550px]">
          <div className="  w-full px-3 pt-2 pb-3">
            <FieldGroup>
              <FieldSet className="gap-y-2!">
                <FieldLegend>All Categories</FieldLegend>
                <FieldDescription className="leading-4 mb-3">
                  Select the categories that best describe your products.
                </FieldDescription>
                {DUMMY_PRODUCT_CATEGORIES.map((item) => {
                  return (
                    <Field orientation="horizontal">
                      <Checkbox
                        checked={selectedData.some(
                          (d) => d.value == item.value
                        )}
                        onCheckedChange={() => handleAddData(item)}
                        id={item.value}
                        name="categories"
                        className="peer"
                      />
                      <Label
                        htmlFor={item.value}
                        className="peer-data-[state=checked]:text-text-color_1 one-line-ellipsis hover:text-text-color_1 transition-colors"
                      >
                        {item.label}
                      </Label>
                    </Field>
                  );
                })}
              </FieldSet>
            </FieldGroup>
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};
