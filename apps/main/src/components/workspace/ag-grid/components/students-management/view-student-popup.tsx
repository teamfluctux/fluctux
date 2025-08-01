"use client";
import React, { useState } from "react";
import { ContextMenuItem, ContextMenuShortcut } from "@fluctux/ui";
import { LucideIcon, SquarePen } from "lucide-react";
import { studentManagementStore } from "@/services/stores";
import { observer } from "mobx-react";
import { ICellRendererComp, ICellRendererParams } from "ag-grid-community";

const editIcons: { [key in EditIconType]: LucideIcon } = {
  edit_1: SquarePen,
  edit_2: SquarePen,
  edit_3: SquarePen,
};

type ViewStudentPopupType = {
  label?: string;
  icon?: keyof typeof editIcons;
} & ICellRendererParams;

export const ViewStudentPopup: React.FC<ViewStudentPopupType> = (props) => {
  const { label, icon, value } = props;
  const TempEditIcon = (icon && editIcons[icon]) || editIcons.edit_1;
  

  return (
    <>
      <ContextMenuItem
        inset
        onClick={() =>
          studentManagementStore.setViewStudentPopup(true, value)
        }
      >
        {label ?? "Edit Student"}
        <ContextMenuShortcut>
          <TempEditIcon size={16} />
        </ContextMenuShortcut>
      </ContextMenuItem>
    </>
  );
};
