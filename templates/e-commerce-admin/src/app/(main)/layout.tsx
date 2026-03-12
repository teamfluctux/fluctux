import { Sidebar, WorkSpaceHeader } from "@/components";
import { ScrollArea } from "@fluctux/ui";
import React from "react";

type LayoutPropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutPropsType) {
  return (
    <div className="flex justify-start items-start w-full h-screen overflow-hidden">
      <Sidebar />
      <div className="px-3 w-full h-screen overflow-hidden bg-background-color_925C">
        <WorkSpaceHeader />
        <ScrollArea className="w-full h-[calc(100%-60px)] border border-border-color_1 rounded-t-rounded_15C bg-background-color_950C">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}
