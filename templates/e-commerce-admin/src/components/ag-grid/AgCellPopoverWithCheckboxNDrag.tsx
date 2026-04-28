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
          <div className="w-full space-y-1 p-3">
            {selectedData.map((item) => {
              return (
                <div
                  className={cn(
                    "px-2 py-1 rounded-md border border-border-color_1 w-fit select-none text-workspace_2 font-medium cursor-default hover:bg-background-color_800C"
                  )}
                >
                  {item.label}
                </div>
              );
            })}
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
