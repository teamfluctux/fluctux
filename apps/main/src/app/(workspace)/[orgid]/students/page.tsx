"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ColDef,
  ClientSideRowModelModule,
  CsvExportModule,
  themeQuartz,
  iconSetMaterial,
  NumberFilterModule,
  TextFilterModule,
  CustomFilterModule,
  IRowNode,
  ValidationModule,
} from "ag-grid-community";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@fluctux/ui";
import {
  doesSelectFilterPass,
  SelectFilterAgGrid,
} from "@/components/workspace/ag-grid/filters";

type StudentShiftType = "morning" | "day" | "none";
type StudentSection =
  | "A"
  | "B"
  | "C"
  | "D"
  | "H"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R";

type Students = {
  id: string;
  name: string;
  class: string;
  shift?: StudentShiftType;
  section?: StudentSection | string;
  group?: string;
  batchNo?: number;
  [key: string]: string | undefined | number;
};

const generateStudents = (): any[] => {
  const shifts: StudentShiftType[] = ["morning", "day", "none"];
  const sections: StudentSection[] = ["A", "B", "C"];
  const groups = ["Science", "Commerce", "Arts"];
  const classes = ["6", "7", "8", "9", "10"];

  return Array.from({ length: 20 }, (_, i) => ({
    id: `30${i + 1}`,
    name: `Student ${i + 1}`,
    class: classes[i % classes.length],
    shift: shifts[i % shifts.length]?.replace(/^\w/, (c) => c.toUpperCase()),
    section: sections[i % sections.length],
    group: groups[i % groups.length],
    batchNo: 100 + i,
    email: `student${i + 1}@school.edu`, // extra dynamic field
    phone: `01XXXXXXXX${i % 10}`, // extra dynamic field
  }));
};

export default function StudentsPage() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<Students[]>(generateStudents);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<Students>[]>([
    {
      field: "id",
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["reset"],
      },
    },
    {
      field: "name",
      // example of custom filter
      // filter: { component: UserRawNameFilter, doesFilterPass: doesFilterPass },
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["reset"],
      },
    },
    {
      field: "shift",
      filter: {
        component: SelectFilterAgGrid,
        doesFilterPass: doesSelectFilterPass,
      },
    },
    { field: "section" },
    { field: "group" },
    { field: "batchNo", filter: "agNumberColumnFilter" },
    { field: "email" },
    { field: "phone" },
  ]);

  const customTheme = themeQuartz
    .withParams({
      backgroundColor: "transparent",
      foregroundColor: "var(--foreground-color-1)",
      headerTextColor: "var(--foreground-color-4)",
      headerBackgroundColor: "var(--background-color-850C)",
      oddRowBackgroundColor: "transparent",
      headerColumnResizeHandleColor: "var(--background-color-700C)",
      borderColor: "var(--border-color-1)",
      fontSize: "14px",
      columnBorder: { style: "solid", color: "var(--border-color-1)" },
      wrapperBorder: false,
      wrapperBorderRadius: 0,
      rowHoverColor: "var(--background-color-900C)",
      rangeSelectionBorderColor: "var(--primary-color)",
      rangeSelectionBorderStyle: "solid",
      menuBackgroundColor: "var(--background-color-900C)",
      menuBorder: { style: "solid", color: "var(--border-color-1)" },
      inputBackgroundColor: "var(--background-color-800C)",
      buttonVerticalPadding: "5px",
      buttonBackgroundColor: "var(--background-color-800C)",
      buttonActiveBackgroundColor: "var(--surface-indigo-bg-active)",
      buttonActiveBorder: {
        style: "solid",
        color: "var(--surface-indigo-bg-active)",
      },
      inputPlaceholderTextColor: "var(--foreground-color-3)",
      pickerListBackgroundColor: "var(--background-color-900C)",
      pickerButtonBackgroundColor: "var(--background-color-800C)",
    })
    .withPart(iconSetMaterial);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-workspace_2 h-[50px] px-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple" className="!text-text-color_4">
                Apple
              </SelectItem>
              <SelectItem value="banana" className="!text-text-color_4">
                Banana
              </SelectItem>
              <SelectItem value="blueberry" className="!text-text-color_4">
                Blueberry
              </SelectItem>
              <SelectItem value="grapes" className="!text-text-color_4">
                Grapes
              </SelectItem>
              <SelectItem value="pineapple" className="!text-text-color_4">
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="h-[calc(100vh-91px)]">
        <AgGridReact
          loading={false}
          className="custom-scrollbar-color"
          theme={customTheme}
          rowData={rowData}
          columnDefs={colDefs}
          onFilterOpened={(event) => {
  const { column, api } = event;
  const colId = column.getId();

  api.getColumnFilterInstance(colId).then((filterInstance) => {
    // Check if the filter instance exists and has the isFilterActive method
    if (filterInstance && typeof filterInstance.isFilterActive === 'function') {
      // Check if the filter is currently active for this column
      if (filterInstance.isFilterActive()) {
        // If active, clear the filter model
        filterInstance.setModel(null);
        // Notify the grid that the filters have changed, which will refresh the data
        api.onFilterChanged();
        alert("Filter cleared"); // Optional: Provide user feedback
      }
    } else {
      console.warn(`Filter instance or isFilterActive method not found for column: ${colId}`);
    }
  });
}}
          // to enable custom filter
          enableFilterHandlers={true}
          modules={[
            ClientSideRowModelModule,
            CsvExportModule,
            NumberFilterModule,
            TextFilterModule,
            CustomFilterModule,
            ValidationModule,
          ]}
        />
      </div>
    </div>
  );
}
