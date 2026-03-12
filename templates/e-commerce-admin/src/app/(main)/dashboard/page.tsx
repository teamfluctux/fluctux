"use client";
import { Button, ButtonGroup } from "@fluctux/ui";
import { ArrowUp, PlusIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

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

// type DashboardOverviewDatatype = {
//   [key: string]: {
//     key: string;
//     currentValue: number;
//     previousValue?: number | null;
//     newValue?: number | null;
//   };
// };

// const DASHBOARD_OVERVIEW_VALUES: DashboardOverviewDatatype = {
//   "Total Sales": {
//     key: "total-sales",
//     currentValue: 47500000,
//     previousValue: 44811000,
//   },
//   "Total Orders": {
//     key: "total-orders",
//     currentValue: 3490,
//     previousValue: 3201,
//   },
//   "Low Stock Items": {
//     key: "low-stock-items",
//     currentValue: 24,
//     previousValue: 18,
//   },
//   "Active Products": {
//     key: "active-products",
//     currentValue: 1284,
//     previousValue: 1200,
//   },
//   "Net Revenue": {
//     key: "net-revenue",
//     currentValue: 38200000,
//     previousValue: 36100000,
//   },
//   "Discount Amount": {
//     key: "discount-amount",
//     currentValue: 4300000,
//     previousValue: 3900000,
//   },
//   "Taxes Collected": {
//     key: "taxes-collected",
//     currentValue: 2100000,
//     previousValue: 1980000,
//   },
//   "Refund Amount": {
//     key: "refund-amount",
//     currentValue: 870000,
//     previousValue: 920000,
//   },
// };

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
                className={` text-text-color_2 bg-background-color_850C hover:bg-background-color_800C  ${period === item.value && "text-surface-fg-2 bg-surface-bg-active hover:bg-surface-bg-active"}`}
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
      <div className="border-y border-border-color_1">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-[120px] w-full">
        
          <div className="w-full h-full border-r border-border-color_1 p-3 relative">
            <div className="flex justify-start items-center gap-1.5 ">
              <div className="w-[5px] h-[16px] bg-blue-600 rounded-full "></div>
              <span className="text-text-color_2 text-workspace_2 font-medium">
                Total Sales
              </span>
            </div>

            <div className="flex justify-start items-center gap-1.5 mt-2">
              <span className="text-read_20 font-medium">$ 47.5M</span>{" "}
              <span className="text-rdx-green-fg flex justify-center items-center gap-0">
                <PlusIcon size={16} className="text-rdx-green-fg" />
                6%
              </span>
            </div>
            <div className="h-[35px] border-t absolute bottom-0 left-0 w-full flex justify-start items-center px-3 border-border-color_1">
              <div className="w-[20px] h-[20px] rounded-full shrink-0 bg-surface-green-bg-active flex justify-center items-center">
                <ArrowUp size={14} className="text-rdx-green-fg" />
              </div>
              <div className="flex justify-start items-center gap-1 text-workspace_2 font-medium ml-1">
                <span className="text-rdx-green-fg">349</span>
                <span className="text-text-color_2">•</span>
                <span className="text-text-color_2">vs last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
