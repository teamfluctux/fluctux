"use client";
import { ChartAreaInteractive } from "@/components/workspace/charts";
import {
  GradeChartAreas,
  GradeChartData,
  GradeConfig,
} from "@/constants/workspace";
import { RechartSelectionDataType } from "@fluctux/types";
import { useState } from "react";

const SelectionData: RechartSelectionDataType[] = [
  {
    label: "All Semister",
    value: "all",
  },
  {
    label: "Last 3 Semister",
    value: "last_3",
  },
  {
    label: "last 2 Semister",
    value: "last_2",
  },
];

export const GradeChatWithDate = () => {
  const [semister, setSemister] = useState("all");

  //   const filteredData = GradeChartData.filter((item) => {
  //     const date = new Date(item.date);
  //     const referenceDate = new Date("2024-06-30");
  //     let daysToSubtract = 90;
  //     if (timeRange === "30d") {
  //       daysToSubtract = 30;
  //     } else if (timeRange === "7d") {
  //       daysToSubtract = 7;
  //     }
  //     const startDate = new Date(referenceDate);
  //     startDate.setDate(startDate.getDate() - daysToSubtract);
  //     return date >= startDate;
  //   });

  return (
    <ChartAreaInteractive
      graphTitle="Grade Point Average"
      graphtDesc="Comparison between your GPA and Average Student GPA"
      selectValue={semister}
      setSelectValue={setSemister}
      chartConfig={GradeConfig}
      AreaData={GradeChartAreas}
      XAxisKey="semister"
      chartData={GradeChartData}
      selectValuePlaceholder="Last 3 Months"
      selectionData={SelectionData}
    />
  );
};
