"use client";
import { Button, ButtonGroup } from "@fluctux/ui";
import { useRouter, useSearchParams } from "next/navigation";

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

export const OverViewMetricsHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const period = searchParams.get("period");
  return (
    <div className="w-full h-fit mb-4 flex justify-between items-center sticky top-0 left-0">
      <ButtonGroup className="*:text-workspace_2">
        {OVER_VIEW_PERIOD_TIMESTAMP.map((item, i) => {
          return (
            <Button
              variant={"secondary"}
              className={`text-text-color_2 bg-background-color_850C hover:bg-background-color_800C  ${period === item.value && "text-surface-fg-2 bg-surface-bg-active hover:bg-surface-bg-active"}`}
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
  );
};
