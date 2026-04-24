"use client";
import type { FileCompQueryParamsType, FileViewModeType } from "@/types";
import { useUrlQueryParams } from "@fluctux/hooks";
import { Folder, Trash, type LucideIcon } from "lucide-react";
import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./context-menu";

type FolderContextMenuProspType = {
  children: React.ReactNode;
};

type FolderContextMenuListType = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const FOLDER_CONTEXT_MENU_LIST: FolderContextMenuListType[] = [
  {
    label: "Open",
    value: "open",
    icon: Folder,
  },
  {
    label: "Delete",
    value: "delete",
    icon: Trash,
  },
];

const FolderContextMenu = ({ children }: FolderContextMenuProspType) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-[200px]">
        {FOLDER_CONTEXT_MENU_LIST.map((item, i) => {
          const Icon = item.icon;
          return (
            <ContextMenuItem key={i} className="group">
              {Icon && <Icon size={16} className="text-text-svg_default!" />}
              <span >
              {item.label}
              </span>
            </ContextMenuItem>
          );
        })}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const FolderSmallIconsView = () => {
  return (
    <FolderContextMenu>
      <div className="w-full h-[65px] px-4 gap-3 flex justify-start  items-center rounded-lg border border-border-color_1 bg-background-color_900C hover:bg-background-color_800C transition-colors cursor-default data-[state=open]:bg-background-color_800C">
        <Folder size={25} className="text-text-color_2 shrink-0" />
        <div className="space-y-0.5">
          <h3 className="text-workspace_2 font-medium one-line-ellipsis">
            Folder Name
          </h3>
          <p className="text-workspace_3 text-text-color_2 font-medium">
            4 <span className="text-text-color_3">Files</span>
          </p>
        </div>
      </div>
    </FolderContextMenu>
  );
};

export const FolderComp = () => {
  const { getQueryParam } = useUrlQueryParams<FileCompQueryParamsType>();
  const viewMode = getQueryParam("view") as FileViewModeType;
  if (viewMode == "small_icons") return <FolderSmallIconsView />;
  return null;
};
