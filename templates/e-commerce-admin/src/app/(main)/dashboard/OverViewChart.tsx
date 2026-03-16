"use client";
import React, { useState } from "react";
import { STACKED_BAR_CHART } from "@/constants/chart.constant";
import {
  ShoppingBag as ShoppingBagIcon,
  TrendingUp as TrendingUpIcon,
  Package as PackageIcon,
  Tag as TagIcon,
  Receipt as ReceiptIcon,
  RefreshCcw as RefreshCcwIcon,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type TooltipContentProps,
  type LegendProps,
  type DefaultLegendContentProps,
} from "recharts";
import { formatScaleValue } from "@/utils";
import { type LegendPayload } from "recharts/types/component/DefaultLegendContent";
import type {
  TooltipActionPayload,
  TooltipPayload,
  TooltipPayloadEntry,
} from "recharts/types/state/tooltipSlice";
import type { TooltipEventType } from "recharts/types/util/types";

export const DASHBOARD_OVERVIEW_CHART = [
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

const CustomTooltip = (props: TooltipContentProps<number, string>) => {
  const { active, label, payload } = props;
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-background-color_900C border border-border-color_1 rounded-lg p-3 w-[180px]">
      <p className="text-surface-fg text-workspace_2 font-medium mb-2">
        {label}
      </p>
      {payload.map((entry: TooltipPayloadEntry) => (
        <div
          key={`${entry.dataKey}`}
          className="flex items-center gap-2 py-0.5"
        >
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: entry.fill }}
          />
          <span className="text-text-color_4 text-workspace_3">
            {entry.name}
          </span>
          <span className="text-text-color_1 text-workspace_3 font-medium ml-auto">
            {formatScaleValue(Number(entry.value))}
          </span>
        </div>
      ))}
    </div>
  );
};

const CustomLegend = (props: DefaultLegendContentProps) => {
  const { payload } = props;
  if (!payload?.length) return null;
  const icons: Record<string, React.ReactNode> = {
    sales: <ShoppingBagIcon size={14} />,
    revenue: <TrendingUpIcon size={14} />,
    orders: <PackageIcon size={14} />,
    discounts: <TagIcon size={14} />,
    taxes: <ReceiptIcon size={14} />,
    refunds: <RefreshCcwIcon size={14} />,
  };
  return (
    <div className="w-fit p-5 flex justify-center items-center gap-5">
      {payload.map((entry) => {
        return (
          <div
            key={entry.dataKey as string}
            className="flex justify-center items-center gap-1"
          >
            <div style={{ color: entry.color }}>
              {icons[entry.dataKey as string]}
            </div>
            <span className="text-workspace_2 font-medium text-text-color_4">
              {entry.value}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const OverViewChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
      <div className="h-[350px] ">
        <ResponsiveContainer width={"100%"}>
          <BarChart
            onMouseMove={(state) => {
              if (state.isTooltipActive)
                setActiveIndex(Number(state.activeTooltipIndex) ?? null);
              else setActiveIndex(null);
            }}
            onMouseLeave={() => setActiveIndex(null)}
            className="p-3"
            data={DASHBOARD_OVERVIEW_CHART}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="var(--border-color-1)"
            />
            <XAxis
              dataKey="name"
              stroke="var(--border-color-2)"
              tick={(props) => {
                const { x, y, payload, index } = props;
                const isActive = activeIndex === index;
                return (
                  <text
                    x={x}
                    y={y}
                    dy={16}
                    textAnchor="middle"
                    fill={
                      isActive
                        ? "var(--foreground)"
                        : "var(--foreground-color-4)"
                    }
                    fontSize={13}
                    fontWeight={500}
                  >
                    {payload.value}
                  </text>
                );
              }}
              tickMargin={5}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              width={60}
              tick={{
                fill: "var(--foreground-color-4)",
                fontSize: 13,
                fontWeight: 500,
              }}
              tickFormatter={(value) => formatScaleValue(value)}
              label={{
                value: "Amount (USD)",
                angle: -90,
                position: "insideLeft",
                dx: -17,
                dy: 50,
                textAnchor: "middle",
                style: { fill: "var(--foreground-color-3)", fontSize: 13 },
              }}
            />
            <Tooltip
              cursor={{
                fill: "var(--background-color-800C)",
                opacity: 0.5,
                color: "red",
              }}
              content={CustomTooltip}
            />
            <Legend content={CustomLegend} />
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
