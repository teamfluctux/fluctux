"use client";
import React, { useState } from "react";
import {
  ContextMenuItem,
  ContextMenuShortcut,
} from "@fluctux/ui";
import { SquarePen } from "lucide-react";

export const EditStudentAgGrid = () => {
  const [openStudentEditBox, setOpenStudentEditBox] = useState<boolean>(false);
  return (
    <>
      <ContextMenuItem inset onClick={() => setOpenStudentEditBox(true)}>
        Edit User
        <ContextMenuShortcut>
          <SquarePen size={16} />
        </ContextMenuShortcut>
      </ContextMenuItem>

    </>
  );
};
