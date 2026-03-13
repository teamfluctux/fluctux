"use client";
import { Button, ButtonGroup } from "@fluctux/ui";
import { ArrowUp, PlusIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { OverViewMetricsBox } from "./OverViewMetricsBox";

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

type DashboardOverviewDatatype = {
  [key: string]: {
    itemKey: string;
    currentValue: number;
    previousValue?: number | null;
    newValue?: number | null;
    colorClass?: string;
  };
};

const DASHBOARD_OVERVIEW_VALUES: DashboardOverviewDatatype = {
  "Total Sales": {
    itemKey: "total-sales",
    currentValue: 47500000,
    previousValue: 44811000,
    colorClass: "",
  },
  "Total Orders": {
    itemKey: "total-orders",
    currentValue: 3490,
    previousValue: 3201,
    colorClass: "",
  },
  "Low Stock Items": {
    itemKey: "low-stock-items",
    currentValue: 24,
    previousValue: 18,
    colorClass: "",
  },
  "Active Products": {
    itemKey: "active-products",
    currentValue: 1284,
    previousValue: 1200,
    colorClass: "",
  },
  "Net Revenue": {
    itemKey: "net-revenue",
    currentValue: 38200000,
    previousValue: 36100000,
    colorClass: "",
  },
  "Discount Amount": {
    itemKey: "discount-amount",
    currentValue: 4300000,
    previousValue: 3900000,
    colorClass: "",
  },
  "Taxes Collected": {
    itemKey: "taxes-collected",
    currentValue: 2100000,
    previousValue: 1980000,
    colorClass: "",
  },
  "Refund Amount": {
    itemKey: "refund-amount",
    currentValue: 870000,
    previousValue: 920000,
    colorClass: "",
  },
};

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const period = searchParams.get("period");

  return (
    <div>
      <div className="w-full h-[50px] flex justify-between items-center px-2 sticky top-0 left-0">
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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-[150px] w-full">
        {Object.entries(DASHBOARD_OVERVIEW_VALUES).map(([Key, value], i) => {
          return (
            <OverViewMetricsBox
              key={value.itemKey}
              title={Key}
              currentValue={value.currentValue}
              previousValue={value.previousValue as number}
              date="last month"
            />
          );
        })}
      </div>
    </div>
  );
}
