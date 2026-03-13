import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import type { PopoverContentProps } from "@radix-ui/react-popover";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type PopoverItemStatusType = "DANGER" | "WARNING" | "SAFE" | "NEUTRAL";
type PopoverItemStatusEffectType = "SURFACE" | "SOFT";

export type PopoverMenuDataType = {
  [key: string]: {
    label?: string;
    data?: {
      icon?: LucideIcon;
      iconClassname?: string;
      label: string;
      value?: string;
      status?: PopoverItemStatusType;
      showStatusHoverEffect?: boolean;
      effectType?: PopoverItemStatusEffectType;
      slug?: string;
      onItemClick?: (value: string) => void;
    }[];
  };
};

type FxPopoverPropsType = {
  InteractChild: React.ReactNode;
  items: PopoverMenuDataType;
} & PopoverContentProps;

const itemHoverStatusText: { [key in PopoverItemStatusType]: string } = {
  DANGER: "hover:text-rdx-red-fg",
  SAFE: "hover:text-rdx-green-fg",
  NEUTRAL: "hover:text-text-color_1",
  WARNING: "hover:text-rdx-yellow-fg",
};

const getTextColor: { [key in PopoverItemStatusType]: string } = {
  DANGER: "text-rdx-red-fg",
  SAFE: "text-rdx-green-fg",
  NEUTRAL: "text-text-color_4",
  WARNING: "text-rdx-yellow-fg",
};

const itemStatusHoverEffect: {
  [key in PopoverItemStatusEffectType]: {
    [key in PopoverItemStatusType]: string;
  };
} = {
  SOFT: {
    DANGER: "hover:bg-soft-red-bg-active hover:text-rdx-red-fg",
    NEUTRAL: "hover:bg-background-color_750C",
    SAFE: "hover:bg-soft-green-bg-active hover:text-rdx-green-fg",
    WARNING: "hover:bg-soft-yellow-bg-active hover:text-rdx-yellow-fg",
  },
  SURFACE: {
    DANGER:
      "hover:bg-surface-red-bg-active hover:inset-ring hover:inset-ring-surface-red-border-active hover:text-rdx-red-fg",
    NEUTRAL: "hover:bg-background-color_750C",
    SAFE: "hover:bg-surface-green-bg-active hover:inset-ring hover:inset-ring-surface-green-border-active hover:text-rdx-green-fg",
    WARNING:
      "hover:bg-surface-yellow-bg-active hover:inset-ring hover:inset-ring-surface-yellow-border-active hover:text-rdx-yellow-fg",
  },
};

export const FxPopover = ({
  InteractChild,
  items,
  ...props
}: FxPopoverPropsType) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{InteractChild}</PopoverTrigger>
      <PopoverContent
        {...props}
        className="bg-background-color_850C border border-border-color_2 rounded-xl"
      >
        <div className="w-[240px] ">
          <ul className="text-workspace_2 font-medium ">
            {Object.entries(items).map(([Key, data], i) => {
              return (
                <div
                  key={`${Key}-${i}`}
                  className={`p-1  border-border-color_2 ${i < Object.entries(items).length - 1 ? "border-b" : ""}`}
                >
                  {data && data.label ? (
                    <p className="text-workspace_3 font-medium text-text-color_3 px-2">
                      {data.label}
                    </p>
                  ) : null}

                  {data
                    ? data.data?.map((item, j) => {
                        const Icon = item.icon && item.icon;
                        const hoverStatusTextColor =
                          item.status && !item.showStatusHoverEffect
                            ? itemHoverStatusText[item.status]
                            : itemHoverStatusText.NEUTRAL;
                        const hoverItemStatusEffect =
                          item.showStatusHoverEffect &&
                          item.status &&
                          item.effectType
                            ? itemStatusHoverEffect[item.effectType][
                                item.status
                              ]
                            : itemStatusHoverEffect.SOFT.NEUTRAL;
                        const textColor = item.status
                          ? getTextColor[item.status]
                          : getTextColor.NEUTRAL;

                        return (
                          <>
                            {item.slug ? (
                              <Link
                                href={item.slug}
                                key={`${(item.value || item.slug)?.toString().toLowerCase()}-${j}`}
                              >
                                <li
                                  className={`flex justify-start items-center gap-1.5 h-8 cursor-default group transition-colors ${hoverItemStatusEffect} rounded-lg px-2 ${textColor} ${!item.showStatusHoverEffect ? hoverStatusTextColor : ""}`}
                                >
                                  <div
                                    className={`${item.status ? "text-inherit" : "text-text-svg_default"} transition-colors group-hover:text-inherit ${item.iconClassname}`}
                                  >
                                    {Icon && <Icon size={17} />}
                                  </div>
                                  <span>{item.label}</span>
                                </li>
                              </Link>
                            ) : (
                              <li
                                onClick={() =>
                                  item.onItemClick?.(item.value as string)
                                }
                                className={`flex justify-start items-center  h-8 gap-1.5 cursor-default group transition-colors ${hoverItemStatusEffect} rounded-lg px-2 ${textColor} ${!item.showStatusHoverEffect ? hoverStatusTextColor : ""}`}
                              >
                                <div
                                  className={` ${item.status ? "text-inherit" : "text-text-svg_default"} transition-colors group-hover:text-inherit ${item.iconClassname}`}
                                >
                                  {Icon && <Icon size={17} />}
                                </div>
                                <span>{item.label}</span>
                              </li>
                            )}
                          </>
                        );
                      })
                    : null}
                </div>
              );
            })}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};
