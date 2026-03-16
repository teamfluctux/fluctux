import type { LucideIcon } from "lucide-react";

export type DashboardOverviewDatatype = {
  [key: string]: {
    itemKey: string;
    currentValue: number;
    previousValue?: number | null;
    newValue?: number | null;
    icon?: LucideIcon;
    colorClass?: string;
  };
};
