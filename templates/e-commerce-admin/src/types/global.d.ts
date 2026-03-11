import type { LucideIcon } from "lucide-react";
import type { WorkSpaceListProps } from "@fluctux/ui";

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