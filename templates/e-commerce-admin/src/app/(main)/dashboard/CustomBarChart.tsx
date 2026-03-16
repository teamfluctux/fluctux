"use client";
import React, { useState } from "react";
import {
  ShoppingBag as ShoppingBagIcon,
  TrendingUp as TrendingUpIcon,
  Package as PackageIcon,
  Tag as TagIcon,
  Receipt as ReceiptIcon,
  RefreshCcw as RefreshCcwIcon,
  type LucideIcon,
} from "lucide-react";
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
  type DefaultTooltipContentProps,
} from "recharts";
import { formatScaleValue } from "@/utils";
import type { TooltipPayloadEntry } from "recharts/types/state/tooltipSlice";
import type { TextAnchor } from "recharts/types/component/Text";
import { FxSeparator } from "@fluctux/ui";

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

const CustomTooltip = ({
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

type ItemColorIndicatorShapeType = "square" | "circle" | "rect";

export const ItemColorIndicatorShapeStyles: {
  [key in ItemColorIndicatorShapeType]: string;
} = {
  rect: "w-2.5 h-1.5 rounded-[50px]",
  square: "w-2 h-2 rounded-xs",
  circle: "w-2 h-2 rounded-full",
};

type CustomLegendPropstype = {
  icons?: Record<string, LucideIcon>;
  iconSize?: number;
  itemColorIndicatorShape?: ItemColorIndicatorShapeType;
  IndicatorType?: IndicatorType;
  className?: string;
};

const CustomLegend = ({
  payload,
  icons,
  iconSize = 14,
  itemColorIndicatorShape = "square",
  IndicatorType = "shape",
  className,
}: CustomLegendPropstype & DefaultLegendContentProps) => {
  if (!payload?.length) return null;
  const tempItemColorIndicatorShape =
    ItemColorIndicatorShapeStyles[itemColorIndicatorShape];
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

type CustomBarChartProps = {
  height?: string;
  isEnableActiveCursorStyle?: boolean;
  data?: unknown[] | undefined;
  Bars: React.ReactNode;
  chartMargin?: { top: number; right: number; left: number; bottom: number };
  barChartClassName?: string;
  CartesianGridProps?: CartesianGridProps;
  XAxisDataKey: string;
  XAxisProps?: XAxisProps;
  YAxisProps?: YAxisProps;
  XAxisCustomSettings?: {
    style?: {
      margin?: number;
      initialTextColor?: string;
      activeTextColor?: string;
      fontSize?: number;
      fontWeight?: number;
      textAnchor?: TextAnchor;
      rotate?: number;
      verticalOffset?: number;
    };
  };
  YAxisCustomSettings?: {
    style?: {
      axisLine?: boolean;
      tickLine?: boolean;
      wrapperWdith?: number;
      initialTextColor?: string;
      fontSize?: number;
      fontWeight?: number;
    };
    label?: LabelProps;
    isUseAxisLabel?: boolean;
    textformatter?: (value: number) => string;
  };
  isEnableTooltip?: boolean;
  isEnableLegend?: boolean;
  isKeepYAxis?: boolean;
  tooltip?: {
    style?: {
      cursorFill?: string;
      cursorOpacity?: number;
    };
  };
  CustomLegendProps?: CustomLegendPropstype;
  CustomTooltipProps?: CustomTooltipPropstype;
};

export const CustomBarChart = ({
  height = "400px",
  data,
  isEnableActiveCursorStyle = true,
  chartMargin = { top: 0, right: 0, left: 0, bottom: 0 },
  barChartClassName,
  Bars,
  XAxisDataKey,
  XAxisProps,
  XAxisCustomSettings: XAxisCustomSettingsProps,
  isEnableTooltip = true,
  isEnableLegend = false,
  isKeepYAxis = false,
  YAxisCustomSettings: YAxisCustomSettingsProps,
  tooltip: tooltipProps,
  CartesianGridProps: CartesianGridPropsInput,
  YAxisProps,
  CustomLegendProps,
  CustomTooltipProps,
}: CustomBarChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const YAxisCustomSettings = {
    style: {
      axisLine: false,
      tickLine: false,
      fontSize: 13,
      fontWeight: 500,
      wrapperWdith: 30,
      initialTextColor: "var(--foreground-color-3)",
      ...YAxisCustomSettingsProps?.style, // merge style
    },
    textformatter: YAxisCustomSettingsProps?.textformatter,
    label: {
      value: "",
      angle: -90,
      position: "insideLeft",
      dx: -17,
      dy: 50,
      textAnchor: "middle",
      style: { fill: "var(--foreground-color-3)", fontSize: 13 },
      ...YAxisCustomSettingsProps?.label, // merge label
    },
  };
  const CartesianGridProps = {
    strokeDasharray: "0",
    vertical: false,
    stroke: "var(--border-color-1)",
    ...CartesianGridPropsInput,
  };

  const XAxisCustomSettings = {
    style: {
      margin: 3,
      initialTextColor: "var(--foreground-color-4)",
      activeTextColor: "var(--foreground)",
      fontSize: 13,
      fontWeight: 500,
      textAnchor: "middle" as TextAnchor,
      verticalOffset: 16,
      ...XAxisCustomSettingsProps?.style,
    },
  };

  const tooltip = {
    style: {
      cursorFill: "var(--background-color-800C)",
      cursorOpacity: 0.5,
      ...tooltipProps?.style,
    },
  };

  return (
    <div style={{ height: height }}>
      <ResponsiveContainer width={"100%"}>
        <BarChart
          onMouseMove={(state) => {
            if (!isEnableActiveCursorStyle) return;
            if (state.isTooltipActive)
              setActiveIndex(Number(state.activeTooltipIndex) ?? null);
            else setActiveIndex(null);
          }}
          onMouseLeave={() => isEnableActiveCursorStyle && setActiveIndex(null)}
          className={`${barChartClassName} [&>svg]:outline-none [&>svg]:ring-0 outline-none ring-0`}
          data={data}
          margin={chartMargin}
        >
          <CartesianGrid {...CartesianGridProps} />
          <XAxis
            dataKey={`${XAxisDataKey}`}
            stroke="var(--border-color-2)"
            angle={34}
            tick={(props) => {
              const { x, y, payload, index } = props;
              const isActive = activeIndex === index;
              return (
                <text
                  x={x}
                  y={y}
                  dy={XAxisCustomSettings.style?.verticalOffset}
                  transform={`rotate(${XAxisCustomSettings.style?.rotate}, ${x}, ${y})`}
                  textAnchor={XAxisCustomSettings.style?.textAnchor}
                  fill={
                    isActive
                      ? XAxisCustomSettings.style?.activeTextColor
                      : XAxisCustomSettings.style?.initialTextColor
                  }
                  fontSize={XAxisCustomSettings.style?.fontSize}
                  fontWeight={XAxisCustomSettings.style?.fontWeight}
                >
                  {payload.value}
                </text>
              );
            }}
            tickMargin={XAxisCustomSettings.style?.margin}
            {...XAxisProps}
          />
          {isKeepYAxis && (
            <YAxis
              axisLine={YAxisCustomSettings.style?.axisLine}
              tickLine={YAxisCustomSettings.style?.tickLine}
              width={YAxisCustomSettings.style?.wrapperWdith}
              tick={{
                fill: YAxisCustomSettings.style?.initialTextColor,
                fontSize: YAxisCustomSettings.style?.fontSize,
                fontWeight: 500,
              }}
              tickFormatter={(value) =>
                YAxisCustomSettings.textformatter
                  ? YAxisCustomSettings.textformatter(value).toString()
                  : String(value)
              }
              label={YAxisCustomSettings.label}
              {...YAxisProps}
            />
          )}
          {isEnableTooltip && (
            <Tooltip
              cursor={{
                fill: tooltip.style?.cursorFill,
                opacity: tooltip.style?.cursorOpacity,
              }}
              content={(props: any) => (
                <CustomTooltip {...props} {...CustomTooltipProps} />
              )}
            />
          )}
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
