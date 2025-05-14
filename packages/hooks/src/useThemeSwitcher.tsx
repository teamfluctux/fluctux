import { useTheme } from "next-themes";
import React, { ReactNode, useEffect, useState } from "react";
import { Monitor, Moon, SunMedium } from "lucide-react";

export type ThemeModeIconsType = {
  icon: ReactNode;
};


const THEME_ICONS: ThemeModeIconsType[]  = [
  {
    icon: <SunMedium size={18} />,
  },
  {
    icon: <Moon size={18} />,
  },
  {
    icon: <Monitor size={18} />,
  },
];


export const useThemeSwitcher = (): any => {
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

  const ThemeSwitcher: React.FC = () => (
    <div className="fx-flex-center w-fit rounded-[50px] border border-border-color_1 p-[2px]">
      <ul className="fx-flex-center w-fit relative">
        {THEME_ICONS.map((item, i) => {
          return (
            <li
              onClick={() => handleChangeAppearanceMode(i)}
              key={i}
              className={`cursor-pointer rounded-[50%] flex-shrink-0 w-[30px] h-[30px]  fx-flex-center hover:bg-background-color_2 ${activeIndex === i ? "bg-background-color_1 text-text-color_1 theme-color-mode-active": "text-text-icon_default"} `}
            >
              {item?.icon}
            </li>
          );
        })}
        {/* <span
                    className="active-theme-mode"
                    style={{
                        transform: `translateX(${activeIndex * 100}%)`,
                    }}
                ></span> */}
      </ul>
    </div>
  );
  return {
    ThemeSwitcher,
    theme,
    resolvedTheme,
    setTheme,
  };
};
