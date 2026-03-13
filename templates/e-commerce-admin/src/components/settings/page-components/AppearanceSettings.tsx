"use client";
import type { AppearanceThemeColorValueType } from "@fluctux/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@fluctux/ui";
import { Check } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type AppearanceThemeColortype = {
  bgColorClass: string;
  value: AppearanceThemeColorValueType;
  label: string;
};

type InterfaceThemeValueType = "dark" | "light" | "system" | "accent";

type InterfaceThemeType = {
  image?: string;
  value: InterfaceThemeValueType;
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

export const INTERFACE_THEME: InterfaceThemeType[] = [
  {
    value: "system",
    label: "System Preference",
  },
  {
    value: "light",
    label: "Light",
  },
  {
    value: "dark",
    label: "Dark",
  },
  {
    value: "accent",
    label: "Sync with Accent Color",
  },
];

export const AppearanceSettings = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [current, setCurrent] = useState<string>("");

  const getInitialValues = () => {
    if (!theme) return { interface_theme: "dark", color: "indigo" };
    const [interface_theme, color] = theme.split("-");
    return {
      interface_theme: (interface_theme ?? "dark") as InterfaceThemeValueType,
      color: (color ?? "indigo") as AppearanceThemeColorValueType,
    };
  };

  const [accentColor, setAccentColor] = useState<AppearanceThemeColorValueType>(
    () => getInitialValues().color as AppearanceThemeColorValueType
  );
  const [interfaceTheme, setInterfaceTheme] = useState<InterfaceThemeValueType>(
    () => getInitialValues().interface_theme as InterfaceThemeValueType
  );

  useEffect(() => {
    const newTheme = (() => {
      if (interfaceTheme === "system") return "system";
      if (interfaceTheme === "accent") return `accent-${accentColor}`;
      if (interfaceTheme === "light")
        return accentColor === "indigo" ? "light" : `light-${accentColor}`;
      if (interfaceTheme === "dark")
        return accentColor === "indigo" ? "dark" : `dark-${accentColor}`;
      return "dark";
    })();

    if (newTheme !== theme) {
      document.documentElement.classList.remove(theme as string);
      // only setTheme if actually changed
      setTheme(newTheme);
    }
    setCurrent(newTheme);
  }, [interfaceTheme, accentColor]);

  return (
    <div className="w-full">
      <h3 className="text-read_16 font-medium ">Theme Colors</h3>
      <p className="text-workspace_2 text-text-color_2 font-medium mt-1">
        Personalize your dashboard using your brand palette
      </p>

      <div className="flex justify-start items-center gap-2 w-full mt-5">
        {APPEARANCE_THEME_COLOR.map((item, i) => {
          return (
            <Tooltip key={item.value}>
              <TooltipTrigger>
                <label
                  className={`w-[30px] h-[30px] rounded-full hover:scale-[1.1] cursor-pointer transition-all has-[:checked]:ring-2 has-[:checked]:ring-offset-2 flex justify-center items-center  ring-offset-background-color_950C ${item.bgColorClass}`}
                >
                  <input
                    type="radio"
                    name="theme-color"
                    value={item.value}
                    checked={item.value === accentColor}
                    onChange={(e) =>
                      setAccentColor(
                        e.target.value as AppearanceThemeColorValueType
                      )
                    }
                    className="hidden peer"
                  />
                  <Check
                    size={16}
                    className="hidden peer-checked:block text-text-color_default_white"
                  />
                </label>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      <h3 className="text-read_16 font-medium mt-10 ">Interface Theme</h3>
      <p className="text-workspace_2 text-text-color_2 font-medium mt-1">
        Select or customize your UI theme {current}
      </p>

      <div className="grid w-full gap-3 mt-5 pb-20 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-[175px]">
        {INTERFACE_THEME.map((item, i) => {
          return (
            <label
              key={item.value}
              className={` shrink-0 w-full h-full rounded-lg hover:ring-1 hover:ring-surface-border cursor-pointer border border-border-color_2 transition-all has-[:checked]:ring-2 has-[:checked]:ring-offset-2 has-[:checked]:ring-surface-border-active text-text-color_2 has-[:checked]:text-surface-fg!  overflow-hidden ring-offset-background-color_950C`}
            >
              <input
                type="radio"
                name="interface-theme"
                checked={item.value === interfaceTheme}
                value={item.value}
                onChange={(e) =>
                  setInterfaceTheme(e.target.value as InterfaceThemeValueType)
                }
                className="hidden peer"
              />
              <Image
                src={""}
                width={200}
                height={100}
                className="object-cover w-full h-[calc(100%-30px)] border-b object-center border-border-color_1"
                alt={item.label}
              />
              <div className="w-full h-[30px] bg-background-color_925C flex justify-start items-center px-3">
                <p className="text-workspace_2 font-medium  ">{item.label}</p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};
