import type { AppearanceThemeColorValueType } from "@fluctux/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@fluctux/ui";
import { Check } from "lucide-react";

type AppearanceThemeColortype = {
  bgColorClass: string;
  value: AppearanceThemeColorValueType;
  label: string;
};

export const APPEARANCE_THEME_COLOR: AppearanceThemeColortype[] = [
  {
    label: "Red",
    value: "red",
    bgColorClass: "bg-red-600 ring-red-600",
  },
  {
    label: "Orange",
    value: "orange",
    bgColorClass: "bg-orange-500 ring-orange-500",
  },
  {
    label: "Amber",
    value: "amber",
    bgColorClass: "bg-amber-500 ring-amber-500",
  },
  {
    label: "Yellow",
    value: "yellow",
    bgColorClass: "bg-yellow-400 ring-yellow-400",
  },
  {
    label: "Lime",
    value: "lime",
    bgColorClass: "bg-lime-500 ring-lime-500",
  },
  {
    label: "Green",
    value: "green",
    bgColorClass: "bg-green-600 ring-green-600",
  },
  {
    label: "Emerald",
    value: "emerald",
    bgColorClass: "bg-emerald-500 ring-emerald-500",
  },
  {
    label: "Teal",
    value: "teal",
    bgColorClass: "bg-teal-500 ring-teal-500",
  },
  {
    label: "Cyan",
    value: "cyan",
    bgColorClass: "bg-cyan-500 ring-cyan-500",
  },
  {
    label: "Sky",
    value: "sky",
    bgColorClass: "bg-sky-500 ring-sky-500",
  },
  {
    label: "Blue",
    value: "blue",
    bgColorClass: "bg-blue-600 ring-blue-600",
  },
  {
    label: "Indigo",
    value: "indigo",
    bgColorClass: "bg-indigo-600 ring-indigo-600",
  },
  {
    label: "Violet",
    value: "violet",
    bgColorClass: "bg-violet-600 ring-violet-600",
  },
  {
    label: "Purple",
    value: "purple",
    bgColorClass: "bg-purple-600 ring-purple-600",
  },
  {
    label: "Fuchsia",
    value: "fuchsia",
    bgColorClass: "bg-fuchsia-600 ring-fuchsia-600",
  },
  {
    label: "Pink",
    value: "pink",
    bgColorClass: "bg-pink-500 ring-pink-500",
  },
  {
    label: "Rose",
    value: "rose",
    bgColorClass: "bg-rose-500 ring-rose-500",
  },
];

export const AppearanceSettings = () => {
  return (
    <div className="w-full">
      <h2 className="text-read_16 font-medium ">Theme Colors</h2>
      <p className="text-workspace_2 text-text-color_2 font-medium mt-1">
        Personalize your dashboard using your brand palette
      </p>

      <div className="flex justify-start items-center gap-2 w-full mt-5">
        {APPEARANCE_THEME_COLOR.map((item, i) => {
          return (
            <Tooltip key={item.value}>
              <TooltipTrigger>
                <label
                  className={`w-[30px] h-[30px] rounded-full hover:scale-[1.1] cursor-pointer border border-border-color_2 transition-all has-[:checked]:ring-2 has-[:checked]:ring-offset-2 flex justify-center items-center  ring-offset-background-color_950C ${item.bgColorClass}`}
                >
                  <input
                    type="radio"
                    name="theme-color"
                    value={item.value}
                    className="hidden peer"
                  />
                  <Check
                    size={16}
                    className="hidden peer-checked:block text-text-color_default_white"
                  />
                </label>
              </TooltipTrigger>
              <TooltipContent >
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};
