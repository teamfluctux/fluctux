import React from "react";
import { CustomLineChart } from "./CustomLineChart";
import { useChartLegendActive } from "@/hooks/useChartLegendActive";
import { Line } from "recharts";

type LineChartDataRevenueType = {
  name: string; 
  gross: number;
  net: number; 
  refunds: number; 
  discounts: number; 
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

type ChartDataKeysType = "gross" | "net" | "refunds" | "discounts";

export const RevenueChart = () => {
  const { getOpacity, handleActiveLegend, handleDisableLegend, activeKey } =
    useChartLegendActive<ChartDataKeysType>([
      "gross",
      "net",
      "refunds",
      "discounts",
    ]);
  return (
    <div className="w-full h-full">
      <CustomLineChart
        wrapperHeight="315px"
        XAxisDataKey="name"
        CustomLegendProps={{
          activeLegendKey: activeKey,
          onLegendClick: handleActiveLegend,
          resetActiveLegend: handleDisableLegend,
        }}
        data={REVENUE_LINE_CHART_DATA}
        ChartLines={
          <>
            <Line
              type="natural"
              dataKey="gross"
                 name="Gross"
              stroke="var(--color-chart-1)"
              strokeOpacity={getOpacity("gross")}
              dot={false}
              strokeWidth={2}
              activeDot={{ stroke: "var(--color-surface-base)" }}
            />
            <Line
              type="natural"
              dataKey="net"
              name="Net"
              stroke="var(--color-chart-2)"
              strokeOpacity={getOpacity("net")}
              dot={false}
              strokeWidth={2}
              activeDot={{ stroke: "var(--color-surface-base)" }}
            />
            <Line
              type="natural"
              dataKey="refunds"
                 name="Refunds"
              stroke="var(--color-chart-3)"
              dot={false}
              strokeWidth={2}
              strokeOpacity={getOpacity("refunds")}
              activeDot={{ stroke: "var(--color-surface-base)" }}
            />
            <Line
              type="natural"
              dataKey="discounts"
                 name="Discounts"
              stroke="var(--color-chart-4)"
              strokeOpacity={getOpacity("discounts")}
              dot={false}
              strokeWidth={2}
              activeDot={{ stroke: "var(--color-surface-base)" }}
            />
          </>
        }
      />
    </div>
  );
};
