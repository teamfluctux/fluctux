"use client";
import React, { useEffect, useState } from "react";
import { AgGridComponent } from "./ag-grid";
import { FxButton, FxSeparator, Kbd } from "@fluctux/ui";
import { PlusIcon, Upload } from "lucide-react";
import { workspaceHeaderStore } from "@/services/stores";
import { formatScaleValue } from "@fluctux/shared";

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


type ProductManageDataType = {
  product_name: string;
  product_price: number
  categories: {label: string, value: string}
  created_by: string;

}

export default function ProductPage() {
  useEffect(() => {
    workspaceHeaderStore.setTitle("Manage Products");
    workspaceHeaderStore.setDesc(
      "View, edit, and organize your entire product catalog"
    );
  }, []);

  const [rowData, setRowData] = useState<ProductManageDataType[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
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
                  <li  className="text-workspace_2 font-medium ">
                    <span className="text-text-color_2 ">{item.label}:</span> <span className="text-text-color_4">{formatScaleValue(item.value)}</span>
                  </li>
                  {
                    i < PRODUCTS_OVERVIEW_DATA.length -1 && <FxSeparator gap="sm" orientation="vertical" separatorClassName="w-4! border-border-color_2!"/>
                  }
                  </React.Fragment >
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
