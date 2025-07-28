"use client";
import React, { useState } from "react";
import { ContextMenuItem, ContextMenuShortcut } from "@fluctux/ui";
import { LucideIcon, SquarePen } from "lucide-react";

const editIcons: { [key in EditIconType]: LucideIcon } = {
  edit_1: SquarePen,
  edit_2: SquarePen,
  edit_3: SquarePen,
};

export const EditCellListBtn = ({
  label,
  icon,
  openContextId,
}: {
  label?: string;
  icon?: keyof typeof editIcons;
  openContextId?: string;
}) => {
  const TempEditIcon = icon && editIcons[icon] || editIcons.edit_1;

  const [openStudentEditBox, setOpenStudentEditBox] = useState<boolean>(false);
  return (
    <>
      <ContextMenuItem inset onClick={() => setOpenStudentEditBox(true)}>
        {label ?? "Edit User"}
        <ContextMenuShortcut>
          <TempEditIcon size={16} />
        </ContextMenuShortcut>
      </ContextMenuItem>
    </>
  );
};
