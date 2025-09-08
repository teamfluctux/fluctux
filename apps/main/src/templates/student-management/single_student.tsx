import { STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS } from "@/constants/workspace";
import { ObjectListArray } from "@fluctux/ui";
import React from "react";

export const SingleStudent = () => {
  return (
    <div className="flex">
      <div className="h-[calc(100vh-40px)] flex-shrink-0 p-2 sticky top-[40px] w-[250px] border-r border-border-color_1 overflow-y-auto">
        <ObjectListArray data={STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS} />
      </div>
      <div className="w-full">{/* student overview */}</div>
    </div>
  );
};
