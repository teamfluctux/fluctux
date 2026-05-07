// MSG_WARNING: Not completed. Usecase - Tags insertion for products
"use client";
import type { MenuDataType } from "@fluctux/types";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
  FxButton,
  cn,
  PopoverTrigger,
  Popover,
  PopoverContent,
  Badge,
} from "@fluctux/ui";
import type { ICellRendererParams } from "ag-grid-community";
import { X } from "lucide-react";
import React, { useState } from "react";

type AgCellComboBoxMultiplePropsType = {} & ICellRendererParams;
type AgCellComboBoxMultipleDataType = { isPrimary?: boolean } & MenuDataType;
export const AgCellComboBoxMultiple = (
  params: AgCellComboBoxMultiplePropsType
) => {
  const { value } = params;
  const [selectedData, setSelectedData] =
    useState<AgCellComboBoxMultipleDataType[]>(value);
  const anchor = useComboboxAnchor();
  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="w-full h-full  px-4!  hover:!bg-background-color_850C "
      >
        <div className="w-full h-full space-x-2">
          {selectedData.map((item) => {
            return (
              <Badge
                key={item.value}
                variant={item.isPrimary ? "surface" : "outline"}
              >
                {item.label}
              </Badge>
            );
          })}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[350px]" align="start">
        <Combobox
          value={selectedData as any[]}
          onValueChange={(value) => setSelectedData(value as any)}
          multiple
          autoHighlight
          items={value}

        >
          <ComboboxChips
            ref={anchor}
            
            className={`w-full! relative bg-transparent rounded-none! p-0! max-h-[150px]! h-full! overflow-y-auto! overflow-x-hidden px-2! ring-0! outline-none! border-0 h-full! overflow-hidden! `}
          >
            <ComboboxValue  >
              {(data: AgCellComboBoxMultipleDataType[]) => (
                <React.Fragment>
                  {(data || selectedData).map((item) => {
                    if (item.label && item.value)
                      return (
                        <ComboboxChip
                        
                          key={item.value}
                          className={cn(
                            item.isPrimary && "bg-surface-bg text-surface-fg"
                          )}
                        >
                          {item.label}
                        </ComboboxChip>
                      );
                  })}
                  <ComboboxChipsInput />
                </React.Fragment>
              )}
            </ComboboxValue>
            {selectedData?.length > 0 && (
              <FxButton
                // onClick={() => onRemoveAllAddedData?.()}
                variant="ghost_zinc_2"
                size="square_xs"
                className="rounded-sm! absolute top-1 right-1"
                icon={X}
              />
            )}
          </ComboboxChips>
          <ComboboxContent  anchor={anchor}>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(data) => (
                <ComboboxItem key={data.value} value={data}>
                  {data.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </PopoverContent>
    </Popover>
  );
};
