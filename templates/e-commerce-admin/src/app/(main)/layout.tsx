import { Sidebar } from "@/components";
import React from "react";

type LayoutPropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutPropsType) {
  return <div className="flex justify-start items-start">
    <Sidebar/>
    <div>
    {children}
    </div>
    </div>;
}
