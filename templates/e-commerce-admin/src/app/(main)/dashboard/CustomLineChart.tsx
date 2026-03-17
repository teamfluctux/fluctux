"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type XAxisProps,
} from "recharts";
import { CustomTooltip } from "./CustomBarChart";
import { formatScaleValue } from "@/utils";
import { ChartXAxis, type ChartXAxisPropsType } from "./ChartXAxis";

type LineChartDataRevenueType = {
  name: string; // month name
  gross: number; // total revenue before deductions
  net: number; // revenue after refunds and discounts
  refunds: number; // refunded amount
  discounts: number; // discounted amount
};
const REVENUE_LINE_CHART_DATA: LineChartDataRevenueType[] = [
  {
    name: "Jan",
    gross: 38200000,
    net: 30500000,
    refunds: 720000,
    discounts: 3200000,
  },
  {
    name: "Feb",
    gross: 41000000,
    net: 33000000,
    refunds: 800000,
    discounts: 3500000,
  },
  {
    name: "Mar",
    gross: 43500000,
    net: 35000000,
    refunds: 830000,
    discounts: 3700000,
  },
  {
    name: "Apr",
    gross: 40000000,
    net: 32000000,
    refunds: 810000,
    discounts: 3400000,
  },
  {
    name: "May",
    gross: 44000000,
    net: 35500000,
    refunds: 850000,
    discounts: 3800000,
  },
  {
    name: "Jun",
    gross: 46000000,
    net: 37000000,
    refunds: 860000,
    discounts: 4000000,
  },
  {
    name: "Jul",
    gross: 45000000,
    net: 36500000,
    refunds: 855000,
    discounts: 3900000,
  },
  {
    name: "Aug",
    gross: 47000000,
    net: 38000000,
    refunds: 865000,
    discounts: 4200000,
  },
  {
    name: "Sep",
    gross: 46500000,
    net: 37500000,
    refunds: 858000,
    discounts: 4100000,
  },
  {
    name: "Oct",
    gross: 48000000,
    net: 38500000,
    refunds: 868000,
    discounts: 4250000,
  },
  {
    name: "Nov",
    gross: 47500000,
    net: 38200000,
    refunds: 870000,
    discounts: 4300000,
  },
  {
    name: "Dec",
    gross: 50000000,
    net: 40000000,
    refunds: 900000,
    discounts: 4500000,
  },
];

type CustomLineChartPropstype = {
  height?: string;
  XAxisProps?: XAxisProps;
} & ChartXAxisPropsType;

export const CustomLineChart = ({
  height,
  XAxisDataKey,
  XAxisProps,
  XAxisCustomSettings,
}: CustomLineChartPropstype) => {
  return (
    <div style={{ height: height }}>
      <ResponsiveContainer width={"100%"} aspect={1.83}>
        <LineChart
          data={REVENUE_LINE_CHART_DATA}
          className="p-2"
          margin={{
            top: 10,
            right: 10, // Reduced margins
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="0" // Changed 0 to a pattern or remove
            vertical={false}
            stroke="var(--chart-border-color-1)"
          />
          <ChartXAxis
            tickLine={false}
            tickMargin={8}
            axisLine={false}
            minTickGap={32}
            XAxisDataKey={XAxisDataKey}
            XAxisCustomSettings={XAxisCustomSettings}
            {...XAxisProps}
          />

          <Tooltip
            content={CustomTooltip}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Legend align="right" verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="gross"
            stroke="var(--color-chart-1)"
            dot={false}
            activeDot={{ stroke: "var(--color-surface-base)" }}
          />
          <Line
            type="monotone"
            dataKey="net"
            stroke="var(--color-chart-2)"
            dot={false}
            activeDot={{ stroke: "var(--color-surface-base)" }}
          />
          <Line
            type="monotone"
            dataKey="refunds"
            stroke="var(--color-chart-3)"
            dot={false}
            activeDot={{ stroke: "var(--color-surface-base)" }}
          />
          <Line
            type="monotone"
            dataKey="discounts"
            stroke="var(--color-chart-4)"
            dot={false}
            activeDot={{ stroke: "var(--color-surface-base)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
