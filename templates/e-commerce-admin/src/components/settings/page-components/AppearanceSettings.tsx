import type { AppearanceThemeColorValueType } from "@fluctux/types";

type AppearanceThemeColortype = {
  bgColorClass: string;
  value: AppearanceThemeColorValueType;
  label: string;
};

export const APPEARANCE_THEME_COLOR: AppearanceThemeColortype[] = [
  { label: "Dark",    value: "dark",    bgColorClass: "bg-zinc-950 hover:inset-ring-zinc-950" },
  { label: "White",   value: "white",   bgColorClass: "bg-zinc-50 hover:inset-ring-zinc-50" },
  { label: "Red",     value: "red",     bgColorClass: "bg-red-600 hover:inset-ring-red-600" },
  { label: "Orange",  value: "orange",  bgColorClass: "bg-orange-500 hover:inset-ring-orange-500" },
  { label: "Amber",   value: "amber",   bgColorClass: "bg-amber-500 hover:inset-ring-amber-500" },
  { label: "Yellow",  value: "yellow",  bgColorClass: "bg-yellow-400 hover:inset-ring-yellow-400" },
  { label: "Lime",    value: "lime",    bgColorClass: "bg-lime-500 hover:inset-ring-lime-500" },
  { label: "Green",   value: "green",   bgColorClass: "bg-green-600 hover:inset-ring-green-600" },
  { label: "Emerald", value: "emerald", bgColorClass: "bg-emerald-500 hover:inset-ring-emerald-500" },
  { label: "Teal",    value: "teal",    bgColorClass: "bg-teal-500 hover:inset-ring-teal-500" },
  { label: "Cyan",    value: "cyan",    bgColorClass: "bg-cyan-500 hover:inset-ring-cyan-500" },
  { label: "Sky",     value: "sky",     bgColorClass: "bg-sky-500 hover:inset-ring-sky-500" },
  { label: "Blue",    value: "blue",    bgColorClass: "bg-blue-600 hover:inset-ring-blue-600" },
  { label: "Indigo",  value: "indigo",  bgColorClass: "bg-indigo-600 hover:inset-ring-indigo-600" },
  { label: "Violet",  value: "violet",  bgColorClass: "bg-violet-600 hover:inset-ring-violet-600" },
  { label: "Purple",  value: "purple",  bgColorClass: "bg-purple-600 hover:inset-ring-purple-600" },
  { label: "Fuchsia", value: "fuchsia", bgColorClass: "bg-fuchsia-600 hover:inset-ring-fuchsia-600" },
  { label: "Pink",    value: "pink",    bgColorClass: "bg-pink-500 hover:inset-ring-pink-500" },
  { label: "Rose",    value: "rose",    bgColorClass: "bg-rose-500 hover:inset-ring-rose-500" },
];

export const AppearanceSettings = () => {
  return (
    <div className="w-full">
      <h2 className="text-read_16 font-medium ">Theme Colors</h2>
      <p className="text-workspace_2 text-text-color_2 font-medium mt-1">
        Personalize your dashboard using your brand palette
      </p>

      <div className="flex justify-start items-center gap-2 w-full mt-5">
        {
          APPEARANCE_THEME_COLOR.map((item, i) => {
            return <div key={item.value} className={`w-[30px] h-[30px] rounded-full inset-ring-2 border-1 border-border-color_2 ${item.bgColorClass}`}>
                
            </div>

          })
        }
      </div>
    </div>
  );
};
