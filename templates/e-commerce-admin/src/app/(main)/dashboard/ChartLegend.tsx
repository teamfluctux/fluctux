import type { IndicatorType } from "@/types";
import { FxButton, Tooltip, TooltipContent, TooltipTrigger } from "@fluctux/ui";
import { RotateCcw, type LucideIcon } from "lucide-react";
import {
  Legend,
  type DefaultLegendContentProps,
  type LegendPayload,
  type LegendProps,
} from "recharts";

type LegendItemColorIndicatorShapeType = "square" | "circle" | "rect";

const LegendItemColorIndicatorShapeStyles: {
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
  activeLegendKey?: string;
  onLegendMouseEnter?: (
    payload: LegendPayload,
    index: number,
    event: React.MouseEvent
  ) => void;
  onLegendMouseLeave?: () => void;
  onLegendClick?: (
    payload: LegendPayload,
    index: number,
    event: React.MouseEvent
  ) => void;
  resetActiveLegend?: () => void;
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
  onLegendClick,
  onLegendMouseEnter,
  onLegendMouseLeave,
  resetActiveLegend,
  activeLegendKey,
}: CustomLegendPropstype & DefaultLegendContentProps) => {
  if (!payload?.length) return null;
  const tempItemColorIndicatorShape =
    LegendItemColorIndicatorShapeStyles[itemColorIndicatorShape];
  return (
    <div
      className={`w-fit flex justify-center items-center gap-2 ${className}`}
    >
      {payload.map((entry, i) => {
        const Icon = icons && icons[entry.dataKey as string];
        return (
          <div
            key={entry.dataKey as string}
            className={`flex justify-center items-center gap-1  px-2 py-1 rounded-sm
                ${activeLegendKey === entry.dataKey ? "bg-background-color_850C" : "hover:bg-background-color_900C"}`}
            onClick={(e) => onLegendClick?.(entry, payload.indexOf(entry), e)}
            onMouseEnter={(e) =>
              onLegendMouseEnter?.(entry, payload.indexOf(entry), e)
            }
            onMouseLeave={() => onLegendMouseLeave?.()}
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
            <span
              className={`text-workspace_3 font-medium ${activeLegendKey === entry.dataKey ? "text-text-color_1" : "text-text-color_4 "}`}
            >
              {entry.value}
            </span>
          </div>
        );
      })}
      {activeLegendKey && (
        <Tooltip>
          <TooltipTrigger>
            <FxButton
              onClick={() => resetActiveLegend?.()}
              variant="secondary"
              className="p-0! w-7! h-7! rounded-full!"
            >
              <RotateCcw size={14} />
            </FxButton>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reset</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

export type ChartLegendPropsType = {
  isEnableLegend?: boolean;
  CustomLegendProps?: CustomLegendPropstype;
};

export const ChartLegend = ({
  CustomLegendProps,
  isEnableLegend = true,
}: ChartLegendPropsType) => {
  if (!isEnableLegend) return null;
  return (
    <Legend
      content={(props: DefaultLegendContentProps) => (
        <CustomLegend {...props} {...CustomLegendProps} />
      )}
    />
  );
};

ChartLegend.displayName = "Legend";
