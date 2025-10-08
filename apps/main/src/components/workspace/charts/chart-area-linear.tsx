"use client";

// TODO: move this to ui package
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@fluctux/ui";
import { DefaultRechartTypes } from "@fluctux/types";

export const description = "A linear area chart";

type ChartAreaLinearPropsType = DefaultRechartTypes;

export function ChartAreaLinear({
  graphTitle,
  graphtDesc,
  AreaData,
  chartContainerClassName,
  chartConfig,
  XAxisKey,
  chartData,
  graphChartFooter,
}: ChartAreaLinearPropsType) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{graphTitle ?? "Area Chart - Linear"}</CardTitle>
        <CardDescription>
          {graphtDesc ?? "Showing total visitors for the last 6 months"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className={`h-[250px] w-full aspect-auto ${chartContainerClassName}`}
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="var(--border-color-1)" />
            <XAxis
              dataKey={`${XAxisKey}`}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />

            {AreaData.map((item, i) => {
              const { fillOpacity, stroke } = item.config;
              return (
                <Area
                  key={i}
                  dataKey={`${item.key}`} // mobile demo
                  type="linear"
                  fill={"var(--color-desktop)"}
                  stroke={stroke ?? "var(--color-desktop)"}
                  fillOpacity={fillOpacity ?? 0.4}
                />
              );
            })}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {graphChartFooter && <CardFooter>{graphChartFooter}</CardFooter>}
    </Card>
  );
}
