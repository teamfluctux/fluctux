"use client";
import React, { useState, type ComponentProps } from "react";
import { type LucideIcon } from "lucide-react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type TooltipContentProps,
  type DefaultLegendContentProps,
  type CartesianGridProps,
  type XAxisProps,
  type YAxisProps,
  type LabelProps,
  type LegendProps,
  type BarProps,
} from "recharts";
import type { TooltipPayloadEntry } from "recharts/types/state/tooltipSlice";
import type { TextAnchor } from "recharts/types/component/Text";
import { FxSeparator } from "@fluctux/ui";
import { ChartTooltip, type ChartTooltipPropsType } from "./ChartTooltip";
import { ChartXAxis, type ChartXAxisPropsType } from "./ChartXAxis";
import { ChartYAxis, type ChartYAxisPropsType } from "./ChartYAxis";
import { ChartLegend, type ChartLegendPropsType } from "./ChartLegend";

type IndicatorType = "icon" | "shape" | "none";

type LegendItemColorIndicatorShapeType = "square" | "circle" | "rect";

export const LegendItemColorIndicatorShapeStyles: {
  [key in LegendItemColorIndicatorShapeType]: string;
} = {
  rect: "w-2.5 h-1.5 rounded-[50px]",
  square: "w-2 h-2 rounded-xs",
  circle: "w-2 h-2 rounded-full",
};

type CustomLegendPropstype = {
  icons?: Record<string, LucideIcon>;
  iconSize?: number;
  itemColorIndicatorShape?: LegendItemColorIndicatorShapeType;
  IndicatorType?: IndicatorType;
  className?: string;
};

/**
 * Custom legend component for recharts
 *
 * Renders a styled legend with support for icons or shape color indicators.
 *
 * @param payload - Array of legend entries provided by recharts
 * @param icons - Optional map of dataKey to LucideIcon for icon indicators
 * @param iconSize - Size of the icon in pixels (default: 14)
 * @param itemColorIndicatorShape - Shape of the color indicator: "square", "circle" or "rect" (default: "square")
 * @param IndicatorType - Type of indicator: "icon", "shape" or "none" (default: "shape")
 * @param className - Additional CSS classes for the legend container
 *
 * @example
 * ```tsx
 * <Legend
 *   content={(props) => (
 *     <CustomLegend
 *       {...props}
 *       IndicatorType="icon"
 *       icons={{ sales: ShoppingBagIcon }}
 *     />
 *   )}
 * />
 * ```
 */
