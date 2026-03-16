"use client";
import { Button, ButtonGroup } from "@fluctux/ui";
import {
  ArrowUp,
  PlusIcon,
  type LucideIcon,
  DollarSign as DollarSignIcon,
  ShoppingCart as ShoppingCartIcon,
  AlertTriangle as AlertTriangleIcon,
  Package as PackageIcon,
  TrendingUp as TrendingUpIcon,
  Tag as TagIcon,
  Receipt as ReceiptIcon,
  RefreshCcw as RefreshCcwIcon,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { OverViewMetricsBox } from "./OverViewMetricsBox";
import { OverViewChart } from "./OverViewChart";
import type { DashboardOverviewDatatype } from "@/types/dashboard";
import { DashSingleCard } from "./DashSingleCard";

const OVER_VIEW_PERIOD_TIMESTAMP: { label: string; value: string }[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Week",
    value: "week",
  },
  {
    label: "Month",
    value: "month",
  },
  {
    label: "Years",
    value: "years",
  },
];

const DASHBOARD_OVERVIEW_VALUES: DashboardOverviewDatatype = {
  "Total Sales": {
    itemKey: "total-sales",
    currentValue: 47500000,
    previousValue: 44811000,
    colorClass: "",
    icon: DollarSignIcon,
  },
  "Total Orders": {
    itemKey: "total-orders",
    currentValue: 3490,
    previousValue: 3201,
    colorClass: "",
    icon: ShoppingCartIcon,
  },
  "Low Stock Items": {
    itemKey: "low-stock-items",
    currentValue: 24,
    previousValue: 18,
    colorClass: "",
    icon: AlertTriangleIcon,
  },
  "Active Products": {
    itemKey: "active-products",
    currentValue: 1284,
    previousValue: 1200,
    colorClass: "",
    icon: PackageIcon,
  },
  "Net Revenue": {
    itemKey: "net-revenue",
    currentValue: 38200000,
    previousValue: 36100000,
    colorClass: "",
    icon: TrendingUpIcon,
  },
  "Discount Amount": {
    itemKey: "discount-amount",
    currentValue: 4300000,
    previousValue: 3900000,
    colorClass: "",
    icon: TagIcon,
  },
  "Taxes Collected": {
    itemKey: "taxes-collected",
    currentValue: 2100000,
    previousValue: 1980000,
    colorClass: "",
    icon: ReceiptIcon,
  },
  "Refund Amount": {
    itemKey: "refund-amount",
    currentValue: 870000,
    previousValue: 920000,
    colorClass: "",
    icon: RefreshCcwIcon,
  },
};
export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const period = searchParams.get("period");

  return (
    <div>
      <section className="mb-4">
        <div className="w-full h-fit mb-4 flex justify-between items-center sticky top-0 left-0">
          <ButtonGroup className="*:text-workspace_2">
            {OVER_VIEW_PERIOD_TIMESTAMP.map((item, i) => {
              return (
                <Button
                  variant={"secondary"}
                  className={`text-text-color_2 bg-background-color_850C hover:bg-background-color_800C  ${period === item.value && "text-surface-fg-2 bg-surface-bg-active hover:bg-surface-bg-active"}`}
                  onClick={() => {
                    router.replace(`?period=${item.value}`);
                  }}
                  key={i}
                >
                  {item.label}
                </Button>
              );
            })}
          </ButtonGroup>
        </div>
        {/* Metrics Header */}
        <div className="w-full ">
          <div className="grid grid-cols-3 auto-rows-[150px] w-full gap-4">
            {Object.entries(DASHBOARD_OVERVIEW_VALUES).map(
              ([Key, value], i) => {
                return (
                  <OverViewMetricsBox
                    key={value.itemKey}
                    title={Key}
                    icon={value.icon}
                    currentValue={value.currentValue}
                    previousValue={value.previousValue as number}
                    date="vs last month"
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
      <section className="mb-4">
        <OverViewChart />
      </section>
      <section className="mb-4">
        <div className="w-full flex justify-center items-start">
          <DashSingleCard>
              <div></div>
          </DashSingleCard>
              <DashSingleCard>
              <div></div>
          </DashSingleCard>
        </div>
      </section>
    </div>
  );
}
