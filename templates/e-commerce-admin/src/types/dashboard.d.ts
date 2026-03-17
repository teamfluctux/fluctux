import type { LucideIcon } from "lucide-react";

export type DashboardOverviewDatatype = {
  [key: string]: {
    itemKey: DashboardOverviewDataItemKeyType;
    currentValue: number;
    previousValue?: number | null;
    newValue?: number | null;
    icon?: LucideIcon;
    colorClass?: string;
  };
};


export type DashboardOverviewDataItemKeyType = 
  | "total-sales"
  | "total-orders"
  | "low-stock-items"
  | "active-products"
  | "net-revenue"
  | "discount-amount"
  | "taxes-collected"
  | "refund-amount"