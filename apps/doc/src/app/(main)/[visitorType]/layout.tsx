import React from "react";
import { DocWrapper } from "./DocWrapper";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ visitorType: string }>;
  children: React.ReactNode;
}) {
  const { visitorType } = await params;

  return (
    <DocWrapper visitorType={visitorType}>
      {children}
    </DocWrapper>
  );
}
