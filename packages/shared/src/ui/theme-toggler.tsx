"use client";
import { LucideIcon, Monitor, Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const THEME_ICONS: { icon: LucideIcon }[] = [
  {
    icon: SunMedium,
  },
  {
    icon: Moon,
  },
  {
    icon: Monitor,
  },
];

export const ThemeToggler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (resolvedTheme) {
      if (theme === "light") {
        setActiveIndex(0);
      } else if (theme === "dark") {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    }
  }, [theme, resolvedTheme]);

  const handleChangeAppearanceMode = (index: number) => {
    if (index === 0) {
      setTheme("light");
    } else if (index === 1) {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };
  return (
    <div className="fx-flex-center w-fit rounded-[50px] border border-border-color_1 p-[2px]">
      <ul className="fx-flex-center w-fit relative">
        {THEME_ICONS.map((item, i) => {
          const Icon = item.icon;
          return (
            <li
              onClick={() => handleChangeAppearanceMode(i)}
              key={i}
              className={`z-[1] cursor-pointer group rounded-[50%] flex-shrink-0 w-[30px] h-[30px]  fx-flex-center   ${activeIndex === i ? " text-text-color_1" : "text-text-icon_default"} `}
            >
              <Icon
                size={18}
                className={`group-hover:fill-text-color_1 ${activeIndex === i && "fill-text-color_1"}`}
              />
            </li>
          );
        })}
        <span
          className="bg-background-color_800C pointer-events-none border border-border-color_2 absolute left-0 rounded-full w-[30px] h-[30px] transition-all"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        ></span>
      </ul>
    </div>
  );
};
