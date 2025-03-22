"use client";

import React from "react";
import { DocSidebarPropsType } from "./doc-sidebar";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

const DynamicDocSidebar = dynamic<DocSidebarPropsType>(
  () => import("./doc-sidebar"),
  {
    ssr: false,
    loading: () => (
      <aside
        className={`w-[250px] h-screen sticky top-0 bg-background-color_1 flex-shrink-0 doc-aside-nav doc-aside-nav-loader transition-all duration-150 ease-out`}
      >
        <nav className="h-[calc(100%-105px)] sticky top-[105px] overflow-y-scroll custom-scrollbar pr-2 pb-16 doc-aside-nav-container">
          <Skeleton height={52} borderRadius={"8px"} className="mb-1" />
          <Skeleton height={52} borderRadius={"8px"} className="mb-6" />
          {Array.from({ length: 2 }).map((_, i) => {
            return (
              <div key={i} className="mb-2">
                <Skeleton height={32} borderRadius={"5px"} className="mb-1" />
                <div className="flex flex-col justify-end items-end">
                  <Skeleton width={200} height={32} borderRadius={"5px"} />
                  <Skeleton width={200} height={32} borderRadius={"5px"} />
                  <Skeleton width={200} height={32} borderRadius={"5px"} />
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    ),
  }
);

export const DocOnDemandSidebar = ({ docType, data }: DocSidebarPropsType) => {
  return <>{data && <DynamicDocSidebar docType={docType} data={data} />}</>;
};
