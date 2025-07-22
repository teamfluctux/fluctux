import React, { useEffect, useMemo, useState } from "react";
import { AgGridMenuListButton } from "../components";
import { ArrowDownAZ, ArrowUpAZ, Check, Eraser, MoveRight } from "lucide-react";
import { IHeaderParams } from "ag-grid-community";

interface AZFilterProps extends IHeaderParams {
  setSort: (order: "asc" | "desc" | null) => void;
}

export const AZFilters: React.FC<AZFilterProps> = (props) => {
  const { setSort, column } = props;
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
    </div>
  );
};
