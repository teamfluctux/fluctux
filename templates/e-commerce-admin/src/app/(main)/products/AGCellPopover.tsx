import type React from "react";
import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import { FxButton, Popover, PopoverContent, PopoverTrigger } from "@fluctux/ui";
import { useImperativeHandle } from "react";

type AgCellPopoverPropsType = {
  popoverTriggerNode?: React.ReactNode;
} & ICellRendererParams;

export const AgCellPopover = (
  props: AgCellPopoverPropsType,
  ref: React.Ref<Omit<ICellRendererComp, "getGui">>
) => {
  const { popoverTriggerNode } = props;
  // Expose AG Grid's required cell renderer methods
  useImperativeHandle(ref, () => {
    return {
      // Return true if the renderer should be refreshed, false otherwise
      refresh: (params: ICellRendererParams) => {
        // You can add logic here if you need to re-render based on certain prop changes
        return false; // Returning false tells AG Grid not to re-render this component on data changes
      },
      // return the value to AG Grid when it asks for it
      getValue: () => {
        return "data";
      },
    };
  });
  return (
   <Popover>
      <PopoverTrigger asChild className="w-full h-3">
        <div>
            tata
        </div>
        
      </PopoverTrigger>
      <PopoverContent className="w-full! bg-red-600">
        hello
      </PopoverContent>
    </Popover>
  
  );
};
