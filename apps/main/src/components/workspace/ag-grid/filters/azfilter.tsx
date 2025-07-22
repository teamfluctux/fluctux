import React, { useEffect, useMemo, useState } from "react";
import { AgGridMenuListButton } from "../components";
import { ArrowDownAZ, ArrowUpAZ, Check, Eraser, MoveRight } from "lucide-react";
import { IHeaderParams } from "ag-grid-community";

interface AZFilterProps extends IHeaderParams {
  setSort: (order: "asc" | "desc" | null) => void;
  model: string | null;
  onModelChange: (value: string | null) => void;
  availableValues?: string[]; // Add this for filter options
}

export const AZFilters: React.FC<AZFilterProps> = ({
  setSort,
  column,
  model,
  onModelChange,
  availableValues = [],
}) => {
  const [currentSort, setCurrentSort] = useState<"asc" | "desc" | null>(
    column.getSort() || null
  );
  const handleSort = useMemo(() => {
    return {
      sortAsc: () => setSort("asc"),
      sortDesc: () => setSort("desc"),
      clearSort: () => setSort(null),
    };
  }, [setSort]);

  // Sync local state with grid's sort state
  useEffect(() => {
    const listener = () => {
      setCurrentSort(column.getSort() || null);
    };

    column.addEventListener("sortChanged", listener);

    // Cleanup on unmount
    return () => {
      column.removeEventListener("sortChanged", listener);
    };
  }, [column]);

  const options = availableValues?.map((item) => ({
    label: item.charAt(0).toUpperCase() + item.slice(1),
    value: item.toLowerCase(),
  }));

  return (
    <div>
      <AgGridMenuListButton
        icon={ArrowDownAZ}
        onClick={handleSort.sortAsc}
        active={currentSort === "asc"}
      >
        Sort A <MoveRight size={16} /> Z
      </AgGridMenuListButton>
      <AgGridMenuListButton
        icon={ArrowUpAZ}
        onClick={handleSort.sortDesc}
        active={currentSort === "desc"}
      >
        Sort Z <MoveRight size={16} /> A
      </AgGridMenuListButton>
      <AgGridMenuListButton icon={Eraser} onClick={handleSort.clearSort}>
        Clear sorting
      </AgGridMenuListButton>
      {options && options.length > 0 && (
        <>
          <div className="border-b pt-2 pb-1 mt-2 text-xs text-muted-foreground uppercase tracking-wide">
            Filter
          </div>

          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-sm hover:bg-muted"
            >
              <input
                type="radio"
                name="az-filter"
                value={option.value}
                checked={model === option.value}
                onChange={() => onModelChange(option.value)}
                className="hidden peer"
              />
              <div
                className={`flex items-center gap-2 peer-checked:text-primary`}
              >
                <Check
                  size={14}
                  className={`opacity-0 peer-checked:opacity-100`}
                />
                {option.label}
              </div>
            </label>
          ))}

          <label className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-sm hover:bg-muted">
            <input
              type="radio"
              name="az-filter"
              value=""
              checked={!model}
              onChange={() => onModelChange(null)}
              className="hidden peer"
            />
            <div className="flex items-center gap-2 peer-checked:text-primary">
              <Check
                size={14}
                className={`opacity-0 peer-checked:opacity-100`}
              />
              All
            </div>
          </label>
        </>
      )}
    </div>
  );
};
