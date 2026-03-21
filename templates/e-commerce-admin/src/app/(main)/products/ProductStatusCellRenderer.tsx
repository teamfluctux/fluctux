import React from "react";
import type { CustomCellRendererProps } from "ag-grid-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@fluctux/ui";

export const ProductStatusCellRenderer = (props: CustomCellRendererProps) => {
  const { value, data } = props;
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={value.value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {
                
            }
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
