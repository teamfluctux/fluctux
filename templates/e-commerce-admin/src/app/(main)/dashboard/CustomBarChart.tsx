"use client";
import React, { useState } from "react";
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
} from "recharts";
import type { TooltipPayloadEntry } from "recharts/types/state/tooltipSlice";
import type { TextAnchor } from "recharts/types/component/Text";
import { FxSeparator } from "@fluctux/ui";
import { ChartTooltip, type ChartTooltipPropsType } from "./ChartTooltip";
import { ChartXAxis, type ChartXAxisPropsType } from "./ChartXAxis";
import { ChartYAxis, type ChartYAxisPropsType } from "./ChartYAxis";

type IndicatorType = "icon" | "shape" | "none";
type TooltipIndicatorShapeType = "square" | "bot" | "circle";

export const TooltipIndicatorShapeStyles: {
  [key in TooltipIndicatorShapeType]: string;
} = {
  bot: "w-1 h-6 rounded-[50px]",
  square: "w-2 h-2 rounded-xs",
  circle: "w-2 h-2 rounded-full",
};

type CustomTooltipPropstype = {
  icons?: Record<string, LucideIcon>;
  iconSize?: number;
  className?: string;
  IndicatorType?: IndicatorType;
  indicatorShape?: TooltipIndicatorShapeType;
  valueFormatter?: (value: number) => string;
};

/**
 * Custom tooltip component for recharts
 *
 * Renders a styled tooltip with support for icons, shape indicators and value formatting.
 * Supports two layouts: default inline and "bot" layout which shows a stacked card style.
 *
 * @param active - Whether the tooltip is currently active
 * @param label - The x-axis label value shown at the top
 * @param payload - Array of data entries for the hovered bar
 * @param icons - Optional map of dataKey to LucideIcon for icon indicators
 * @param iconSize - Size of the icon in pixels (default: 13)
 * @param className - Additional CSS classes for the tooltip container
 * @param IndicatorType - Type of indicator to show: "icon", "shape" or "none" (default: "shape")
 * @param indicatorShape - Shape of the indicator: "square", "bot" or "circle" (default: "circle")
 * @param valueFormatter - Optional function to format the displayed value
 *
 * @example
 * ```tsx
 * <Tooltip
 *   content={(props) => (
 *     <CustomTooltip
 *       {...props}
 *       IndicatorType="shape"
 *       indicatorShape="bot"
 *       valueFormatter={formatScaleValue}
 *     />
 *   )}
 * />
 * ```
 */
