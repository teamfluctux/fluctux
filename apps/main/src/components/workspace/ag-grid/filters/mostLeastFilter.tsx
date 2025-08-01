import React from "react";
import { AgGridMenuListButton } from "../components";
import { ArrowDownNarrowWide, ArrowDownWideNarrow, ArrowUpAZ, Check, Eraser, MoveRight } from "lucide-react";
import { IHeaderParams } from "ag-grid-community";
import { useSorting } from "@/hooks";

interface AZFilterProps extends IHeaderParams {
  setSort: (order: "asc" | "desc" | null) => void;
}

export const MostLeastFilter: React.FC<AZFilterProps> = (props) => {
  const { handleSort, currentSort } = useSorting(props);
  return (
    <div>
      <AgGridMenuListButton
        icon={ArrowDownNarrowWide}
        onClick={handleSort.sortAsc}
        active={currentSort === "asc"}
      >
        Least <MoveRight size={16} /> Most
      </AgGridMenuListButton>

      <AgGridMenuListButton
        icon={ArrowDownWideNarrow}
        onClick={handleSort.sortDesc}
        active={currentSort === "desc"}
      >
        Most <MoveRight size={16} /> Least
      </AgGridMenuListButton>
      {currentSort !== null && (
        <AgGridMenuListButton icon={Eraser} onClick={handleSort.clearSort}>
          Clear sorting
        </AgGridMenuListButton>
      )}
    </div>
  );
};
