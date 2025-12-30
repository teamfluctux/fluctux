"use client";

import {
  DEV_DOC_SIDEBAR_LISTS,
  USER_DOC_SIDEBAR_LISTS,
} from "@/constants/sidebar.constant";
import { sidebarStore } from "@/services/store";
import Link from "next/link";
import { useEffect, useTransition } from "react";

export const DocWrapper = ({
  children,
  visitorType,
}: {
  children: React.ReactNode;
  visitorType: string;
}) => {

  useEffect(() => {

      sidebarStore.setSidebarDocList(
        visitorType === "user" ? USER_DOC_SIDEBAR_LISTS : DEV_DOC_SIDEBAR_LISTS
      )

  }, [visitorType]);

  return (
    <>
      {children}
    </>
  );
};
