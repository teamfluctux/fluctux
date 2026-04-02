"use client";
import { useChartLegendActive } from "@/hooks";
import { Bar } from "recharts";
import { CustomBarChart } from "./CustomBarChart";
import { formatScaleValue } from "@fluctux/shared";
import { type BaseRechartDataType, type MonthType } from "@fluctux/types";

type DeliveryChatDataKeyType = "delivered" | "reported";

type RevenueChartDataType<T extends string = DeliveryChatDataKeyType> = {
  [key in T]: number;
} & BaseRechartDataType<MonthType>;

const revenueChartData: RevenueChartDataType[] = [
  { x_axis: "Jan", delivered: 4000, reported: 2400, spacer: 200 },
  { x_axis: "Feb", delivered: 3000, reported: 1398, spacer: 200 },
  { x_axis: "Mar", delivered: 2000, reported: 9800, spacer: 200 },
  { x_axis: "Apr", delivered: 2780, reported: 3908, spacer: 200 },
  { x_axis: "May", delivered: 1890, reported: 4800, spacer: 200 },
  { x_axis: "Jun", delivered: 2390, reported: 3800, spacer: 200 },
  { x_axis: "Jul", delivered: 3490, reported: 4300, spacer: 200 },
  { x_axis: "Aug", delivered: 2000, reported: 2500, spacer: 200 },
  { x_axis: "Sep", delivered: 2780, reported: 3200, spacer: 200 },
  { x_axis: "Oct", delivered: 1890, reported: 2100, spacer: 200 },
  { x_axis: "Nov", delivered: 3200, reported: 2800, spacer: 200 },
  { x_axis: "Dec", delivered: 4100, reported: 3500, spacer: 200 },
];

export const DeliveryChart = () => {
  const { getOpacity, handleActiveLegend, handleDisableLegend, activeKey } =
    useChartLegendActive<DeliveryChatDataKeyType>(["delivered", "reported"]);
  return (
    <div className="w-full h-full">
      <CustomBarChart
        ChartHeight="315px"
        XAxisDataKey="x_axis"
        barChartClassName="p-3"
        isEnableLegend
        CustomLegendProps={{
          IndicatorType: "shape",
          itemColorIndicatorShape: "square",
          className: "px-5",
          onLegendClick: handleActiveLegend,
          resetActiveLegend: handleDisableLegend,
          activeLegendKey: activeKey,
        }}
        CustomTooltipProps={{
          indicatorShape: "bot",
          IndicatorType: "shape",

          valueFormatter: formatScaleValue,
        }}
        Bars={
          <>
            <Bar
              dataKey="reported"
              stackId="a"
              fillOpacity={getOpacity("reported")}
              fill="var(--chart-color-2)"
              name={"Reported"}
              radius={[10, 10, 10, 10]}
            />
            <Bar
              dataKey="spacer"
              stackId="a"
              fill="transparent"
              legendType="none"
              tooltipType="none"
              activeBar={false}
              isAnimationActive={false}
            />
            <Bar
              barSize={30}
              dataKey="delivered"
              stackId="a"
              fillOpacity={getOpacity("delivered")}
              fill="var(--chart-color-1)"
              radius={[10, 10, 10, 10]}
              name={"Package Delivered"}
            />
          </>
        }
        data={revenueChartData}
      />
    </div>
  );
};
