import React, { useState, useEffect, useImperativeHandle } from "react";
import {
  type ICellRendererComp,
  type ICellRendererParams,
} from "ag-grid-community";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@fluctux/ui";

export type CellSelectorValuesType<TLevel extends string> = {
  value: string;
  label: string;
  level?: TLevel;
};

// Define props for Cell Renderer
type AgCellSelectorPropsType<TLevel extends string> = {
  LevelConstants: Record<TLevel, string>;
  // pass available options as a prop if they are dynamic
  initialData?: CellSelectorValuesType<TLevel>[];
  onSelectionChange?: (value: string) => void;
} & ICellRendererParams;

/**
 * A type-safe helper for passing `cellRendererParams` to AG Grid's `AgGridCellSelector` renderer.
 *
 * Since AG Grid types `cellRendererParams` as `any`, this function enforces
 * type validation on the params you pass, giving you autocomplete and compile-time errors.
 *
 * @template TLevel - A string union representing the level keys (e.g. `"SAFE" | "WARNING" | "DESTRUCTIVE"`)
 *
 * @param params - The renderer params to pass
 * @param params.initialData - The list of selectable options for the cell dropdown
 * @param params.LevelConstants - A record mapping each level key to a Tailwind/CSS className string
 * @param params.onSelectionChange - Optional callback fired when the user selects a new value
 *
 * @returns The same params object, but with full type checking applied
 *
 * @example
 * ```ts
 * cellRendererParams: TAgCellSelectorRendererParams<StatusLevelType>({
 *   initialData: statusOptions,          // CellValuesType<StatusLevelType>[]
 *   LevelConstants: {
 *     SAFE: "text-green-500",
 *     WARNING: "text-yellow-600",
 *     DESTRUCTIVE: "text-red-600",
 *   },
 *   onSelectionChange: (value) => console.log(value),
 * }),
 * ```
 */
export function TAgCellSelectorRendererParams<TLevel extends string>(
  params: Partial<
    Pick<
      AgCellSelectorPropsType<TLevel>,
      "initialData" | "LevelConstants" | "onSelectionChange"
    >
  >
) {
  return params;
}


/**
 * A generic AG Grid cell renderer that renders a dropdown selector with optional level-based styling.
 *
 * Supports any string union as a level type (e.g. `"SAFE" | "WARNING" | "DESTRUCTIVE"`),
 * making it reusable across different fields that require a styled select cell.
 *
 * @template TLevel - A string union representing the level keys used for conditional styling
 *
 * @param props - Component props extending AG Grid's `ICellRendererParams`
 * @param props.value - The current cell value as a `CellSelectorValuesType<TLevel>` object
 * @param props.initialData - The list of selectable options rendered in the dropdown
 * @param props.LevelConstants - A record mapping each `TLevel` key to a Tailwind/CSS className string for styling
 * @param props.onSelectionChange - Optional callback fired with the selected `value` string when the user changes selection
 * @param ref - Forwarded ref exposing AG Grid's `refresh` and `getValue` cell renderer methods
 *
 * @example
 * ```tsx
 * // in colDefs
 * {
 *   field: "status",
 *   cellRenderer: AgCellSelector,
 *   cellRendererParams: TAgCellSelectorRendererParams<StatusLevelType>({
 *     initialData: statusOptions,
 *     LevelConstants: {
 *       SAFE: "text-green-500",
 *       WARNING: "text-yellow-600",
 *       DESTRUCTIVE: "text-red-600",
 *     },
 *     onSelectionChange: (value) => console.log("selected:", value),
 *   }),
 * }
 * ```
 *
 * @remarks
 * - `getValue()` returns the current `value` string to AG Grid when it reads the cell
 * - `refresh()` always returns `false` — AG Grid will not force re-render on data changes
 * - Use `TAgCellSelectorRendererParams` helper to get type safety on `cellRendererParams`
 */
// In cellrenderer we can access params directly from props
export const AgCellSelector = <TLevel extends string>(
  props: AgCellSelectorPropsType<TLevel>,
  ref: React.Ref<Omit<ICellRendererComp, "getGui">>
) => {
  // State to manage the selected value within the component
  // AG Grid provides 'value' directly from the 'field' specified in colDefs
  const { value, initialData, LevelConstants, onSelectionChange } = props;
  const [selectedValue, setSelectedValue] =
    useState<CellSelectorValuesType<TLevel>>(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

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
        return selectedValue.value;
      },
    };
  });

  const handleValueChange = (value: string) => {
    const getValue = initialData?.find((t) => t.value == value);
    if (!getValue) return;
    setSelectedValue(getValue);
    // Notify AG Grid of the change
    // This will update the underlying row data
    props.setValue?.(getValue);
    onSelectionChange?.(value);
  };

  const data: CellSelectorValuesType<TLevel>[] = initialData || [];

  return (
    <Select value={selectedValue?.value} onValueChange={handleValueChange}>
      <SelectTrigger
        className={`w-full! bg-transparent! border-none! h-full! group px-4! hover:!bg-background-color_850C ring-0! outline-hidden!  rounded-none! `}
      >
        <div
          className={`w-fit   ${LevelConstants && LevelConstants[String(selectedValue?.level).toUpperCase() as TLevel]}`}
        >
          <SelectValue placeholder={selectedValue?.value} />
        </div>
      </SelectTrigger>
      <SelectContent className="!bg-background-color_850C">
        <SelectGroup>
          {data.map((d, i) => (
            <SelectItem
              key={`${d.value}${i}`}
              value={d.value}
              className={`text-text-color_4 `}
            >
              {d.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
