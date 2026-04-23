import type { LucideIcon } from "lucide-react";
import type { WorkSpaceListProps } from "@fluctux/ui";
import type { SettingsSlugType } from "@/constants";

type SettingsMenuItem = Omit<MenuListType[string]["items"][number], "slug"> & {
  slug?: SettingsSlugType;
};

export type SettingsSidebarMenuListType = {
  [key: string]: Omit<MenuListType[string], "items"> & {
    items: SettingsMenuItem[];
  };
};

export type ViewModeType = "list" | "grid";
