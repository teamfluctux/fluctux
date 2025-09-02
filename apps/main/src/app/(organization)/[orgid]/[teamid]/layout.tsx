import React from "react";

type TeamLayoutPropsType = {
  children: React.ReactNode;
  params: Promise<{ teamid: string }>;
};

export default async function TeamLayout({
  children,
  params,
}: TeamLayoutPropsType) {
  const { teamid } = await params;
  return <div>{children}</div>;
}
