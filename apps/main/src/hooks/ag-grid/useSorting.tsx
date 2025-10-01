import { IHeaderParams } from "ag-grid-community";
import { useEffect, useMemo, useState } from "react";

interface AZFilterProps extends IHeaderParams {
  setSort: (order: "asc" | "desc" | null) => void;
}

export const useSorting = (props: AZFilterProps) => {
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
  return {
    handleSort,
    currentSort,
    setSort,
    column,
  };
};
