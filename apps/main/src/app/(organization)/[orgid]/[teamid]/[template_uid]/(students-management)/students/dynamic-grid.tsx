import React, { useState } from "react";
import {
  AZFilter,
  MostLeastFilter,
  doesSelectFilterPass,
  SelectFilterAgGrid,
} from "@/components/workspace/ag-grid/filters";
import { AgGridCellSelector } from "@/components/workspace/ag-grid/components/selector";
import { Clock, GitBranch, IdCard, UserRound, UsersRound } from "lucide-react";
import { ColDef, ICellRendererParams, ITextFilterParams } from "ag-grid-community";

import {
  ViewStudentPopup,
  GridHeaderCustomMenu,
  ManageCellWithContextMenu,
} from "@/components/workspace/ag-grid/components";
import { AgGridComponent } from "@/components/workspace/ag-grid";
import dynamic from "next/dynamic";

const generateStudents = (): any[] => {
  const shifts: StudentShiftType[] = ["morning", "day", "none"];
  const sections: StudentSection[] = ["A", "B", "C"];
  const groups = ["science", "commerce", "arts", "humanities", "vocational"];
  const classes = ["6", "7", "8", "9", "10"];

  return Array.from({ length: 20 }, (_, i) => ({
    id: parseInt(`30${i + 1}`),
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


export const DynamicStudentGrid = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<Students[]>(generateStudents);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<Students>[]>([
    {
      field: "id",
      headerComponent: GridHeaderCustomMenu,
      cellStyle: { padding: "0px 0px" },
      headerComponentParams: {
        icon: IdCard,
        children: MostLeastFilter,
        doesShowFilter: true,
      },
      cellRenderer: ManageCellWithContextMenu,
      cellRendererParams: (props: ICellRendererParams) => ({
        isEnableRightClickEdit: true,
        contextMenuComp: <ViewStudentPopup {...props} />,
      }),
      filter: "agNumberColumnFilter",
      filterParams: {
        buttons: ["reset"],
      },
    },
    {
      field: "name",
      headerComponent: GridHeaderCustomMenu,
      headerComponentParams: {
        icon: UserRound,
        children: AZFilter,
        doesShowFilter: true,
      },
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
        children: AZFilter,
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
    {
      field: "section",
      headerComponent: GridHeaderCustomMenu,
      headerComponentParams: {
        icon: GitBranch,
        children: AZFilter,
      },
    },
    {
      field: "group",
      headerComponent: GridHeaderCustomMenu,
      headerComponentParams: {
        icon: UsersRound,
        children: AZFilter,
      },

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
  return (
    <>
      <div className="h-[calc(100vh-91px)]">
        <AgGridComponent rowData={rowData} colDefs={colDefs} />
      </div>
    </>
  );
};
