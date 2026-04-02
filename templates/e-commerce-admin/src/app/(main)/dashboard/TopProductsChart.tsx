"use client";
import { Bar } from "recharts";
import { CustomBarChart } from "./CustomBarChart";
import { formatScaleValue } from "@fluctux/shared";

type TopProductChartDataType = {
  product_name: string;
  orders_count: number;
};

const TOP_PRODUCT_CHART_DATA: TopProductChartDataType[] = [
  { product_name: "Wireless Headphones", orders_count: 4200 },
  { product_name: "Running Shoes", orders_count: 3800 },
  { product_name: "Smart Watch", orders_count: 3100 },
  { product_name: "Yoga Mat", orders_count: 2700 },
  { product_name: "Coffee Maker", orders_count: 2300 },
];

export const TopProductsChart = () => {
  return (
    <div className="w-full h-full">
      <CustomBarChart
        ChartHeight="315px"
        XAxisDataKey="orders_count"
        BarChartProps={{
          layout: "vertical",
        }}
        isKeepYAxis
        XAxisProps={{
          type: "number",
          hide: true,
        }}
        YAxisProps={{
          dataKey: "product_name",
          width: 150,

          type: "category",
        }}
        barChartClassName="p-3"
        isEnableTooltip={false}
        isEnableLegend={false}
        Bars={
          <>
            <Bar
              barSize={30}
              dataKey="orders_count"
              stackId="a"
              fill="var(--chart-color-1)"
              radius={8}
              label={(props) => {
                const { x, y, width, height, value } = props;
                return (
                  <text
                    x={x + width + 8}
                    y={y + height / 2}
                    fill="var(--foreground-color-2)"
                    fontSize={12}
                    fontWeight={500}
                    dominantBaseline="middle"
                  >
                    {formatScaleValue(value)}
                  </text>
                );
              }}
            />
          </>
        }
        data={TOP_PRODUCT_CHART_DATA}
      />
    </div>
  );
};
