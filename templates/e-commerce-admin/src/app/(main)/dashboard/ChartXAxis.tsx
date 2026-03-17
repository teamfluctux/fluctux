import React from "react";
import { XAxis, type XAxisProps } from "recharts";
import type { TextAnchor } from "recharts/types/component/Text";

export type ChartXAxisPropsType = {
  XAxisDataKey: string;
  activeIndex?: number;
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
};

export const ChartXAxis = ({
  XAxisDataKey,
  XAxisCustomSettings: XAxisCustomSettingsProps,
  activeIndex,
  ...props
}: ChartXAxisPropsType & XAxisProps) => {
  const XAxisCustomSettings = {
    style: {
 
      initialTextColor: "var(--chart-text-color-2)",
      activeTextColor: "var(--chart-text-color-1)",
      fontSize: 13,
      fontWeight: 500,
      textAnchor: "middle" as TextAnchor,
      verticalOffset: 10,
      ...XAxisCustomSettingsProps?.style,
    },
  };
  return (
    <XAxis
      dataKey={`${XAxisDataKey}`}
      stroke="var(--border-color-2)"
 
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
      {...props}
    />
  );
};
