import { AppSidebar } from "@/components/core";
import React from "react";

export default async function Layout({
  params,
  children
}: {
  params: Promise<{ slug: string }>;
  children: React.ReactNode
}) {
  const slug = (await params).slug;

  return <div className="w-full h-full grid grid-cols-[300px_1fr]">
    <AppSidebar slug={slug}/>
    {children}
  </div>;
}
