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
      <div className="w-full h-full overflow-y-auto overflow-x-hidden bg-background-color_950C">
        <WorkSpaceHeader />

        <div className="max-w-[1200px] px-5 w-full mx-auto">{children}</div>
      </div>
    </div>
  );
}
