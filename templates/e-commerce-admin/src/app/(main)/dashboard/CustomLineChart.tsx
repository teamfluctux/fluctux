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
  type YAxisProps,
} from "recharts";
import { ChartTooltip, type ChartTooltipPropsType } from "./ChartTooltip";
import { formatScaleValue } from "@fluctux/shared";
import { ChartXAxis, type ChartXAxisPropsType } from "./ChartXAxis";
import { ChartLegend, type ChartLegendPropsType } from "./ChartLegend";
import { ChartYAxis, type ChartYAxisPropsType } from "./ChartYAxis";

type CustomLineChartPropstype = {
  wrapperHeight?: string;
  ChartClassName?: string;
  XAxisProps?: XAxisProps;
  data: any;
  YAxisProps?: YAxisProps;
  ChartLines?: React.ReactNode;
} & ChartXAxisPropsType &
  ChartLegendPropsType &
  ChartTooltipPropsType &
  ChartYAxisPropsType;

export const CustomLineChart = ({
  ChartClassName,
  wrapperHeight,
  XAxisDataKey,
  data,
  XAxisProps,
  XAxisCustomSettings,
  CustomLegendProps,
  isEnableLegend,
  CustomTooltipProps,
  isEnableTooltip,
  tooltip,
  ChartLines,
  isKeepYAxis,
  YAxisProps,
  YAxisCustomSettings,
}: CustomLineChartPropstype) => {
  return (
    <div style={{ height: wrapperHeight }}>
      <ResponsiveContainer width={"100%"}>
        <LineChart
          data={data}
          className={`p-2 [&>svg]:outline-none [&>svg]:ring-0 outline-none ring-0 ${ChartClassName}`}
          margin={{
            left: 15,
            right: 15,
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
            XAxisDataKey={XAxisDataKey}
            XAxisCustomSettings={XAxisCustomSettings}
            {...XAxisProps}
          />
          <ChartYAxis
            isKeepYAxis={isKeepYAxis}
            YAxisCustomSettings={YAxisCustomSettings}
            {...YAxisProps}
          />
          {ChartLines}

          <ChartTooltip
            CustomTooltipProps={CustomTooltipProps}
            isEnableTooltip={isEnableTooltip}
            tooltip={tooltip}
          />
          <ChartLegend
            isEnableLegend={isEnableLegend}
            CustomLegendProps={CustomLegendProps}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
