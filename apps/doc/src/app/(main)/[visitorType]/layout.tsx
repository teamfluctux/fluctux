import { AppSidebar } from "@/components/core";
import React from "react";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ visitorType: string }>;
  children: React.ReactNode;
}) {
  const { visitorType } = await params;

  return (
    <main className="w-full h-full grid grid-cols-[320px_1fr]">
      <AppSidebar doctype={visitorType} />
      {children}
    </main>
  );
}
