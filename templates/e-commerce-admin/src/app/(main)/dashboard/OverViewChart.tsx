"use client";
import React from "react";

import {
  ShoppingBag as ShoppingBagIcon,
  TrendingUp as TrendingUpIcon,
  Package as PackageIcon,
  Tag as TagIcon,
  Receipt as ReceiptIcon,
  RefreshCcw as RefreshCcwIcon,
  type LucideIcon,
} from "lucide-react";
import { Bar } from "recharts";
import { formatScaleValue } from "@/utils";

import { CustomBarChart } from "./CustomBarChart";

// data can be any type
type DashboardOverviewChartType = {
  name: string;
  sales: number;
  orders: number;
  revenue: number;
  discounts: number;
  taxes: number;
  refunds: number;
}

export const DASHBOARD_OVERVIEW_CHART: DashboardOverviewChartType[] = [
  {
    name: "Jan",
    sales: 38200000,
    orders: 2890,
    revenue: 30500000,
    discounts: 3200000,
    taxes: 1700000,
    refunds: 720000,
  },
  {
    name: "Feb",
    sales: 41000000,
    orders: 3100,
    revenue: 33000000,
    discounts: 3500000,
    taxes: 1850000,
    refunds: 800000,
  },
  {
    name: "Mar",
    sales: 43500000,
    orders: 3250,
    revenue: 35000000,
    discounts: 3700000,
    taxes: 1950000,
    refunds: 830000,
  },
  {
    name: "Apr",
    sales: 40000000,
    orders: 3000,
    revenue: 32000000,
    discounts: 3400000,
    taxes: 1800000,
    refunds: 810000,
  },
  {
    name: "May",
    sales: 44000000,
    orders: 3300,
    revenue: 35500000,
    discounts: 3800000,
    taxes: 2000000,
    refunds: 850000,
  },
  {
    name: "Jun",
    sales: 46000000,
    orders: 3400,
    revenue: 37000000,
    discounts: 4000000,
    taxes: 2050000,
    refunds: 860000,
  },
  {
    name: "Jul",
    sales: 45000000,
    orders: 3350,
    revenue: 36500000,
    discounts: 3900000,
    taxes: 2020000,
    refunds: 855000,
  },
  {
    name: "Aug",
    sales: 47000000,
    orders: 3450,
    revenue: 38000000,
    discounts: 4200000,
    taxes: 2080000,
    refunds: 865000,
  },
  {
    name: "Sep",
    sales: 46500000,
    orders: 3420,
    revenue: 37500000,
    discounts: 4100000,
    taxes: 2060000,
    refunds: 858000,
  },
  {
    name: "Oct",
    sales: 48000000,
    orders: 3480,
    revenue: 38500000,
    discounts: 4250000,
    taxes: 2090000,
    refunds: 868000,
  },
  {
    name: "Nov",
    sales: 47500000,
    orders: 3490,
    revenue: 38200000,
    discounts: 4300000,
    taxes: 2100000,
    refunds: 870000,
  },
  {
    name: "Dec",
    sales: 50000000,
    orders: 3600,
    revenue: 40000000,
    discounts: 4500000,
    taxes: 2200000,
    refunds: 900000,
  },
];

const icons: Record<string, LucideIcon> = {
  sales: ShoppingBagIcon,
  revenue: TrendingUpIcon,
  orders: PackageIcon,
  discounts: TagIcon,
  taxes: ReceiptIcon,
  refunds: RefreshCcwIcon,
};

export const OverViewChart = () => {
  return (
    <div className="w-full h-fit bg-background-color_925C rounded-xl border-1 border-border-color_1">
      <div className="flex justify-between items-center p-5">
        <div>
          <p className="text-read_20 font-medium ">Overview Analytics</p>
          <p className="text-workspace_2 font-medium text-text-color_3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatib
          </p>
        </div>
      </div>
      <CustomBarChart
        height="350px"
        barChartClassName="p-3"
        isEnableLegend
        isKeepYAxis
        YAxisCustomSettings={{
          textformatter: formatScaleValue,
          style: {
            wrapperWdith: 60,
          },
          label: {
            value: "Amount (USD)",
          },
        }}
        CustomLegendProps={{
          icons: icons,
          IndicatorType: "icon",
          className: "p-5",
        }}
        CustomTooltipProps={{
          indicatorShape: "circle",
          IndicatorType: "shape",

          valueFormatter: formatScaleValue,
        }}
        Bars={
          <>
            <Bar
              barSize={30}
              dataKey="sales"
              stackId="a"
              fill="var(--chart-color-1)"
              name={"Sales"}
            />
            <Bar
              dataKey="orders"
              stackId="a"
              fill="var(--chart-color-2)"
              name={"Orders"}
            />
            <Bar
              dataKey="revenue"
              stackId="a"
              fill="var(--chart-color-3)"
              name={"Revenue"}
            />
            <Bar
              dataKey="discounts"
              stackId="a"
              fill="var(--chart-color-4)"
              name={"Discounts"}
            />
            <Bar
              dataKey="taxes"
              stackId="a"
              fill="var(--chart-color-5)"
              name={"Taxes"}
            />
            <Bar
              dataKey="refunds"
              stackId="a"
              fill="var(--chart-color-6)"
              name={"Refunds"}
            />
          </>
        }
        XAxisDataKey="name"
        data={DASHBOARD_OVERVIEW_CHART}
      />
    </div>
  );
};
