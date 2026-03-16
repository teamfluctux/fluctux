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
import {
  OverViewMetricsBox,
  OverViewMetricsBoxGroup,
} from "./OverViewMetricsBox";
import { OverViewChart } from "./OverViewChart";
import type { DashboardOverviewDatatype } from "@/types/dashboard";
import { DashSingleCard, DashSingleCardGroup } from "./DashCard";
import { OverViewMetricsHeader } from "./OverViewMetricsHeader";

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
  return (
    <div>
      <section className="mb-4">
        <OverViewMetricsHeader />
        <OverViewMetricsBoxGroup>
          {Object.entries(DASHBOARD_OVERVIEW_VALUES).map(([Key, value], i) => {
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
          })}
        </OverViewMetricsBoxGroup>
      </section>
      <section className="mb-4">
        <OverViewChart />
      </section>
      <section className="mb-4">
        <DashSingleCardGroup>
          <DashSingleCard>
            <div></div>
          </DashSingleCard>
          <DashSingleCard>
            <div></div>
          </DashSingleCard>
            <DashSingleCard>
            <div></div>
          </DashSingleCard>
            <DashSingleCard>
            <div></div>
          </DashSingleCard>
        </DashSingleCardGroup>
      </section>
    </div>
  );
}
