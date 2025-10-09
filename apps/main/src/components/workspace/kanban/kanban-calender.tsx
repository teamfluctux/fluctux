"use client";

import React, { useState } from "react";
import { Calendar } from "./calender";
import { FxInput, Label } from "@fluctux/ui";
import TimePicker from "./TimePicker";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export const KanbanCalender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<Date | undefined>(date);
  const [value, setValue] = useState(formatDate(date));

  return (
    <div className="w-fit h-fit p-1 rounded-rounded_10C border border-border-color_1 bg-background-color_925C">
      <div className="px-2 py-3 flex justify-between items-center">
        <div>

        <Label className="mb-1 ml-2">Define you Date</Label>
        <FxInput
          id="date"
          value={value}
          className="px-2 py-1"
          placeholder="June 01, 2025"
          variant="outline"
          label="Define your date"
          onChange={(e: any) => {
            const date = new Date(e.target.value);
            setValue(e.target.value);
            if (isValidDate(date)) {
              setDate(date);
              setMonth(date);
            }
          }}
          />
          </div>

      </div>
      <Calendar
        mode="single"
        month={month}
        defaultMonth={date}
        numberOfMonths={2}
        onMonthChange={setMonth}
        selected={date}
        onSelect={(date) => {
          setDate(date);
          setValue(formatDate(date));
        }}
      />
    </div>
  );
};
