import type { LucideIcon } from "lucide-react";
import type { WorkSpaceListProps } from "@fluctux/ui";
import type { SettingsSlugType } from "@/constants";

export type SidebarMenuListType = {
  [key: string]: {
    label?: string;
    items: {
      label: string;
      slug?: string;
      value?: string;
      icon?: LucideIcon;
    }[];
  };
};

export type SettingsSidebarMenuListType = {
  [key: string]: {
    label?: string;
    items: {
      label: string;
      slug?: SettingsSlugType;
      value?: string;
      icon?: LucideIcon;
    }[];
  };
};
