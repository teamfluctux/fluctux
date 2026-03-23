"use client";
import React, { useEffect, useState } from "react";
import { workspaceHeaderStore } from "@/services/stores";
import type { ColDef } from "ag-grid-community";

import {
  DUMMY_ROW_DATA,
  DUMMY_STATUS_LEVEL,
  DUMMY_STATUS_OPTIONS,
} from "@/constants";
import type { ProductManageDataType, StatusLevelType } from "@/types";
import {
  AgCellPopover,
  AgCellSelector,
  AgGridComponent,
  TAgCellPopoverRendererParams,
  TAgCellSelectorRendererParams,
} from "@/components/ag-grid";
import { ProductOverview } from "./ProductsOverview";
import { ProductActions } from "./ProductActions";

export default function ProductPage() {
  useEffect(() => {
    workspaceHeaderStore.setMetaData({
      title: "Manage Products",
      desc: "View, edit, and organize your entire product catalog",
    });
    return () => workspaceHeaderStore.clearMetaData()
  }, []);

  const [rowData, setRowData] = useState(DUMMY_ROW_DATA);
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<ProductManageDataType>[]>([
    { field: "name" },
    { field: "price" },
    {
      field: "status",
      cellRenderer: AgCellSelector,
      cellStyle: { padding: "0px 0px" },
      cellRendererParams: TAgCellSelectorRendererParams<StatusLevelType>({
        initialData: DUMMY_STATUS_OPTIONS,
        LevelConstants: DUMMY_STATUS_LEVEL,
      }),
    },
    {
      field: "categories",
      cellRenderer: AgCellPopover,
      cellStyle: { padding: "0px 0px" },
      cellRendererParams: TAgCellPopoverRendererParams({
        isIcon: true,
        onEditClick: (value) => alert(`Clicked ${value}`),
      }),
    },
    { field: "created_by" },
  ]);

  return (
    <div className="w-full h-[calc(100vh-80px)] overflow-hidden">
      <section className="h-[55px] w-full flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <ProductOverview />
          <ProductActions />
        </div>
      </section>
      <section className="w-full h-[calc(100%-55px)] pb-2">
        <AgGridComponent
          rowData={rowData}
          colDefs={colDefs}
          gridStyle={{ radius: 12 }}
        />
      </section>
    </div>
  );
}