export const CustomLegend = ({
  payload,
  icons,
  iconSize = 14,
  itemColorIndicatorShape = "square",
  IndicatorType = "shape",
  className,
}: CustomLegendPropstype & DefaultLegendContentProps) => {
  if (!payload?.length) return null;
  const tempItemColorIndicatorShape =
    LegendItemColorIndicatorShapeStyles[itemColorIndicatorShape];
  return (
    <div
      className={`w-fit flex justify-center items-center gap-5 ${className}`}
    >
      {payload.map((entry) => {
        const Icon = icons && icons[entry.dataKey as string];
        return (
          <div
            key={entry.dataKey as string}
            className="flex justify-center items-center gap-1"
          >
            {IndicatorType == "icon" && (
              <>
                {Icon && (
                  <Icon size={iconSize} style={{ color: entry.color }} />
                )}
              </>
            )}

            {IndicatorType == "shape" && (
              <div
                className={`${tempItemColorIndicatorShape}`}
                style={{ backgroundColor: entry.color }}
              ></div>
            )}

            <div className=""></div>
            <span className="text-workspace_3 font-medium text-text-color_4">
              {entry.value}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/**
 * Reusable customizable bar chart component
 *
 * Wraps recharts BarChart with sensible defaults, active cursor highlighting,
 * custom tooltip, custom legend, and deep-merged configuration props.
 *
 * @param height - CSS height of the chart container (default: "400px")
 * @param data - Array of data objects to render
 * @param Bars - Bar elements to render inside the chart
 * @param XAxisDataKey - The data key used for the X axis
 * @param isEnableActiveCursorStyle - Highlights the active bar column on hover (default: true)
 * @param isKeepYAxis - Whether to render the Y axis (default: false)
 * @param isEnableTooltip - Whether to render the tooltip (default: true)
 * @param isEnableLegend - Whether to render the legend (default: false)
 * @param chartMargin - Margin around the chart area
 * @param barChartClassName - Additional CSS classes for the BarChart element
 * @param XAxisCustomSettings - Deep merged X axis style overrides
 * @param YAxisCustomSettings - Deep merged Y axis style, label and formatter overrides
 * @param CartesianGridProps - Deep merged CartesianGrid props
 * @param tooltip - Tooltip cursor style overrides
 * @param XAxisProps - Additional recharts XAxis props
 * @param YAxisProps - Additional recharts YAxis props
 * @param CustomTooltipProps - Props forwarded to CustomTooltip
 * @param CustomLegendProps - Props forwarded to CustomLegend
 *
 * @example
 * ```tsx
 * <CustomBarChart
 *   height="350px"
 *   data={DASHBOARD_OVERVIEW_CHART}
 *   XAxisDataKey="name"
 *   isKeepYAxis
 *   isEnableLegend
 *   YAxisCustomSettings={{
 *     textformatter: formatScaleValue,
 *     label: { value: "Amount (USD)" }
 *   }}
 *   Bars={
 *     <>
 *       <Bar dataKey="sales" stackId="a" fill="#6366f1" name="Sales" />
 *       <Bar dataKey="revenue" stackId="a" fill="#818cf8" name="Revenue" />
 *     </>
 *   }
 * />
 * ```
 */
type CustomBarChartProps = {
  ChartHeight?: string;
  data?: unknown[] | undefined;
  Bars: React.ReactNode;
  chartMargin?: { top: number; right: number; left: number; bottom: number };
  barChartClassName?: string;
  CartesianGridProps?: CartesianGridProps;
  YAxisProps?: YAxisProps;
  XAxisProps?: XAxisProps;
  BarChartProps?: ComponentProps<typeof BarChart>;
} & ChartXAxisPropsType &
  ChartYAxisPropsType &
  ChartTooltipPropsType &
  ChartLegendPropsType;

export const CustomBarChart = ({
  ChartHeight = "400px",
  data,
  chartMargin = { top: 0, right: 0, left: 0, bottom: 0 },
  barChartClassName,
  Bars,
  XAxisDataKey,
  XAxisProps,
  XAxisCustomSettings,
  isEnableTooltip,
  isEnableLegend,
  tooltip,
  CartesianGridProps: CartesianGridPropsInput,
  YAxisProps,
  isKeepYAxis,
  YAxisCustomSettings,
  CustomLegendProps,
  CustomTooltipProps,
  BarChartProps,
}: CustomBarChartProps) => {
  const CartesianGridProps = {
    strokeDasharray: "0",
    vertical: false,
    stroke: "var(--border-color-1)",
    ...CartesianGridPropsInput,
  };

  return (
    <div style={{ height: ChartHeight }}>
      <ResponsiveContainer width={"100%"}>
        <BarChart
          className={`${barChartClassName} [&>svg]:outline-none [&>svg]:ring-0 outline-none ring-0`}
          data={data}
          margin={chartMargin}
          {...BarChartProps}
        >
          <CartesianGrid {...CartesianGridProps} />
          <ChartXAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            XAxisDataKey={XAxisDataKey}
            XAxisCustomSettings={XAxisCustomSettings}
            {...XAxisProps}
          />
          <ChartYAxis
            isKeepYAxis={isKeepYAxis}
            YAxisCustomSettings={YAxisCustomSettings}
            {...YAxisProps}
          />

          <ChartTooltip
            CustomTooltipProps={CustomTooltipProps}
            isEnableTooltip={isEnableTooltip}
            tooltip={tooltip}
          />
          <ChartLegend
            CustomLegendProps={CustomLegendProps}
            isEnableLegend={isEnableLegend}
          />
          {Bars}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