export const CustomTooltip = ({
  active,
  label,
  payload,
  icons,
  iconSize = 13,
  className,
  IndicatorType = "shape",
  indicatorShape = "circle",
  valueFormatter,
}: CustomTooltipPropstype & TooltipContentProps<number, string>) => {
  if (!active || !payload?.length) return null;
  const tempIndicatorShape = TooltipIndicatorShapeStyles[indicatorShape];
  const isShapeBot = IndicatorType == "shape" && indicatorShape == "bot";
  return (
    <div
      className={`bg-background-color_900C border border-border-color_1 overflow-hidden rounded-lg  w-[180px] ${className}`}
    >
      <p
        className={`text-text-color_1 text-workspace_2 font-medium  ${isShapeBot ? "px-3 py-2" : "  p-3 pb-2"}`}
      >
        {label}
      </p>
      <div
        className={`${isShapeBot ? "bg-background-color_925C border-t border-border-color_1 rounded-lg" : "p-3 py-2 pt-0"}`}
      >
        {payload.map((entry: TooltipPayloadEntry) => {
          const Icon = icons && icons[entry.dataKey as string];
          return (
            <>
              {isShapeBot ? (
                <>
                  <div key={`${entry.dataKey}`} className="w-full px-3 py-1">
                    <div className="flex justify-start items-center gap-1.5">
                      <div
                        className={`${tempIndicatorShape}`}
                        style={{ backgroundColor: entry.fill }}
                      />
                      <div className="text-left">
                        <p className="text-text-color_4 text-workspace_3">
                          {entry.name}
                        </p>
                        <p className="text-text-color_1 text-workspace_3 font-medium ml-auto ">
                          {valueFormatter
                            ? valueFormatter?.(Number(entry.value))
                            : entry.value}
                        </p>
                      </div>
                    </div>
                  </div>
                  <FxSeparator orientation="horizontal" />
                </>
              ) : (
                <div
                  key={`${entry.dataKey}`}
                  className="flex items-center gap-2 py-0.5 "
                >
                  {IndicatorType == "shape" && (
                    <div
                      className={`${tempIndicatorShape}`}
                      style={{ backgroundColor: entry.fill }}
                    />
                  )}
                  {IndicatorType == "icon" && (
                    <>
                      {Icon && (
                        <Icon size={iconSize} style={{ color: entry.color }} />
                      )}
                    </>
                  )}
                  <span className="text-text-color_4 text-workspace_3">
                    {entry.name}
                  </span>
                  <span className="text-text-color_1 text-workspace_3 font-medium ml-auto">
                    {valueFormatter
                      ? valueFormatter?.(Number(entry.value))
                      : entry.value}
                  </span>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

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
  height?: string;
  data?: unknown[] | undefined;
  Bars: React.ReactNode;
  chartMargin?: { top: number; right: number; left: number; bottom: number };
  barChartClassName?: string;
  CartesianGridProps?: CartesianGridProps;
  YAxisProps?: YAxisProps;
  isEnableLegend?: boolean;
  CustomLegendProps?: CustomLegendPropstype;
  XAxisProps?: XAxisProps;
} & ChartXAxisPropsType &
  ChartYAxisPropsType &
  ChartTooltipPropsType;

export const CustomBarChart = ({
  height = "400px",
  data,
  chartMargin = { top: 0, right: 0, left: 0, bottom: 0 },
  barChartClassName,
  Bars,
  XAxisDataKey,
  XAxisProps,
  XAxisCustomSettings,
  isEnableTooltip = true,
  isEnableLegend = false,
  tooltip,
  CartesianGridProps: CartesianGridPropsInput,
  YAxisProps,
  isKeepYAxis,
  YAxisCustomSettings,
  CustomLegendProps,
  CustomTooltipProps,
}: CustomBarChartProps) => {
  const CartesianGridProps = {
    strokeDasharray: "0",
    vertical: false,
    stroke: "var(--border-color-1)",
    ...CartesianGridPropsInput,
  };

  return (
    <div style={{ height: height }}>
      <ResponsiveContainer width={"100%"}>
        <BarChart
          className={`${barChartClassName} [&>svg]:outline-none [&>svg]:ring-0 outline-none ring-0`}
          data={data}
          margin={chartMargin}
        >
          <CartesianGrid {...CartesianGridProps} />
          <ChartXAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            XAxisDataKey={XAxisDataKey}
            XAxisCustomSettings={XAxisCustomSettings}
            {...XAxisProps}
          />
          <ChartYAxis
            isKeepYAxis={isKeepYAxis}
            YAxisCustomSettings={YAxisCustomSettings}
            {...YAxisProps}
          />

          {isEnableTooltip && (
            <Tooltip
              cursor={{
                fill: tooltip?.style?.cursorFill,
                opacity: tooltip?.style?.cursorOpacity,
              }}
              content={(props: any) => (
                <CustomTooltip {...props} {...CustomTooltipProps} />
              )}
            />
          )}

          <ChartTooltip
            CustomTooltipProps={{ ...CustomTooltipProps }}
            isEnableTooltip={isEnableTooltip}
            tooltip={tooltip}
          />
          {isEnableLegend && (
            <Legend
              content={(props) => (
                <CustomLegend {...props} {...CustomLegendProps} />
              )}
            />
          )}
          {Bars}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
