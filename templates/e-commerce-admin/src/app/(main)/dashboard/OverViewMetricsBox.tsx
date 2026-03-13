import { formatScaleValue, getPercentageChange } from "@/utils";
import { ArrowDown, ArrowUp, Minus, PlusIcon } from "lucide-react";

type OverViewHeaderDataBoxPropsType = {
  title: string;
  currentValue: number;
  previousValue?: number;
  newValue?: string;
  date: string;
  colorClass?: string;
};

type IconUpOrDownPropsType = {
  isScaleDown: boolean;
  value: string;
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
 * @param colorClass - For giving color to badges
 *
 * @example
 * ```tsx
 * <OverViewMetricsBox
 *   title="Total Sales"
 *   itemKey="total-sales"
 *   currentValue={47500000}
 *   previousValue={44811000}
 *   colorClass="text-rdx-red-fg"
 *   date="24 Feb, 2026 - 23 Mar, 2026"
 * />
 * ```
 */
export const OverViewMetricsBox = ({
  title,
  currentValue,
  previousValue,
  colorClass,
  date,
}: OverViewHeaderDataBoxPropsType) => {
  const current_value = formatScaleValue(currentValue);
  const previous_value = previousValue ? formatScaleValue(previousValue) : "0";
  const scale_measurement_in_percentage = previousValue
    ? getPercentageChange(currentValue, previousValue)
    : 0;
  const [start_date, end_date] = date ? date.split("-") : date;
  const isScaleDown = scale_measurement_in_percentage < 0;
  return (
    <div className="w-full h-full border border-border-color_1 p-3 relative ">
      <div className="flex justify-start items-center gap-1.5 ">
        <div
          className={`w-[5px] h-[16px] ${colorClass ?? "bg-background-color_700C"} rounded-full `}
        ></div>
        <span className="text-text-color_2 text-workspace_2 font-medium">
          {title}
        </span>
      </div>

      <div className="flex justify-start items-center gap-1.5 mt-2">
        <span className="text-read_25 font-medium">$ {current_value}</span>{" "}
        <span
          className={`text-rdx-green-fg flex justify-center items-center gap-0 ${isScaleDown ? "text-rdx-red-fg" : "text-rdx-green-fg"}`}
        >
          {isScaleDown ? <Minus size={16} /> : <PlusIcon size={16} />}
          {scale_measurement_in_percentage.toString().replace("-", "")}%
        </span>
      </div>
      <div className="h-[55px] border-t absolute bottom-0 left-0 w-full  px-3 border-border-color_1 flex  flex-col justify-center gap-0.5">
        <IconUpOrDown
          isScaleDown={isScaleDown}
          value={previous_value as string}
        />
        <div className="text-workspace_2 font-medium flex justify-start items-center gap-2">
          <p className="text-text-color_3">
            Date: {start_date ? start_date.trim() : "last month"}{" "}
            {end_date ? ` - ${end_date.trim()}` : null}
          </p>
        </div>
      </div>
    </div>
  );
};
