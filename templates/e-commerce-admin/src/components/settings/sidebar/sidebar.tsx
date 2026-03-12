"use client";
import { ADMIN_SETTINGS_SIDEBAR } from "@/constants";
import { getSidebarHiddenItemsPostions } from "@/utils";
import {
  FxButton,
  ScrollArea,
  WorkSpaceLinkList,
  WorkSpaceList,
  type WorkSpaceListProps,
} from "@fluctux/ui";
import { ArrowLeft } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const hiddenLookUp = getSidebarHiddenItemsPostions("")

export const SettingsSidebar = () => {
  const router = useRouter();
  const path_name = usePathname();
  const handleLogOut = () => {
    alert("Logged out!");
  };

  const handleWorkspaceListClick: WorkSpaceListProps["onClickDo"] = (
    _active,
    _disabled,
    value,
    _label
  ) => {
    if (value === "logout") handleLogOut();
  };

  return (
    <aside className="w-[320px] h-full  border-r border-border-color_1">
      <div className="sticky top-0 left-0 border-b border-border-color_1 bg-background-color_925C p-3 h-[95px] flex flex-col justify-center items-start">
        <h1 className="text-read_16 font-medium">Settings</h1>
        <p className="text-text-color_2 text-workspace_3 leading-4 mt-1 ">
          Configure and manage your store preferences, integrations, and account
          settings
        </p>
      </div>

      <div className="w-full h-[50px] flex justify-start items-center px-3">
        <FxButton
          onClick={() => router.push("/dashboard")}
          variant="secondary"
          size="sm"
          icon={ArrowLeft}
        >
          <span>Back to dashboard</span>
        </FxButton>
      </div>

      <ScrollArea className="w-full h-[calc(100%-145px)] p-3">
        {Object.entries(ADMIN_SETTINGS_SIDEBAR).map(([Key, data], i) => {
          const hiddenItems = hiddenLookUp[i] ?? [];
            const visibleItems = data.items.filter(
              (_, j) => !hiddenItems.includes(j)
            );
            if (visibleItems.length === 0) return null;
          return (
            <div key={`${Key}-${i}`} className=" mb-4">
              <p className="text-workspace_3 font-medium text-text-color_3 px-2 mb-1">
                {data.label}
              </p>
              <ul className="flex flex-col gap-0.5">
                {visibleItems.map((item, j) => {
                  return (
                    <React.Fragment key={`${item.slug ?? item.value}-${j}`}>
                      {item.slug ? (
                        <WorkSpaceLinkList
                          active={path_name === item.slug}
                          href={item.slug}
                          icon={item.icon}
                        >
                          {item.label}
                        </WorkSpaceLinkList>
                      ) : (
                        <WorkSpaceList
                          onClickDo={handleWorkspaceListClick}
                          value={item.value}
                          icon={item.icon}
                        >
                          {item.label}
                        </WorkSpaceList>
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ScrollArea>
    </aside>
  );
};
