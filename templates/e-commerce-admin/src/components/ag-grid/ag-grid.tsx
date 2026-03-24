// Later make it reusable component. Move to packages/ui. Currently its in improving stage
import React, { forwardRef } from "react";
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
  RowSelectionModule,
  type RowSelectionOptions,
  type BorderStyleValue,
  HighlightChangesModule,
  ClientSideRowModelApiModule,
  RowApiModule,
} from "ag-grid-community";

type AgGridComponentPropsType = {
  rowData: any[];
  colDefs: any[];
  getRowId?: (params: { data: any }) => string;
  enableRowSelection?: boolean;
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
    rowHoverColor?: string;
  };
  columnStyle?: {
    border?: {
      style?: BorderStyleValue;
      color?: string;
    };
  };
};

const rowSelection: RowSelectionOptions = {
  mode: "multiRow",
  groupSelects: "descendants",
  headerCheckbox: true,
};

/**
 * A themed AG Grid wrapper component built on top of `AgGridReact`.
 *
 * Applies a consistent design system theme using `themeQuartz` with customizable
 * header, row, grid, and column styles via props. Falls back to sensible
 * CSS variable-based defaults when style props are not provided.
 *
 * @param props - Component props
 * @param props.rowData - The row data array to display in the grid
 * @param props.colDefs - Column definitions including field, renderer, and style config
 * @param props.headerStyle - Optional overrides for header appearance
 * @param props.headerStyle.forground - Header text color (default: `--foreground-color-4`)
 * @param props.headerStyle.background - Header background color (default: `--background-color-850C`)
 * @param props.headerStyle.columnResizeHandleColor - Color of the column resize handle (default: `--background-color-700C`)
 * @param props.gridStyle - Optional overrides for overall grid appearance
 * @param props.gridStyle.border - Whether to show the outer grid border (default: `false`)
 * @param props.gridStyle.radius - Grid wrapper border radius (default: `0`)
 * @param props.gridStyle.fontSize - Grid font size in px (default: `14`)
 * @param props.gridStyle.borderColor - Grid border color (default: `--border-color-1`)
 * @param props.gridStyle.fontFamily - Grid font family (default: `--font-geist_sans`)
 * @param props.rowStyle - Optional overrides for row appearance
 * @param props.rowStyle.oddRowBackgroundColor - Background color for odd rows (default: `transparent`)
 * @param props.rowStyle.rowHoverColor - Row hover background color (default: `--background-color-900C`)
 * @param props.columnStyle - Optional overrides for column appearance
 * @param props.columnStyle.border - Column border style config (default: solid `--border-color-1`)
 *
 * @example
 * ```tsx
 * <AgGridComponent
 *   rowData={products}
 *   colDefs={colDefs}
 *   headerStyle={{ background: "var(--background-color-900C)" }}
 *   gridStyle={{ fontSize: 13, border: true }}
 * />
 * ```
 *
 * @remarks
 * - Uses `ClientSideRowModelModule` for client-side row handling
 * - Uses `CsvExportModule` for CSV export support
 * - Custom filters are enabled via `enableFilterHandlers`
 * - Icons use `iconSetMaterial` from AG Grid
 */
export const AgGridComponent = forwardRef<
  AgGridReact,
  AgGridComponentPropsType
>(
  (
    {
      rowData,
      colDefs,
      headerStyle: headerStyleProps,
      gridStyle: gridStyleProps,
      rowStyle: rowStyleProps,
      columnStyle: columnStyleProps,
      enableRowSelection = false,
      getRowId = (params) => params.data.id
    },
    ref
  ) => {
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
        selectedRowBackgroundColor: "var(--surface-bg-active)",
        checkboxCheckedBackgroundColor: "var(--primary-color)",
        checkboxCheckedShapeColor: "#ffffff",
        valueChangeValueHighlightBackgroundColor: "var(--soft-green-bg-active)",
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
        ref={ref}
        loading={false}
        className="custom-scrollbar-color"
        theme={customTheme}
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection={enableRowSelection ? rowSelection : undefined}
        getRowId={getRowId} // use id as the row key to avoid key conflicts:
        // to enable custom filter
        enableFilterHandlers={true} 
        
        modules={[
          ClientSideRowModelModule,
          ClientSideRowModelApiModule,
          CsvExportModule,
          TooltipModule,
          NumberFilterModule,
          RowSelectionModule,
          HighlightChangesModule,
          CellStyleModule,
          TextFilterModule,
          RowApiModule,
          CustomFilterModule,
          ValidationModule,
        ]}
      />
    );
  }
);
