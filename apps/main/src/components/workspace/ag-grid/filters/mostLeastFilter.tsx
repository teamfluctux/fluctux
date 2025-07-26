import React, { useEffect, useMemo, useState } from "react";
import { AgGridMenuListButton } from "../components";
import { ArrowDownAZ, ArrowUpAZ, Check, Eraser, MoveRight } from "lucide-react";
import { IHeaderParams } from "ag-grid-community";
import { useSorting } from "@/hooks";

interface AZFilterProps extends IHeaderParams {
  setSort: (order: "asc" | "desc" | null) => void;
}

export const AZFilters: React.FC<AZFilterProps> = (props) => {
  const {handleSort, currentSort} = useSorting(props)
  return (
    <div>
      <AgGridMenuListButton
        icon={ArrowDownAZ}
        onClick={handleSort.sortAsc}
        active={currentSort === "asc"}
      >
        Most <MoveRight size={16} /> Least
      </AgGridMenuListButton>
      <AgGridMenuListButton
        icon={ArrowUpAZ}
        onClick={handleSort.sortDesc}
        active={currentSort === "desc"}
      >
        Least <MoveRight size={16} /> Most
      </AgGridMenuListButton>
      {currentSort !== null && (
        <AgGridMenuListButton icon={Eraser} onClick={handleSort.clearSort}>
          Clear sorting
        </AgGridMenuListButton>
      )}
    </div>
  );
};
