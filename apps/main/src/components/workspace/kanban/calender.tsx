"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Button, buttonVariants, cn, Popover, PopoverContent, PopoverTrigger } from "@fluctux/ui";
import { FaCircle } from "react-icons/fa6";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  datesWithData = ["2025-10-10", "2025-10-18", "2025-10-25", "2025-11-05"],
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  datesWithData?: string[];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="w-fit h-fit border rounded overflow-hidden bg-background-color_900C border-border-color_1">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          " group/calendar  overflow-hidden p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
          String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
          className
        )}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString("default", { month: "short" }),
          ...formatters,
        }}
        classNames={{
          root: cn("w-fit", defaultClassNames.root),
          months: cn(
            "relative flex flex-col gap-4 md:flex-row ",
            defaultClassNames.months
          ),
          month: cn("flex w-full flex-col gap-4 ", defaultClassNames.month),
          nav: cn(
            "absolute inset-x-0 top-0 flex w-full text-text-color_4  items-center justify-between gap-1",
            defaultClassNames.nav
          ),
          button_previous: cn(
            buttonVariants({ variant: buttonVariant }),
            "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50 hover:bg-background-color_800C ",
            defaultClassNames.button_previous
          ),
          button_next: cn(
            buttonVariants({ variant: buttonVariant }),
            "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50 hover:bg-background-color_800C ",
            defaultClassNames.button_next
          ),
          month_caption: cn(
            "flex h-[--cell-size] w-full items-center text-text-color_4 justify-center px-[--cell-size]",
            defaultClassNames.month_caption
          ),
          dropdowns: cn(
            "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
            defaultClassNames.dropdowns
          ),
          dropdown_root: cn(
            "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative border",
            defaultClassNames.dropdown_root
          ),
          dropdown: cn(
            "absolute inset-0 opacity-0",
            defaultClassNames.dropdown
          ),
          caption_label: cn(
            "select-none font-medium",
            captionLayout === "label"
              ? "text-sm"
              : "[&>svg]:text-red-600 flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
            defaultClassNames.caption_label
          ),
          table: "w-full",
          weekdays: cn("flex", defaultClassNames.weekdays),
          weekday: cn(
            "text-text-color_2 flex-1 select-none rounded-md text-[0.8rem] font-normal",
            defaultClassNames.weekday
          ),
          week: cn("mt-2 flex w-full text-red-600 ", defaultClassNames.week),
          week_number_header: cn(
            "w-[--cell-size] select-none text-red-600",
            defaultClassNames.week_number_header
          ),
          week_number: cn(
            "text-red-600 select-none text-[0.8rem]",
            defaultClassNames.week_number
          ),
          day: cn(
            "relative text-text-color_1 h-full w-full select-none p-0 text-center hover:bg-background-color_800C ring-0 outline-none !rounded-[50px] [data-selected=true]_button]:!bg-background-indigo_primary",
            defaultClassNames.day
          ),
          range_start: cn(
            "bg-red-600 rounded-l-md",
            defaultClassNames.range_start
          ),
          range_middle: cn("rounded-none", defaultClassNames.range_middle),
          range_end: cn(
            "bg-blue-600 rounded-r-md",
            defaultClassNames.range_end
          ),
          today: cn(
            "!bg-surface-indigo-bg rounded-[50px] border !border-surface-indigo-border !text-surface-indigo-fg",
            defaultClassNames.today
          ),
          outside: cn(
            "!text-text-color_3 aria-selected:text-muted-foreground",
            defaultClassNames.outside
          ),
          disabled: cn(
            "text-muted-foreground opacity-50",
            defaultClassNames.disabled
          ),
          hidden: cn("invisible", defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            );
          },
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <ChevronLeftIcon
                  className={cn("size-4", className)}
                  {...props}
                />
              );
            }

            if (orientation === "right") {
              return (
                <ChevronRightIcon
                  className={cn("size-4", className)}
                  {...props}
                />
              );
            }

            return (
              <ChevronDownIcon className={cn("size-4", className)} {...props} />
            );
          },
          DayButton: (props) => (
            <CalendarDayButton {...props} datesWithData={datesWithData} />
          ),
          WeekNumber: ({ children, ...props }) => {
            return (
              <td {...props}>
                <div className="flex size-[--cell-size] items-center justify-center text-center">
                  {children}
                </div>
              </td>
            );
          },
          ...components,
        }}
        {...props}
      />
    </div>
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  datesWithData,
  ...props
}: React.ComponentProps<typeof DayButton> & { datesWithData: string[] }) {
  const defaultClassNames = getDefaultClassNames();

  // Memoize the set of "YYYY-MM-DD" strings
  const targetDates = React.useMemo(() => {
    return datesWithData.map((d) => new Date(d));
  }, [datesWithData]);

  // Normalize current day
  const isMatched = targetDates.some(
    (target) =>
      day.date.getFullYear() === target.getFullYear() &&
      day.date.getMonth() === target.getMonth() &&
      day.date.getDate() === target.getDate()
  );

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <div className="relative ">
      {
        isMatched &&
         <Popover>
      <PopoverTrigger asChild>
      <FaCircle size={8} className="absolute top-0 right-0 text-text-indigo-color_1 hover:scale-125 cursor-pointer" />

      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] min-h-[200px] h-full bg-background-color_900C rounded border border-border-color_1 z-[9991]">
          
      </PopoverContent>
      </Popover>
      }
        <Button
          ref={ref}
          variant="ghost"
          size="icon"
          data-day={day.date.toLocaleDateString()}
          data-selected-single={
            modifiers.selected &&
            !modifiers.range_start &&
            !modifiers.range_end &&
            !modifiers.range_middle
          }
          data-range-start={modifiers.range_start}
          data-range-end={modifiers.range_end}
          data-range-middle={modifiers.range_middle}
          className={cn(
            "data-[selected-single=true]:bg-background-indigo_primary  data-[selected-single=true]:text-text-color_default_white data-[range-middle=true]:bg-blue-500 data-[range-middle=true]:text-red-600 data-[range-start=true]:bg-red-600 data-[range-start=true]:text-pink-600 flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-1 [&>span]:text-xs [&>span]:opacity-70 !rounded-[50px] ",
            defaultClassNames.day,
            isMatched && "bg-surface-indigo-bg-active",
            className
          )}
          {...props}
        />
    </div>
  );
}

export { Calendar, CalendarDayButton };
