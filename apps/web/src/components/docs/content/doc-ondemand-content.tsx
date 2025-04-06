"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DocContentPropsType } from "./doc-content";
import { InlineLoading } from "@fluctux/ui";

const DynamicDocContent = dynamic<DocContentPropsType>(
  () => import("./doc-content"),
  {
    ssr: false,
    loading: () => (
      <section className="fx-flex-ct gap-5 workspace-exclude-header relative w-full h-screen">
        <div className="w-full h-full fx-flex-center">
          <InlineLoading />
        </div>
      </section>
    ),
  }
);

export const DocOnDemandContent = ({ data }: DocContentPropsType) => {
  const [loading, setLoading] = useState(false);
  return <>{!loading && <DynamicDocContent data={data} />}</>;
};
