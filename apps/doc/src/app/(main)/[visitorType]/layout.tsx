import { AppSidebar } from "@/components/core";
import { DocNavCategory, getDocsByCategory } from "@/constants/docs";
import { USER_DOC_NAV } from "@/constants/docs/user.constant";
import React from "react";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ visitorType: DocNavCategory }>;
  children: React.ReactNode;
}) {
  const { visitorType } = await params;
  const data = getDocsByCategory[visitorType as DocNavCategory] || {};
  return (
    <main className="w-full h-full grid grid-cols-[320px_1fr]">
      <AppSidebar data={data} docType={visitorType}/>
      {children}
    </main>
  );
}
