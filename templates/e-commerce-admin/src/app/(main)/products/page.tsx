"use client";
import React, { useEffect, useState } from "react";
import { productStore, workspaceHeaderStore } from "@/services/stores";
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
  AgViewAsPopup,
  TAgCellPopoverRendererParams,
  TAgCellSelectorRendererParams,
  TAgViewAsPopupRendererParams,
} from "@/components/ag-grid";
import {
  ProductActions,
  ProductOverview,
  ProductPopupView,
} from "@/components/workspace/products";

export default function ProductPage() {
  useEffect(() => {
    workspaceHeaderStore.setMetaData({
      title: "Manage Products",
      desc: "View, edit, and organize your entire product catalog",
    });
    return () => workspaceHeaderStore.clearMetaData();
  }, []);

  const [rowData, setRowData] = useState(DUMMY_ROW_DATA);

  const handleViewAsPopupClick = (id: string) => {
    productStore.setProductPopupView({open: true, id})
  }

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<ProductManageDataType>[]>([
    { field: "name", pinned: true, width: 400, cellRenderer: AgViewAsPopup, cellRendererParams: TAgViewAsPopupRendererParams({
      onViewAsClick: handleViewAsPopupClick
    }) },
    { field: "slug" },
    { field: "regular_price" },
    { field: "sale_price" },
    { field: "discount" },
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
    <>
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
    <ProductPopupView/>
    </>
  );
}
