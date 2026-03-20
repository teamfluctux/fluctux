import type { DashboardOverviewDatatype } from "@/types/dashboard";
import { formatScaleValue,  getPercentageChange } from "@fluctux/shared";
import { ArrowDown, ArrowUp, Minus, PlusIcon } from "lucide-react";

type IconUpOrDownPropsType = {
  isScaleDown: boolean;
  value: string;
};

type OverViewMetricsBoxGroupPropsType = {
  children: React.ReactNode;
};

export const OverViewMetricsBoxGroup = ({
  children,
}: OverViewMetricsBoxGroupPropsType) => {
  return (
    <div className="grid grid-cols-3 auto-rows-[150px] w-full gap-4">
      {children}
    </div>
  );
};

const IconUpOrDown = ({ isScaleDown, value }: IconUpOrDownPropsType) => {
  const Icon = isScaleDown ? ArrowDown : ArrowUp;
  return (
    <div
      className={`flex justify-start items-center ${isScaleDown ? "text-rdx-red-fg" : "text-rdx-green-fg"}`}
    >
      <div
        className={`w-[20px] h-[20px] rounded-full shrink-0 ${isScaleDown ? "bg-surface-red-bg-active" : " bg-surface-green-bg-active"} flex justify-center items-center`}
      >
        <Icon size={14} />
      </div>

      <p className={` text-workspace_2 font-medium ml-1`}>{value}</p>
    </div>
  );
};

/**
 * Overview metric card
 *
 * Displays a single metric with title, scaled value, percentage change
 * and optional new activity indicator.
 *
 * @param title - The display label of the metric e.g "Total Sales"
 * @param currentValue - The current metric value used for scale formatting
 * @param previousValue - The previous metric value to calculate percentage change against
 * @param newValue - Recent activity count within 5 minutes to 24 hours range e.g 5 new orders in last hour
 * @param date - The date or time period this metric represents
 * @example
 * ```tsx
 * <OverViewMetricsBox
 *   title="Total Sales"
 *   itemKey="total-sales"
 *   currentValue={47500000}
 *   previousValue={44811000}
 *   date="24 Feb, 2026 - 23 Mar, 2026"
 * />
 * ```
 */
export const OverViewMetricsBox = ({
  title,
  currentValue,
  previousValue,
  icon,
  date,
}: Omit<DashboardOverviewDatatype[string], "itemKey"> & {
  title: string;
  date: string;
}) => {
  const current_value = formatScaleValue(currentValue);
  const previous_value = previousValue ? formatScaleValue(previousValue) : "0";
  const scale_measurement_in_percentage = previousValue
    ? getPercentageChange(currentValue, previousValue)
    : 0;
  const [start_date, end_date] = date ? date.split("-") : date;
  const isScaleDown = scale_measurement_in_percentage < 0;
  const Icon = icon;
  return (
    <div className="w-full h-full border border-border-color_1 rounded-xl overflow-hidden relative bg-background-color_900C">
      <div className=" px-3  h-[40px] w-full flex justify-between">
        <div className="flex justify-start items-center gap-1.5">
          {Icon && <Icon size={16} className="text-text-svg_default" />}
          <span className="text-text-color_4 text-workspace_2 font-medium">
            {title}
          </span>
        </div>
        {previousValue && (
          <IconUpOrDown
            isScaleDown={isScaleDown}
            value={previous_value as string}
          />
        )}
      </div>

      <div className=" p-3 px-8 h-[calc(100%-40px)] bg-background-color_950C flex justify-center flex-col  rounded-xl">
        <div className="flex justify-start items-center gap-1.5">
          <span className="text-read_25 font-medium">{current_value}</span>{" "}
          {previousValue && (
            <span
              className={`text-rdx-green-fg flex justify-center items-center gap-0 ${isScaleDown ? "text-rdx-red-fg" : "text-rdx-green-fg"}`}
            >
              {isScaleDown ? <Minus size={16} /> : <PlusIcon size={16} />}
              {scale_measurement_in_percentage.toString().replace("-", "")}%
            </span>
          )}
        </div>
        <div className=" w-full  flex  flex-col justify-center gap-0.5">
          <div className="text-workspace_2 font-medium flex justify-start items-center gap-2">
            <p className="text-text-color_3">
              {start_date ? start_date.trim() : "No date"}{" "}
              {end_date ? ` - ${end_date.trim()}` : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
