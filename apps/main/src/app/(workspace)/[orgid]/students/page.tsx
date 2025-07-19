"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ColDef,
  ClientSideRowModelModule,
  CsvExportModule,
} from "ag-grid-community";

type Car = {
  make: string;
  model: string;
  price: number;
  electric: boolean;
};

export default function StudentsPage() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<Car[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<Car>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    <div className="w-full">
      hello
      <div className="h-[calc(100vh-100px)]">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          modules={[ClientSideRowModelModule, CsvExportModule]}
        />
      </div>
    </div>
  );
}
