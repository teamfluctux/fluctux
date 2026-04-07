"use client";
import {
  Button,
  ButtonGroup,
  ScrollArea,
  Sheet,
  SheetContent,
} from "@fluctux/ui";

import type { MenuDataType } from "@fluctux/types";
import { useUrlQueryParams } from "@fluctux/hooks";
import { observer } from "mobx-react";
import { productStore } from "@/services/stores";
import type { ProductQueryParams } from "@/types";
import {
  AGCellBadge,
  AgCellSelector,
  AgGridComponent,
  TAgCellBadgeRendererParams,
  TAgCellSelectorRendererParams,
} from "@/components/ag-grid";
import { useCallback, useRef, useState } from "react";
import type { ColDef, ICellRendererParams } from "ag-grid-community";
import { ATTR_TYPE_OPTIONS, DUMMY_STATUS_LEVEL } from "@/constants";
import type { AgGridReact } from "ag-grid-react";

// -- Types
type AttrDataType = {
  id: string;
  title: string;
  type: {
    label?: string;
    value: "COLOR" | "TEXT";
  };
  data: {
    label?: string;
    values: string;
  }[];
};

// -- Constants
const PRODUCT_OPTIONS_HEADER_MENUS: MenuDataType[] = [
  { label: "Attributes", value: "attributes" },
  { label: "Variations", value: "variations" },
  { label: "Status Labels", value: "status-labels" },
  { label: "Stock Labels", value: "stocks-labels" },
];

