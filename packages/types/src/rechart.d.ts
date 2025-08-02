import { AreaDataType } from "./organization";

export type DefaultRechartTypes = {
  graphTitle?: string;
  graphtDesc?: string;
  chartContainerClassName?: string;
  chartConfig: ChartConfig;
  XAxisKey: string;
  chartData?: any[];
  graphChartFooter?: React.ReactNode;
  AreaData: AreaDataType[];
};

export type RechartSelectionDataType = {
  label: string,
  value: string
}
