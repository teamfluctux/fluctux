import { CustomFilterDisplayProps, useGridFilterDisplay } from "ag-grid-react";
import React from "react";
import { ICellRendererParams, IRowNode } from "ag-grid-community";
import { CircleOff, Eclipse, SunDim } from "lucide-react";
import { LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { getWorkSpaceHeaderMenuIcon } from "@/constants/workspace";

interface DoesSelectFilterPassParams {
  model: string;
  node: IRowNode;
  handlerParams: {
    getValue: (node: IRowNode) => any;
  };
}

export const doesSelectFilterPass: ({
  model,
  node,
  handlerParams,
}: DoesSelectFilterPassParams) => boolean = ({
  model,
  node,
  handlerParams,
}: DoesSelectFilterPassParams) => {
  // inputed value from the user -> model
  //  If model is null (no filter), pass all rows. Otherwise, compare the lowercase version of the row's value with the filter value.
  if (!model) return true;
  //   Gets the actual value of the field/node being filtered for the row.
  const value = handlerParams.getValue(node);
  //   now match node-value with model to return the filtered items
  return value?.toString().toLowerCase() === model.toLowerCase();
};

export const SelectFilterAgGrid = ({
  model,
  onModelChange,
  colDef,
}: CustomFilterDisplayProps) => {
  // In filterParams, we can pass the availableValues and can access it via colDef.filter.filterParams
  const availableValues =
    (colDef?.filter.filterParams as SelectFilterParams)?.availableValues || [];

  const options =
    availableValues?.map((item) => ({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      value: item.toLowerCase(),
    })) || [];

  return (
    <div className="p-2 space-y-2 w-[200px] bg-background-color_925C ">
      {options.map((option) => {
        const Icon = getWorkSpaceHeaderMenuIcon[option.value] || null;
        return (
          <label key={option.value}>
            <input
              type="radio"
              name="status-filter"
              value={option.value}
              checked={model === option.value}
              // pass value to doesSelectFilterPass
              onChange={() => onModelChange(option.value)}
              className="hidden peer"
            />
            <div className="rounded-[3px] flex justify-start items-center gap-2 px-2 py-1.5 hover:bg-background-color_900C text-text-color_2 peer-checked:bg-background-color_800C peer-checked:text-text-color_1 font-medium">
              {Icon && <Icon size={LUCIDE_WORKSPACE_ICON_SIZE} />}
              {option.label}
            </div>
          </label>
        );
      })}

      {/* Optional Clear Option */}
      <label>
        <input
          type="radio"
          name="status-filter"
          checked={!model}
          // pass value to doesSelectFilterPass
          onChange={() => onModelChange(null)}
          className="hidden peer"
        />
        <div className="rounded-[3px] px-2 py-1.5 hover:bg-background-color_900C text-text-color_2 peer-checked:bg-background-color_800C peer-checked:text-text-color_1 font-medium">
          All
        </div>
      </label>
    </div>
  );
};
