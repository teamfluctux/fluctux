"use client";
import type { FilesManagerHeaderMenusType } from "@/types";
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
import React from "react";

const FILES_MANAGER_HEADER_MENUS: FilesManagerHeaderMenusType[] = [
  { label: "Recent", value: "recent", icon: Clock, type: "recent" },
  { label: "Folders", value: "folders", icon: Folder, type: "folder" },
  { label: "Images", value: "images", icon: Image, type: "image" },
  { label: "Videos", value: "videos", icon: Video, type: "video" },
  { label: "PDF", value: "pdf", icon: FileText, type: "pdf" },
  { label: "CSV", value: "csv", icon: Table, type: "csv" },
];

/**
 * Header component for the Files Manager.
 * 
 * Provides navigation filters for different file types (Images, Videos, etc.)
 * using URL query parameters.
 */
export const FileHeader = () => {
  const router = useRouter();
  const queryParams = useSearchParams();
  const getFileTypeQuery = queryParams.get("type");

  return (
    <section className=" w-full h-fit py-3 ">
      <div className="flex justify-start items-center gap-2">
        {FILES_MANAGER_HEADER_MENUS.map((item, i) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.value}>
              <FxButton
                onClick={() => router.push(`?type=${item.value}`)}
                icon={Icon}
                variant={
                  getFileTypeQuery === item.value ? "primary" : "ghost_zinc"
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
    </section>
  );
};
