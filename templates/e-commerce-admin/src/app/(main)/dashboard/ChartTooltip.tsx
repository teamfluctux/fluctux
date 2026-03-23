"use client";
import type { IndicatorType } from "@/types";
import { FxSeparator } from "@fluctux/ui";
import type { LucideIcon } from "lucide-react";
import React from "react";
import { Tooltip, type TooltipContentProps, type TooltipProps } from "recharts";
import type { TooltipPayloadEntry } from "recharts/types/state/tooltipSlice";

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
        className={`text-text-color_1 text-workspace_2 font-medium  ${isShapeBot ? "px-3 py-1" : "  p-3 pb-2"}`}
      >
        {label}
      </p>
      <div
        className={`${isShapeBot ? "bg-background-color_925C border-t border-border-color_1 rounded-lg" : "p-3 py-2 pt-0"}`}
      >
        {payload.map((entry: TooltipPayloadEntry, i) => {
          if (entry.dataKey == "spacer") return null;
          {
            console.log("hello", entry);
          }
          const Icon = icons && icons[entry.dataKey as string];
          return (
            <React.Fragment key={`${entry.dataKey}-${i}`}>
              {isShapeBot ? (
                <>
                  <div className="w-full px-3 py-1">
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
                <div className="flex items-center gap-2 py-0.5 ">
                  {IndicatorType == "shape" && (
                    <div
                      className={`${tempIndicatorShape}`}
                      style={{ backgroundColor: entry.color }}
                    />
                  )}
                  {IndicatorType == "icon" && (
                    <>
                      {Icon && (
                        <Icon size={iconSize} style={{ color: entry.color }} />
                      )}
                    </>
                  )}
                  <span className="text-text-color_4 text-workspace_3 leading-4">
                    {entry.name}
                  </span>
                  <span className="text-text-color_1 text-workspace_3 font-medium ml-auto">
                    {valueFormatter
                      ? valueFormatter?.(Number(entry.value))
                      : entry.value}
                  </span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export type ChartTooltipPropsType = {
  isEnableTooltip?: boolean;
  CustomTooltipProps?: CustomTooltipPropstype;
  tooltip?: {
    style?: {
      cursorFill?: string;
      cursorOpacity?: number;
    };
  };
};

export const ChartTooltip = ({
  isEnableTooltip = true,
  CustomTooltipProps,
  tooltip: tooltipProps,
}: ChartTooltipPropsType) => {
  const tooltip = {
    style: {
      cursorFill: "var(--background-color-800C)",
      cursorOpacity: 0.5,
      ...tooltipProps?.style,
    },
  };

  if (!isEnableTooltip) return null;

  return (
    <Tooltip
      cursor={{
        fill: tooltip.style?.cursorFill,
        opacity: tooltip.style?.cursorOpacity,
      }}
      content={(props: TooltipContentProps<number, string>) => (
        <CustomTooltip {...CustomTooltipProps} {...props} />
      )}
    />
  );
};

ChartTooltip.displayName = "Tooltip";
