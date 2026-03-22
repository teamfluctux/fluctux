"use client";
import React, { useEffect, useState } from "react";
import { FxButton, FxPopover, FxSeparator } from "@fluctux/ui";
import { Ellipsis, PlusIcon } from "lucide-react";
import { workspaceHeaderStore } from "@/services/stores";
import { formatScaleValue } from "@fluctux/shared";
import type { ColDef } from "ag-grid-community";

import {
  DUMMY_ROW_DATA,
  DUMMY_STATUS_LEVEL,
  DUMMY_STATUS_OPTIONS,
  PRODUCT_PAGE_MENU_OPTIONS,
  PRODUCTS_OVERVIEW_DATA,
} from "@/constants";
import type { ProductManageDataType, StatusLevelType } from "@/types";
import { AgCellPopover, AgCellSelector, AgGridComponent, TAgCellPopoverRendererParams, TAgCellSelectorRendererParams } from "@/components/ag-grid";

export default function ProductPage() {
  useEffect(() => {
    workspaceHeaderStore.setTitle("Manage Products");
    workspaceHeaderStore.setDesc(
      "View, edit, and organize your entire product catalog"
    );
  }, []);

  const [rowData, setRowData] = useState(DUMMY_ROW_DATA);
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<ProductManageDataType>[]>([
    { field: "product_name" },
    { field: "product_price", },
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
          <div>
            <ul className="flex justify-start items-center shrink-0 ">
              {PRODUCTS_OVERVIEW_DATA.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <li className="text-workspace_2 font-medium ">
                      <span className="text-text-color_2 ">{item.label}:</span>{" "}
                      <span className="text-text-color_4">
                        {formatScaleValue(item.value)}
                      </span>
                    </li>
                    {i < PRODUCTS_OVERVIEW_DATA.length - 1 && (
                      <FxSeparator
                        gap="sm"
                        orientation="vertical"
                        separatorClassName="w-4! border-border-color_2!"
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-center items-center w-fit shrink-0 gap-3">
            <FxButton icon={PlusIcon} variant="primary" size="sm">
              Add Products
            </FxButton>
            <FxPopover
              align="end"
              InteractChild={
                <FxButton
                  icon={Ellipsis}
                  iconSize={16}
                  variant="secondary"
                  size="rounded_sm"
                />
              }
              items={PRODUCT_PAGE_MENU_OPTIONS}
            />
          </div>
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
