import React from "react";
import { CustomLineChart } from "./CustomLineChart";
import { useChartLegendActive } from "@/hooks/useChartLegendActive";
import { Line } from "recharts";
import type { BaseRechartDataType, MonthType } from "@fluctux/types";

type OrdersAnalyticsChartData = {
  orders_total?: number;
  orders_cancelled?: number;
  orders_accepted?: number;
} & BaseRechartDataType<MonthType>;

type OrdersAnalyticsChartDataKeyType =
  | "orders_total"
  | "orders_accepted"
  | "orders_cancelled";

const ORDERS_ANALYTICS_DATA: OrdersAnalyticsChartData[] = [
  {
    x_axis: "Jan",
    orders_total: 4200,
    orders_cancelled: 320,
    orders_accepted: 3880,
  },
  {
    x_axis: "Feb",
    orders_total: 3800,
    orders_cancelled: 210,
    orders_accepted: 3590,
  },
  {
    x_axis: "Mar",
    orders_total: 5100,
    orders_cancelled: 400,
    orders_accepted: 4700,
  },
  {
    x_axis: "Apr",
    orders_total: 4700,
    orders_cancelled: 280,
    orders_accepted: 4420,
  },
  {
    x_axis: "May",
    orders_total: 5300,
    orders_cancelled: 350,
    orders_accepted: 4950,
  },
  {
    x_axis: "Jun",
    orders_total: 4900,
    orders_cancelled: 290,
    orders_accepted: 4610,
  },
  {
    x_axis: "Jul",
    orders_total: 5600,
    orders_cancelled: 410,
    orders_accepted: 5190,
  },
  {
    x_axis: "Aug",
    orders_total: 4400,
    orders_cancelled: 260,
    orders_accepted: 4140,
  },
  {
    x_axis: "Sep",
    orders_total: 5000,
    orders_cancelled: 300,
    orders_accepted: 4700,
  },
  {
    x_axis: "Oct",
    orders_total: 5200,
    orders_cancelled: 370,
    orders_accepted: 4830,
  },
  {
    x_axis: "Nov",
    orders_total: 4800,
    orders_cancelled: 240,
    orders_accepted: 4560,
  },
  {
    x_axis: "Dec",
    orders_total: 6000,
    orders_cancelled: 450,
    orders_accepted: 5550,
  },
];

export const OrdersAnalyticsChart = () => {
  const { getOpacity, handleActiveLegend, handleDisableLegend, activeKey } =
    useChartLegendActive<OrdersAnalyticsChartDataKeyType>([
      "orders_total",
      "orders_accepted",
      "orders_cancelled",
    ]);
  return (
    <div className="w-full h-full">
      <CustomLineChart
        wrapperHeight="315px"
        XAxisDataKey="x_axis"
        CustomLegendProps={{
          activeLegendKey: activeKey,
          onLegendClick: handleActiveLegend,
          resetActiveLegend: handleDisableLegend,
        }}
        data={ORDERS_ANALYTICS_DATA}
        ChartLines={
          <>
            <Line
              type="natural"
              dataKey="orders_total"
              name="Total Orders"
              stroke="var(--color-chart-1)"
              strokeOpacity={getOpacity("orders_total")}
              dot={false}
              strokeWidth={2}
              activeDot={{ stroke: "var(--color-surface-base)" }}
            />
            <Line
              type="natural"
              dataKey="orders_accepted"
              name="Accepted"
              stroke="var(--color-chart-2)"
              strokeOpacity={getOpacity("orders_accepted")}
              dot={false}
              strokeWidth={2}
              activeDot={{ stroke: "var(--color-surface-base)" }}
            />
            <Line
              type="natural"
              dataKey="orders_cancelled"
              name="Cancelled"
              stroke="var(--color-chart-5)"
              dot={false}
              strokeWidth={2}
              strokeOpacity={getOpacity("orders_cancelled")}
              activeDot={{ stroke: "var(--color-surface-base)" }}
            />
          </>
        }
      />
    </div>
  );
};
