// Later make it reusable component. Move to packages/ui. Currently its in improving stage
import React from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  CsvExportModule,
  themeQuartz,
  iconSetMaterial,
  NumberFilterModule,
  TextFilterModule,
  CustomFilterModule,
  CellStyleModule,
  ValidationModule,
  TooltipModule,
  type BorderStyleValue,
} from "ag-grid-community";

type AgGridComponentPropsType = {
  rowData: any[];
  colDefs: any[];
  headerStyle?: {
    forground?: string;
    background?: string;
    columnResizeHandleColor?: string;
  };
  gridStyle?: {
    radius?: number;
    border?: boolean;
    borderColor?: string;
    fontSize?: number;
    fontFamily?: string;
  };
  rowStyle?: {
    oddRowBackgroundColor?: string;
    rowHoverColor?: string
  };
  columnStyle?: {
    border?: {
      style?: BorderStyleValue;
      color?: string;
    };
  };
};

export const AgGridComponent = ({
  rowData,
  colDefs,
  headerStyle: headerStyleProps,
  gridStyle: gridStyleProps,
  rowStyle: rowStyleProps,
  columnStyle: columnStyleProps,
}: AgGridComponentPropsType) => {
  const headerStyle: AgGridComponentPropsType["headerStyle"] = {
    forground: "var(--foreground-color-4)",
    background: "var(--background-color-850C)",
    columnResizeHandleColor: "var(--background-color-700C)",
    ...headerStyleProps,
  };

  const rowStyle: AgGridComponentPropsType["rowStyle"] = {
    oddRowBackgroundColor: "transparent",
    rowHoverColor: "var(--background-color-900C)",
    ...rowStyleProps,
  };

  const gridStyle: AgGridComponentPropsType["gridStyle"] = {
    border: false,
    radius: 0,
    fontSize: 14,
    borderColor: "var(--border-color-1)",
    fontFamily: "var(--font-geist_sans)",
    ...gridStyleProps,
  };

  const columnStyle: AgGridComponentPropsType["columnStyle"] = {
    border: {
      style: "solid",
      color: "var(--border-color-1)",
      ...columnStyleProps?.border,
    },
    ...columnStyleProps,
  };

  const customTheme = themeQuartz
    .withParams({
      backgroundColor: "transparent",
      foregroundColor: "var(--foreground-color-2)",
      headerTextColor: headerStyle.forground,
      headerBackgroundColor: headerStyle.background,
      oddRowBackgroundColor: rowStyle.oddRowBackgroundColor,
      headerColumnResizeHandleColor: headerStyle.columnResizeHandleColor,
      borderColor: gridStyle.borderColor,
      fontSize: gridStyle.fontSize,
      fontFamily: gridStyle.fontFamily,
      columnBorder: columnStyle.border,
      wrapperBorder: gridStyle.border,
      wrapperBorderRadius: gridStyle.radius,
      rowHoverColor: rowStyle.rowHoverColor,
      rangeSelectionBorderColor: "var(--surface-border-active)",
      rangeSelectionBorderStyle: "solid",
      menuBackgroundColor: "var(--background-color-900C)",
      menuBorder: { style: "solid", color: "var(--border-color-1)" },
      inputBackgroundColor: "var(--background-color-800C)",
      buttonVerticalPadding: "5px",
      buttonBackgroundColor: "var(--background-color-800C)",
      buttonActiveBackgroundColor: "var(--surface-bg-active)",
      buttonActiveBorder: {
        style: "solid",
        color: "var(--surface-bg-active)",
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
