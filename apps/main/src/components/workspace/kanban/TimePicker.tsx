// this component is currently in development
"use client";
import React from "react";
import {motion, useMotionValue} from "framer-motion"
import { FxButton } from "@fluctux/ui";

type TimeValue = { hours: number; minutes: number; ampm?: "AM" | "PM" };
type TimePickerProps = {
  value?: TimeValue;
  onChange?: (t: TimeValue) => void;
  hour24?: boolean;
  minuteStep?: number;
  className?: string;
  visibleItems?: number;
};

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
function format2(n: number) {
  return n.toString().padStart(2, "0");
}

// Custom hook: scroll one step per wheel event
function useWheelIndex(
  length: number,
  selected: number,
  setSelected: (v: number) => void
) {
  return React.useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const dir = e.deltaY > 0 ? 1 : -1;
      const next = clamp(selected + dir, 0, length - 1);
      if (next !== selected) setSelected(next);
    },
    [selected, length, setSelected]
  );
}

// Column component
function Column<T>({
  items,
  index,
  onWheel,
  ariaLabel,
  renderItem,
  itemHeight = 36,
  visible = 5,
  width = 64,
  setIndex,
}: {
  items: T[];
  index: number;
  onWheel: (e: React.WheelEvent) => void;
  ariaLabel?: string;
  renderItem?: (it: T, i: number) => React.ReactNode;
  itemHeight?: number;
  visible?: number;
  width?: number;
  setIndex: (v: number) => void;
}) {
  const containerHeight = visible * itemHeight;
  const centerOffset = Math.floor(visible / 2);

  const handleDragEnd = (_: any, info: { offset: { y: number } }) => {
    const deltaIndex = Math.round(-info.offset.y / itemHeight);
    let nextIndex = index + deltaIndex;
    nextIndex = clamp(nextIndex, 0, items.length - 1);
    setIndex(nextIndex);
  };

  return (
    <div
      role="listbox"
      aria-label={ariaLabel}
      tabIndex={0}
      onWheel={onWheel}
      className="relative select-none overflow-hidden"
      style={{ height: containerHeight, width }}
    >
      {/* highlight box */}
      <div
        aria-hidden
        className="absolute left-0 right-0 mx-auto border border-border-color_1 bg-background-color_800C rounded-tiny pointer-events-none"
        style={{
          top: (containerHeight - itemHeight) / 2,
          height: itemHeight,
        }}
      />
      <motion.div
        drag="y"
        dragConstraints={{
          top: -((items.length - 1 - centerOffset) * itemHeight),
          bottom: centerOffset * itemHeight,
        }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={{ y: -index * itemHeight + centerOffset * itemHeight }}
       transition={{ type: "tween", duration: 0.15 }}
    
      >
        {items.map((it, i) => {
          const isSelected = i === index;
          return (
            <div
              key={i}
              style={{ height: itemHeight }}
              onClick={() => setIndex(i)}
              className={`flex items-center justify-center transition-all text-workspace_2 ${
                isSelected ? "font-medium" : "text-text-color_3"
              }`}
            >
              {renderItem ? renderItem(it, i) : String(it)}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}


// Main TimePicker
export default function TimePicker({
  value,
  onChange,
  hour24 = true,
  minuteStep = 1,
  className,
  visibleItems = 5,
}: TimePickerProps) {
  // arrays
  const hoursArr = React.useMemo(
    () =>
      hour24
        ? Array.from({ length: 24 }, (_, i) => i)
        : Array.from({ length: 12 }, (_, i) => i + 1),
    [hour24]
  );
  const minutesArr = React.useMemo(() => {
    const list: number[] = [];
    for (let m = 0; m < 60; m += Math.max(1, minuteStep)) list.push(m);
    return list;
  }, [minuteStep]);

  // initial value
  const initial = React.useMemo(() => {
    const now = new Date();
    const h = value?.hours ?? now.getHours();
    const m = value?.minutes ?? now.getMinutes();
    const ampm = !hour24 ? (h >= 12 ? "PM" : "AM") : undefined;
    const displayHour = !hour24 ? (h % 12 === 0 ? 12 : h % 12) : h;
    return { hours: displayHour, minutes: m, ampm };
  }, [value, hour24]);

  // helper: nearest minute index
  const findNearestMinuteIndex = React.useCallback(
    (m: number) => {
      let bestIdx = 0;
      let bestDiff = Infinity;
      minutesArr.forEach((v, i) => {
        const d = Math.abs(v - m);
        if (d < bestDiff) {
          bestDiff = d;
          bestIdx = i;
        }
      });
      return bestIdx;
    },
    [minutesArr]
  );

  const initialHourIndex = React.useMemo(
    () => hoursArr.indexOf(initial.hours),
    [hoursArr, initial.hours]
  );
  const initialMinuteIndex = React.useMemo(
    () => findNearestMinuteIndex(initial.minutes),
    [findNearestMinuteIndex, initial.minutes]
  );

  const [hourIndex, setHourIndex] = React.useState<number>(
    initialHourIndex >= 0 ? initialHourIndex : 0
  );
  const [minuteIndex, setMinuteIndex] = React.useState<number>(
    initialMinuteIndex >= 0 ? initialMinuteIndex : 0
  );
  const [selectedAMPM, setSelectedAMPM] = React.useState<
    "AM" | "PM" | undefined
  >(initial.ampm as "AM" | "PM");

  // sync external value
  React.useEffect(() => {
    if (!value) return;
    const h = value.hours;
    const m = value.minutes;
    if (hour24) {
      const idx = hoursArr.indexOf(h);
      if (idx >= 0) setHourIndex(idx);
    } else {
      setSelectedAMPM(h >= 12 ? "PM" : "AM");
      const displayHour = h % 12 === 0 ? 12 : h % 12;
      const idx = hoursArr.indexOf(displayHour);
      if (idx >= 0) setHourIndex(idx);
    }
    setMinuteIndex(findNearestMinuteIndex(m));
  }, [value, hour24, hoursArr, findNearestMinuteIndex]);

  // notify parent
  const get24Hour = React.useCallback(
    (dispHour: number, ampm?: "AM" | "PM") => {
      if (hour24) return dispHour;
      if (ampm === "AM") return dispHour === 12 ? 0 : dispHour;
      return dispHour === 12 ? 12 : dispHour + 12;
    },
    [hour24]
  );

  React.useEffect(() => {
    if (!onChange) return;
    const hourVal = hoursArr[hourIndex];
    const minuteVal = minutesArr[minuteIndex];
    const h24 = get24Hour(hourVal, selectedAMPM);
    onChange({ hours: h24, minutes: minuteVal, ampm: selectedAMPM });
  }, [
    hourIndex,
    minuteIndex,
    selectedAMPM,
    onChange,
    hoursArr,
    minutesArr,
    get24Hour,
  ]);

  // wheel handlers
  const hourOnWheel = useWheelIndex(hoursArr.length, hourIndex, setHourIndex);
  const minuteOnWheel = useWheelIndex(
    minutesArr.length,
    minuteIndex,
    setMinuteIndex
  );

  const onAMPMClick = (v: "AM" | "PM") => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedAMPM(v);
  };

  return (
    <div
      className={` border border-border-color_1 rounded-rounded_10C p-2 bg-background-color_900C ${className ?? ""}`}
    >

        <div className="flex items-center gap-3">

      <Column
        items={hoursArr}
        index={hourIndex}
        onWheel={hourOnWheel}
        setIndex={setHourIndex}
        ariaLabel="Hours"
        renderItem={(h) => (
          <div style={{ width: "100%", textAlign: "center" }}>{format2(h)}</div>
        )}
        visible={visibleItems}
      />

      <div className="text-workspace_2 font-medium">:</div>

      <Column
        items={minutesArr}
        index={minuteIndex}
        onWheel={minuteOnWheel}
        setIndex={setMinuteIndex}
        ariaLabel="Minutes"
        renderItem={(m) => (
          <div style={{ width: "100%", textAlign: "center" }}>{format2(m)}</div>
        )}
        visible={visibleItems}
      />

      {!hour24 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            marginLeft: 8,
          }}
        >
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={onAMPMClick("AM")}
            aria-pressed={selectedAMPM === "AM"}
            className={`px-2 py-0 rounded-tiny text-workspace_3 transition-colors font-medium border border-transparent ${selectedAMPM === "AM" ? "bg-surface-indigo-bg-active text-surface-indigo-fg  border-surface-indigo-border-active" : "text-gray-400"}`}
          >
            AM
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={onAMPMClick("PM")}
            aria-pressed={selectedAMPM === "PM"}
            className={`px-2 py-0 rounded-tiny text-workspace_3 transition-colors font-medium border border-transparent ${selectedAMPM === "PM" ? "bg-surface-indigo-bg-active text-surface-indigo-fg  border-surface-indigo-border-active" : "text-gray-400"}`}
          >
            PM
          </button>
        </div>
      )}

      </div>
      <div className="mt-2">
        <FxButton className="w-full text-workspace_2 !py-1.5" size="md" radius="tiny" >
            Set Time
        </FxButton>
      </div>
    </div>
  );
}
