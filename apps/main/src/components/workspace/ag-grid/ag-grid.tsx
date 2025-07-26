import React from "react";
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
  TooltipModule,
} from "ag-grid-community";

export const AgGridComponent = ({
  rowData,
  colDefs,
}: {
  rowData: any[];
  colDefs: any[];
}) => {
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
         TooltipModule,
        NumberFilterModule,
        CellStyleModule,
        TextFilterModule,
        CustomFilterModule,
        ValidationModule,
      ]}
    />
  );
};
