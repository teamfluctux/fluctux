import { ChartConfig, FxButton, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { ChartColumn, Ellipsis, Tag } from "lucide-react";
import React from "react";
import { ChartAreaInteractive, ChartAreaLinear } from "../../charts";
import { AreaDataType } from "@fluctux/types";
import { GradeConfig, GradeChartAreas, GradeChartData } from "@/constants/workspace";
import { GradeChatWithDate } from "./charts/grade-data-with-date";

export const UniversityDashboard = () => {
  return (
    <div className="w-full">
      {/* dashboard top */}
      <div className="w-full flex justify-center items-center gap-3">
        <div className="w-full border border-border-color_1 bg-background-color_900C p-3 rounded-rounded_10C">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <Tag size={LUCIDE_WORKSPACE_ICON_SIZE} />
              <p className="text-workspace_2 font-medium text-text-color_2">
                Credits Complete
              </p>
            </div>
            <FxButton
              variant="ghost_zinc"
              className="rounded-tiny group p-1 hover:!bg-background-color_750C"
            >
              <Ellipsis
                size={LUCIDE_WORKSPACE_ICON_SIZE}
                className="text-text-color_2 group-hover:text-text-color_1"
              />
            </FxButton>
          </div>
          <div className="flex justify-start items-end font-weight_450 gap-0.5 text-read_25 mt-5">
            <span>120</span>
            <span className=" text-text-color_2">/</span>
            <span className=" text-text-color_2">144</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-text-color_3 text-workspace_3">
              Compared to last semister
            </p>
            <div></div>
          </div>
        </div>
        <div className="w-full border border-border-color_1 bg-background-color_900C p-3 rounded-rounded_10C">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <ChartColumn size={LUCIDE_WORKSPACE_ICON_SIZE} />
              <p className="text-workspace_2 font-medium text-text-color_2">
                Grade point Average
              </p>
            </div>
            <FxButton
              variant="ghost_zinc"
              className="rounded-tiny group p-1 hover:!bg-background-color_750C"
            >
              <Ellipsis
                size={LUCIDE_WORKSPACE_ICON_SIZE}
                className="text-text-color_2 group-hover:text-text-color_1"
              />
            </FxButton>
          </div>
          <div className="flex justify-start items-end font-weight_450 gap-0.5 text-read_25 mt-5">
            <span>3.75</span>
            <span className=" text-text-color_2">/</span>
            <span className=" text-text-color_2">4.00</span>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-text-color_3 text-workspace_3">
                Compared to last semister
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 h-[300px] pb-3">
        <GradeChatWithDate/>
      </div>
    </div>
  );
};
