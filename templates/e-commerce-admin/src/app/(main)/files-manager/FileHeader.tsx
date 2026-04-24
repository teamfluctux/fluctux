"use client";
import type {
  FileCompQueryParamsType,
  FilesManagerHeaderMenusType,
  FileType,
} from "@/types";

import { FxButton, Separator } from "@fluctux/ui";
import {
  FileText,
  Folder,
  Image,
  Clock,
  Table,
  Video,
  type LucideIcon,
} from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FileViewMode } from "./FileViewMode";
import { useUrlQueryParams } from "@fluctux/hooks";
import { fileStore, workspaceHeaderStore } from "stores";
import { FileHeaderActions } from "./FileHeaderActions";

const FILES_MANAGER_HEADER_MENUS: FilesManagerHeaderMenusType[] = [
  { label: "Recent", icon: Clock, type: "recent" },
  { label: "Folders", icon: Folder, type: "folder" },
  { label: "Images", icon: Image, type: "image" },
  { label: "Videos", icon: Video, type: "video" },
  { label: "PDF", icon: FileText, type: "pdf" },
  { label: "CSV", icon: Table, type: "csv" },
];

/**
 * Header component for the Files Manager.
 *
 * Provides navigation filters for different file types (Images, Videos, etc.)
 * using URL query parameters.
 */
export const FileHeader = () => {
  const { handlePushQueryParam, getQueryParam } =
    useUrlQueryParams<FileCompQueryParamsType>();
  // -- Set heading and meta description
  useEffect(() => {
    workspaceHeaderStore.setMetaData({
      title: "Files Manager",
      desc: "All your uploaded files are displayed here.",
    });
    return () => {
      workspaceHeaderStore.clearMetaData();
      fileStore.clearFileStore();
    };
  }, []);

  return (
    <section className=" w-full h-fit py-3 flex justify-between items-center sticky top-[60px] z-50 bg-background-color_950C ">
      <div className="flex justify-start items-center gap-2">
        {FILES_MANAGER_HEADER_MENUS.map((item, i) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.type}>
              <FxButton
                onClick={() => {
                  handlePushQueryParam("type", item.type);
                }}
                icon={Icon}
                variant={
                  getQueryParam("type") === item.type ? "primary" : "ghost_zinc"
                }
                size="sm"
              >
                {item.label}
              </FxButton>
              {i < FILES_MANAGER_HEADER_MENUS.length - 1 && (
                <Separator orientation="vertical" className="h-5" />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-end items-center gap-3">
        <FileViewMode />
        <FileHeaderActions />
      </div>
    </section>
  );
};
