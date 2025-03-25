"use client";
import { cn, FxSeparator, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { ArrowLeftRight, CirclePlus, Telescope } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export const CommandMenu = () => {
  const [isOrgItemHover, setIsOrgItemHover] = useState<boolean>(false);
  const [orgHoverSlug, setOrgHoverSlug] = useState<string>("");
  const handleMouseEnterOrgItem = (slug: string) => {
    setOrgHoverSlug(slug);
    setIsOrgItemHover(true);
  };
  const handleMouseLeaveOrgItem = () => {
    setOrgHoverSlug("");
    setIsOrgItemHover(false);
  };
  return (
    <>
      <div className="w-fit border-border-color_1 overflow-hidden bg-background-color_1 border rounded h-[400px] fx-flex-center">
        <div
          className={cn(
            "hover:bg-background-color_2 w-[200px]  flex-shrink-0  border-border-color_1 h-full",
            isOrgItemHover ? "border-r" : "border-none"
          )}
        >
          <ul className="p-2" onMouseLeave={() => setIsOrgItemHover(false)}>
            <p className="text-workspace_3 text-text-color_3 font-medium ">
              Organizations
            </p>
            <li
              onMouseEnter={() => handleMouseEnterOrgItem("hello-world")}
              className="text-workspace_2  text-text-color_4 hover:bg-background-color_5 hover:text-text-color_1 px-2 py-1 rounded-tiny cursor-pointer font-medium "
            >
              Mahin Org
            </li>
          </ul>
          <FxSeparator orientation="horizontal" />
          <ul className="p-2">
            <Link href={"/create/org"}>
            <li className="text-workspace_2  group text-text-color_4 hover:bg-background-indigo_primary dark:hover:text-text-color_1 hover:text-text-color_default_white px-2 py-1 rounded-tiny cursor-pointer font-medium fx-flex-cl gap-2">
              <div className="text-text-color_2 dark:group-hover:text-text-color_1 group-hover:text-text-color_default_white">
                <CirclePlus size={LUCIDE_WORKSPACE_ICON_SIZE} />
              </div>
              <span>Create new org</span>
            </li>
            </Link>
            <li className="text-workspace_2 group text-text-color_4 hover:bg-background-color_5 hover:text-text-color_1 px-2 py-1 rounded-tiny cursor-pointer font-medium fx-flex-cl gap-2">
              <div className="text-text-color_2 group-hover:text-text-indigo-color_1">
                <Telescope size={LUCIDE_WORKSPACE_ICON_SIZE} />
              </div>
              <span>Explore</span>
            </li>
          </ul>
          <FxSeparator orientation="horizontal" />
          <ul className="p-2">
            <li className="text-workspace_2  text-text-color_4 group hover:bg-background-color_5 hover:text-text-color_1 px-2 py-1 rounded-tiny cursor-pointer font-medium fx-flex-cl gap-2">
              <div className="text-text-svg_default group-hover:text-text-color_1">
                <ArrowLeftRight size={LUCIDE_WORKSPACE_ICON_SIZE} />
              </div>
              <span>Switch organization</span>
            </li>
          </ul>
        </div>

        <div
          onMouseLeave={() => handleMouseLeaveOrgItem()}
          onMouseEnter={() => setIsOrgItemHover(true)}
          className={cn(
            "hover:bg-background-color_2 h-full transition-all duration-300 opacity-0 overflow-hidden",
            isOrgItemHover ? "w-[250px] opacity-100" : "w-0"
          )}
        >
          {orgHoverSlug && <p>{orgHoverSlug}</p>}
        </div>
      </div>
    </>
  );
};
