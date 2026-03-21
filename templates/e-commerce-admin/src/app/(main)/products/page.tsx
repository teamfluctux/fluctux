"use client";
import React, { useEffect, useState } from "react";
import { AgGridComponent } from "./ag-grid";
import { FxButton, FxSeparator, Kbd } from "@fluctux/ui";
import { PlusIcon, Upload } from "lucide-react";
import { workspaceHeaderStore } from "@/services/stores";
import { formatScaleValue } from "@fluctux/shared";
import type { ColDef } from "ag-grid-community";
import { ProductStatusCellRenderer } from "./ProductStatusCellRenderer";
import {
  AgCellSelector,
  TAgCellSelectorRendererParams,
  type CellSelectorValuesType,
} from "./AgCellSelector";
import { AgCellPopover } from "./AGCellPopover";

type ProductsOverViewData = {
  label: string;
  value: number;
};

const PRODUCTS_OVERVIEW_DATA: ProductsOverViewData[] = [
  { label: "Total Products", value: 1284 },
  { label: "In Stock", value: 978 },
  { label: "Out of Stock", value: 306 },
  { label: "Low stock", value: 306 },
];
export type StatusLevelType = "SAFE" | "WARNING" | "DESTRUCTIVE";
type StatusValuetype = "PUBLISHED" | "DRAFT" | "TRASHED";
type StatusType = {
  label: string;
  value: StatusValuetype;
  level?: StatusLevelType;
};
type ProductManageDataType = {
  product_name?: string;
  product_image?: string;
  product_price?: number;
  categories?: { label: string; value: string }[];
  created_by?: string;
  status?: StatusType;
};

const statusOptions: CellSelectorValuesType<StatusLevelType>[] = [
  { value: "PUBLISHED", label: "Published", level: "SAFE" },
  { value: "DRAFT", label: "Draft", level: "WARNING" },
  { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
];

const statusLevel: Record<StatusLevelType, string> = {
  SAFE: "bg-surface-green-bg! rounded-sm px-3 py-1 inset-ring-1 group-hover:bg-surface-green-bg-active! inset-ring-surface-green-border hover:inset-ring-1 text-rdx-green-fg hover:text-rdx-green-fg!",
  WARNING:
    "bg-surface-yellow-bg! rounded-sm px-3 py-1 inset-ring-1 group-hover:bg-surface-yellow-bg-active! inset-ring-surface-yellow-border hover:inset-ring-1 text-rdx-yellow-fg hover:text-rdx-yellow-fg!",
  DESTRUCTIVE:
    "bg-surface-red-bg! rounded-sm px-3 py-1 inset-ring-1 group-hover:bg-surface-red-bg-active! inset-ring-surface-red-border hover:inset-ring-1 text-rdx-red-fg hover:text-rdx-red-fg!",
};


export default function ProductPage() {
  useEffect(() => {
    workspaceHeaderStore.setTitle("Manage Products");
    workspaceHeaderStore.setDesc(
      "View, edit, and organize your entire product catalog"
    );
  }, []);

  const [rowData, setRowData] = useState<ProductManageDataType[]>([
    {
      product_name: "Wireless Noise-Cancelling Headphones",
      product_price: 129.99,
      categories: [
        { label: "Electronics", value: "electronics" },
        { label: "Audio", value: "audio" },
      ],
      created_by: "admin",
      status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
    },
    {
      product_name: "Slim Fit Denim Jacket",
      product_price: 59.95,
      categories: [
        { label: "Clothing", value: "clothing" },
        { label: "Men", value: "men" },
      ],
      created_by: "john_doe",
      status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
    },
    {
      product_name: "Stainless Steel Water Bottle",
      product_price: 24.99,
      categories: [
        { label: "Kitchen", value: "kitchen" },
        { label: "Sports", value: "sports" },
      ],
      created_by: "admin",
      status: { value: "DRAFT", label: "Draft", level: "WARNING" },
    },
    {
      product_name: "Mechanical Gaming Keyboard",
      product_price: 89.0,
      categories: [
        { label: "Electronics", value: "electronics" },
        { label: "Gaming", value: "gaming" },
      ],
      created_by: "jane_smith",
      status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
    },
    {
      product_name: "Yoga Mat Anti-Slip",
      product_price: 34.5,
      categories: [
        { label: "Sports", value: "sports" },
        { label: "Fitness", value: "fitness" },
      ],
      created_by: "admin",
      status: { value: "DRAFT", label: "Draft", level: "WARNING" },
    },
    {
      product_name: "Ceramic Coffee Mug Set",
      product_price: 19.99,
      categories: [
        { label: "Kitchen", value: "kitchen" },
        { label: "Home", value: "home" },
      ],
      created_by: "john_doe",
      status: { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
    },
    {
      product_name: "Portable Bluetooth Speaker",
      product_price: 49.99,
      categories: [
        { label: "Electronics", value: "electronics" },
        { label: "Audio", value: "audio" },
      ],
      created_by: "jane_smith",
      status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
    },
    {
      product_name: "Running Shoes Ultra Boost",
      product_price: 110.0,
      categories: [
        { label: "Footwear", value: "footwear" },
        { label: "Sports", value: "sports" },
      ],
      created_by: "admin",
      status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
    },
  ]);
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<ProductManageDataType>[]>([
    { field: "product_name" },
    { field: "product_price" },
    {
      field: "status",
      cellRenderer: AgCellSelector,
      cellStyle: { padding: "0px 0px" },
      cellRendererParams: TAgCellSelectorRendererParams<StatusLevelType>({
        initialData: statusOptions,
        LevelConstants: statusLevel
      }),
    },
    { field: "categories", cellRenderer: AgCellPopover,  cellStyle: { padding: "0px 0px" }, },
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
