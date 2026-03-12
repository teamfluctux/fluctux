"use client";
import { Button, ButtonGroup } from "@fluctux/ui";
import { HelpCircleIcon, Info } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef } from "react";

const OVER_VIEW_PERIOD_TIMESTAMP: { label: string; value: string }[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Week",
    value: "week",
  },
  {
    label: "Month",
    value: "month",
  },
  {
    label: "Years",
    value: "years",
  },
];



const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const period = searchParams.get("period");

  return (
    <div>
      <div className="w-full h-[50px] flex justify-between items-center  px-2 sticky top-0 left-0">
        <ButtonGroup className="*:text-workspace_2">
          {OVER_VIEW_PERIOD_TIMESTAMP.map((item, i) => {
            return (
              <Button
                variant={"secondary"}
                className={` text-text-color_2 bg-background-color_850C hover:bg-background-color_800C  ${period === item.value && "text-rdx-indigo-fg bg-surface-indigo-bg-active hover:bg-surface-indigo-bg-active"}`}
                onClick={() => {
                  router.replace(`?period=${item.value}`);
                }}
                key={i}
              >
                {item.label}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
      <div className="border border-border-color_1">
        <div className="grid grid-cols-5 w-full h-[100px]">
          <div className="w-full h-full border-r border-border-color_1 relative p-3">
            <div className="flex justify-start items-center gap-1.5">
            <div className="w-[5px] h-[16px] bg-blue-600 rounded-full "></div>
              <span className="text-text-color_2 text-workspace_2 font-medium">Followers</span>
              <Info size={16} className="text-text-svg_default ml-2"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
