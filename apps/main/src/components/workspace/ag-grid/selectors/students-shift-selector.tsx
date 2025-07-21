import React, { useState, useEffect, useImperativeHandle, useRef } from "react";
import { ICellRendererParams } from "ag-grid-community";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@fluctux/ui";

// Define props for Cell Renderer
interface ShiftSelectorProps extends ICellRendererParams {
  // AG Grid provides 'value' directly from the 'field' specified in colDefs
  value: StudentShiftType;
  // pass available options as a prop if they are dynamic
  availableShifts?: StudentShiftType[];
}

export const ShiftSelector = React.forwardRef<any, ShiftSelectorProps>(
  (props, ref) => {
    // State to manage the selected value within the component
    const [selectedValue, setSelectedValue] = useState<
      StudentShiftType | undefined
    >(props.value);

    useEffect(() => {
      setSelectedValue(props.value || "");
    }, [props.value]);

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
          return selectedValue;
        },
      };
    });

    const handleValueChange = (newValue: string) => {
      const newShiftValue = newValue as StudentShiftType;
      setSelectedValue(newShiftValue);

      // Notify AG Grid of the change
      // This will update the underlying row data
      props.setValue?.(newShiftValue);
    };

    const shiftsOptions: StudentShiftType[] = props.availableShifts || [
      "morning",
      "day",
      "none",
    ];

    return (
      <Select value={selectedValue || ""} onValueChange={handleValueChange}>
        <SelectTrigger className="!w-full !bg-transparent !border-none !h-full !px-4 hover:!bg-background-color_800C !ring-0 !outline-none  !rounded-none">
          <SelectValue placeholder="Select Shift" />
        </SelectTrigger>
        <SelectContent className="!bg-background-color_900C">
          <SelectGroup>
            <SelectLabel>Shift</SelectLabel>
            {shiftsOptions.map((shift) => (
              <SelectItem
                key={shift}
                value={shift}
                className="!text-text-color_4"
              >
                {shift.replace(/^\w/, (c) => c.toUpperCase())}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
);