export const ProductOptions = observer(() => {
  const gridRef = useRef<AgGridReact>(null);

  // -- UI states
  const [attrRowData, setAttrRowData] = useState<AttrDataType[]>([
    {
      id: crypto.randomUUID(),
      title: "Color",
      type: { label: "Color", value: "COLOR" },
      data: [
        { label: "Primary", values: "Red" },
        { label: "Secondary", values: "Blue" },
        { label: "Tertiary", values: "Green" },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Size",
      type: { label: "Text", value: "TEXT" },
      data: [
        { label: "Extra Small", values: "XS" },
        { label: "Small", values: "S" },
        { label: "Medium", values: "M" },
        { label: "Large", values: "L" },
        { label: "Extra Large", values: "XL" },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Material",
      type: { label: "Text", value: "TEXT" },
      data: [
        { label: "Natural", values: "Cotton" },
        { label: "Synthetic", values: "Polyester" },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Weight",
      type: { label: "Text", value: "TEXT" },
      data: [{ values: "Light" }, { values: "Medium" }, { values: "Heavy" }],
    },
  ]);

  //   -- Remove specific row by id
  const removeAttrById = useCallback((id: string) => {
    const rowData = gridRef.current!.api.getRowNode(id);
    const result = gridRef.current!.api.applyTransaction({
      remove: [rowData],
    });
    // remove after successfull remove from grid
    setAttrRowData((prev) =>
      prev.filter(
        (item) =>
          item.id !== result?.remove.map((item) => item.data.id).toString()
      )
    );
  }, []);

  /**
   * Updates the `data` column cell whenever the `type` column value changes.
   * This forces AG Grid to re-render the `data` cell renderer with the latest row data,
   * reflecting the new type. Also intended as the hook point for persisting the change to the database.
   *
   * @param value - The newly selected type value (e.g. `"COLOR"` or `"TEXT"`)
   * @param params - The full `ICellRendererParams` from the `type` cell renderer,
   * used to access the row node and grid API
   *
   * @example
   * ```ts
   * cellRendererParams: TAgCellSelectorRendererParams({
   *   initialData: ATTR_TYPE_OPTIONS,
   *   LevelConstants: {},
   *   onSelectionChange: handleUpdateDataOnTypeChange,
   * }),
   * ```
   *
   * @remarks
   * - Uses `params.node.setDataValue("data", [...getDataNodeValues])` to trigger
   *   a cell value change event on the `data` column, which causes AG Grid to
   *   call `refresh()` on the `AGCellBadge` renderer
   * - The spread `[...getDataNodeValues]` creates a new array reference,
   *   ensuring AG Grid detects the change even if the contents are the same
   * - Database persistence logic should be added inside this function
   */
  const handleUpdateDataOnTypeChange = (
    value: string,
    params: ICellRendererParams
  ) => {
    const getDataNodeValues = params.node.data.data;
    params.node.setDataValue("data", [...getDataNodeValues]);
  };

  const [attrColDefs] = useState<ColDef<AttrDataType>[]>([
    {
      field: "title",
      headerName: "Attribute",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      enableCellChangeFlash: true,
      cellStyle: { padding: "0px 0px" },
      cellRenderer: AgCellSelector,
      cellRendererParams: TAgCellSelectorRendererParams({
        initialData: ATTR_TYPE_OPTIONS,
        onSelectionChange: handleUpdateDataOnTypeChange,
      }),
    },
    {
      field: "data",
      headerName: "Values",
      flex: 2,
      enableCellChangeFlash: true,
      cellRenderer: AGCellBadge,
      cellRendererParams: TAgCellBadgeRendererParams({
        onRemoveRow: removeAttrById,
      }),
    },
  ]);

  // -- Handle query params
  const { handlePushQueryParam, removeMultipleQueryParams, getQueryParam } =
    useUrlQueryParams<ProductQueryParams>();
  // -- Get query params
  const getOptionsMenuParam = getQueryParam("opt-menu");

  //   -- Remove multiple rows via transaction
  const removeSelected = useCallback(() => {
    const selectedRows =
      gridRef.current!.api.getSelectedRows() as AttrDataType[];
    const selectedData = selectedRows.map((row) => row);
    const result = gridRef.current!.api.applyTransaction({
      remove: selectedData,
    });
    setAttrRowData(
      (prev) =>
        result?.remove?.reduce(
          (acc, rowNode) => acc.filter((item) => item.id !== rowNode.data.id),
          prev
        ) ?? prev
    );
  }, []);

  return (
    <>
      <Sheet
        modal={false} // prevent intercepting pointer events
        open={productStore.isProductOptionsOpen}
        onOpenChange={(value) => {
          productStore.setIsProductOptionsOpen();
          if (!value) {
            removeMultipleQueryParams("opt-menu", "options");
          }
        }}
      >
        <SheetContent
          overlayBackground
          className="max-w-[1200px] w-full p-2 "
          //   disable pointer event propagation. so that on select click sheet dont turn off
          onPointerDownOutside={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <div className="w-full h-full bg-background-color_900C overflow-hidden! border border-border-color_1 rounded-xl">
            <div className="w-full h-[50px] border-b border-border-color_1 flex justify-between items-center px-2">
              <ButtonGroup className="*:text-workspace_2">
                {PRODUCT_OPTIONS_HEADER_MENUS.map((item, i) => {
                  return (
                    <Button
                      variant={"secondary"}
                      className={`text-text-color_2 bg-background-color_850C hover:bg-background-color_800C  ${getOptionsMenuParam === item.value && "text-surface-fg-2 bg-surface-bg-active hover:bg-surface-bg-active"}`}
                      onClick={() => {
                        handlePushQueryParam("opt-menu", item.value);
                      }}
                      key={i}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </div>
            <div>
              <button onClick={removeSelected}>remove</button>
            </div>
            {attrRowData.map((item) => {
              return <div>{item.title}</div>;
            })}
            <div className="w-full h-[calc(100%-50px)]">
              {getOptionsMenuParam === "attributes" && (
                <AgGridComponent
                  ref={gridRef}
                  getRowId={(params) => params.data.id}
                  rowData={attrRowData}
                  colDefs={attrColDefs}
                  enableRowSelection
                  gridStyle={{ radius: 0 }}
                />
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
});
