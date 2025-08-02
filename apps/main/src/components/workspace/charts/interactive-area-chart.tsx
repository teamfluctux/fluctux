"use client";

// TODO: move this to ui package
import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@fluctux/ui";
import { DefaultRechartTypes, RechartSelectionDataType } from "@fluctux/types";
import { GradeLinearGradientShapeData } from "@/constants/workspace";

export const description = "An interactive area chart";

type ChartAreaInteractivePropsType = DefaultRechartTypes & {
  selectValue?: any;
  setSelectValue?: (val: any) => void;
  selectionData?: RechartSelectionDataType[];
  selectValuePlaceholder?: string;
} ;

export function ChartAreaInteractive({
  chartConfig,
  chartContainerClassName,
  XAxisKey,
  AreaData,
  selectValue,
  setSelectValue,
  chartData,
  selectionData,
  selectValuePlaceholder,
  graphTitle,
  graphtDesc,
}: ChartAreaInteractivePropsType) {
  return (
    <Card className="pt-0 !bg-transparent">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b border-border-color_1 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>{graphTitle ?? "Area Chart - Interactive"}</CardTitle>
          <CardDescription className="text-text-color_2">
            {graphtDesc ?? " Showing total visitors for the last 3 months"}
          </CardDescription>
        </div>

        {selectValue && (
          <Select value={selectValue} onValueChange={setSelectValue}>
            <SelectTrigger
              className="hidden w-[160px] rounded sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder={`${selectValuePlaceholder}`} />
            </SelectTrigger>
            <SelectContent className="rounded !z-[99999999999]">
              {selectionData?.map((item, i) => {
                return (
                  <SelectItem
                    key={i}
                    value={`${item.value}`}
                    className="rounded-tiny"
                  >
                    {item.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className={`aspect-auto h-[250px] w-full ${chartContainerClassName}`}
        >
          <AreaChart data={chartData}>
            <defs>
              {
                Object.entries(GradeLinearGradientShapeData).map(([key, value], i) => {
                  return  <linearGradient key={i} id={`${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={value.stopColor_1}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={value.stopColor_2}
                  stopOpacity={0.1}
                />
              </linearGradient>
                })
              }
            </defs>
            <CartesianGrid vertical={false} stroke="var(--border-color-1)" />
            <XAxis
              dataKey={`${XAxisKey}`}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              // tickFormatter={(value) => {
              //   const date = new Date(value);
              //   return date.toLocaleDateString("en-US", {
              //     month: "short",
              //     day: "numeric",
              //   });
              // }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  // labelFormatter={(value) => {
                  //   return new Date(value).toLocaleDateString("en-US", {
                  //     month: "short",
                  //     day: "numeric",
                  //   });
                  // }}
                  indicator="dot"
                />
              }
            />
            {/* <Area
              dataKey={`${AreaKey_1}`} // mobile demo
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey={`${AreaKey_2}`} // desktop demo
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            /> */}

            {AreaData.map((item, i) => {
              const { _id, fillOpacity, stroke } = item.config;
              return (
                <Area
                  key={i}
                  dataKey={`${item.key}`} // mobile demo
                  type="natural"
                  fill={`url(#${_id})`}
                  stroke={stroke}
                  stackId="a"
                />
              );
            })}
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
