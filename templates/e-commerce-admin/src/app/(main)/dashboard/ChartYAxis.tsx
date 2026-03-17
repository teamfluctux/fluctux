import React from "react";
import { YAxis, type LabelProps, type YAxisProps } from "recharts";

export type ChartYAxisPropsType = {
  isKeepYAxis?: boolean;
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
};

export const ChartYAxis = ({
  isKeepYAxis = false,
  YAxisCustomSettings: YAxisCustomSettingsProps,
  ...props
}: ChartYAxisPropsType & YAxisProps) => {
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
  return (
    <>
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
          {...props}
        />
      )}
    </>
  );
};
