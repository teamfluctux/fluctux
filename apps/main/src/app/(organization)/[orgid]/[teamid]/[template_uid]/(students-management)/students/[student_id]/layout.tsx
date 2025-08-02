"use client"
import React from "react";
import { STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS } from "@/constants/workspace";
import { ObjectListArray } from "@fluctux/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="h-[calc(100vh-40px)] flex-shrink-0 p-2 sticky top-0 w-[250px] border-r border-border-color_1 overflow-y-auto">
        <ObjectListArray data={STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS} />
  
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
