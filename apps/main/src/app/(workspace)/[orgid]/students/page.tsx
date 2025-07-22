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
  CellStyleModule,
  ValidationModule,
  ITextFilterParams,
  ICellRendererParams,
  IHeaderParams,
  GridApi,
  IFilter,
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
  AZFilters,
  doesSelectFilterPass,
  SelectFilterAgGrid,
} from "@/components/workspace/ag-grid/filters";
import { AgGridCellSelector } from "@/components/workspace/ag-grid/components/selector";
import { Clock } from "lucide-react";
import { GridHeaderCustomMenu } from "@/components/workspace/ag-grid/components";

const generateStudents = (): any[] => {
  const shifts: StudentShiftType[] = ["morning", "day", "none"];
  const sections: StudentSection[] = ["A", "B", "C"];
  const groups = ["science", "commerce", "arts", "humanities", "vocational"];
  const classes = ["6", "7", "8", "9", "10"];

  return Array.from({ length: 20 }, (_, i) => ({
    id: `30${i + 1}`,
    name: `Student ${i + 1}`,
    class: classes[i % classes.length],
    shift: shifts[i % shifts.length],
    section: sections[i % sections.length],
    group: groups[i % groups.length],
    batchNo: 100 + i,
    email: `student${i + 1}@school.edu`, // extra dynamic field
    phone: `01XXXXXXXX${i % 10}`, // extra dynamic field
  }));
};

const studentShifts = ["morning", "day", "none"];
const STUDENTS_SUBJECT_GROUP = [
  "science",
  "commerce",
  "arts",
  "humanities",
  "vocational",
  "none",
];

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
      cellStyle: { color: "var(--foreground)", fontWeight: 500 },
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["reset"],
      } as ITextFilterParams,
    },
    {
      field: "shift",
      headerComponent: GridHeaderCustomMenu,
      headerComponentParams: {
        icon: Clock,

        children: (params: IHeaderParams) => {
  const [currentModel, setCurrentModel] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      const filter = await (params.api as GridApi).getColumnFilterInstance(params.column.getColId());
      if (filter) {
        const model = filter.getModel();
        setCurrentModel(typeof model === "string" ? model : model?.toLowerCase?.() || null);
      }
    })();
  }, [params.api, params.column]);

  const onModelChange = async (value: string | null) => {
    const filter = await (params.api as GridApi).getColumnFilterInstance(params.column.getColId());
    if (filter) {
      filter.setModel(value || null);
      params.api.onFilterChanged();
      setCurrentModel(value);
    }
  };

  return (
    <AZFilters
      {...params}
      model={currentModel}
      onModelChange={onModelChange}
      availableValues={studentShifts}
    />
  );
}



      },
      cellStyle: { padding: "0px 0px" },
      cellRenderer: AgGridCellSelector,
      // so that we can access availableValues in the cellRenderer component
      cellRendererParams: {
        availableValues: studentShifts,
      },
      filter: {
        component: SelectFilterAgGrid,
        doesFilterPass: doesSelectFilterPass,
        // so that we can access availableValues in doesFilterPass
        filterParams: {
          availableValues: studentShifts,
        } as SelectFilterParams,
      },
    },
    { field: "section" },
    {
      field: "group",
      cellStyle: { padding: "0px 0px" },
      cellRenderer: AgGridCellSelector,
      cellRendererParams: {
        availableValues: STUDENTS_SUBJECT_GROUP,
      },
      filter: {
        component: SelectFilterAgGrid,
        doesFilterPass: doesSelectFilterPass,
        filterParams: {
          availableValues: STUDENTS_SUBJECT_GROUP,
        } as SelectFilterParams,
      },
    },
    { field: "batchNo", filter: "agNumberColumnFilter" },
    { field: "email" },
    { field: "phone" },
  ]);

  const customTheme = themeQuartz
    .withParams({
      backgroundColor: "transparent",
      foregroundColor: "var(--foreground-color-2)",
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
          // to enable custom filter
          enableFilterHandlers={true}
          modules={[
            ClientSideRowModelModule,
            CsvExportModule,
            NumberFilterModule,
            CellStyleModule,
            TextFilterModule,
            CustomFilterModule,
            ValidationModule,
          ]}
        />
      </div>
    </div>
  );
}
