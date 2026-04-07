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
              variant={"outline"}
              size={"default"}
              className={`text-text-color_4 ${period === item.value && "text-surface-fg bg-surface-bg-active! ring-1 ring-surface-border rounded-md! hover:bg-surface-bg-active"}`}
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
