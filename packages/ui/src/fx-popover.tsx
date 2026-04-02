import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import type { PopoverContentProps } from "@radix-ui/react-popover";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

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
      isAsQueryParam?: boolean;
    }[];
  };
};

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
    NEUTRAL: "hover:bg-background-color_800C",
    SAFE: "hover:bg-soft-green-bg-active hover:text-rdx-green-fg",
    WARNING: "hover:bg-soft-yellow-bg-active hover:text-rdx-yellow-fg",
  },
  SURFACE: {
    DANGER:
      "hover:bg-surface-red-bg-active hover:inset-ring hover:inset-ring-surface-red-border-active hover:text-rdx-red-fg",
    NEUTRAL: "hover:bg-background-color_800C",
    SAFE: "hover:bg-surface-green-bg-active hover:inset-ring hover:inset-ring-surface-green-border-active hover:text-rdx-green-fg",
    WARNING:
      "hover:bg-surface-yellow-bg-active hover:inset-ring hover:inset-ring-surface-yellow-border-active hover:text-rdx-yellow-fg",
  },
};

type FxPopoverPropsType<T extends PopoverMenuDataType> = {
  InteractChild: React.ReactNode;
  items: PopoverMenuDataType;
  className?: string;
  onItemClick?: (
    value: NonNullable<T[keyof T]["data"]>[number]["value"],
    isQueryParam?: boolean
  ) => void;
} & PopoverContentProps;

/**
 * A flexible popover menu component built on Radix UI's Popover primitive.
 * Supports grouped menu items with icons, status indicators, hover effects, and navigation links.
 *
 * @template T - The shape of the menu items object, extending `PopoverMenuDataType`.
 *
 * @param InteractChild - The element that triggers the popover when clicked.
 * @param items - The grouped menu items to render inside the popover.
 * @param className - Optional className appended to the popover content container.
 * @param onItemClick - Callback fired when a non-link menu item is clicked, receives the item's `value`.
 * @param props - Additional props passed to Radix UI's `PopoverContent` (e.g. `align`, `side`, `sideOffset`).
 *
 * @example
 * // Basic usage with click handler
 * <FxPopover<typeof PRODUCT_PAGE_MENU_OPTIONS>
 *   align="end"
 *   items={PRODUCT_PAGE_MENU_OPTIONS}
 *   onItemClick={(value) => console.log(value)}
 *   InteractChild={<button>Open</button>}
 * />
 *
 * @example
 * // With status indicators and hover effects
 * const MENU = {
 *   actions: {
 *     label: "Actions",
 *     data: [
 *       {
 *         label: "Delete",
 *         value: "delete",
 *         icon: Trash,
 *         status: "DANGER",
 *         showStatusHoverEffect: true,
 *         effectType: "SURFACE",
 *       },
 *     ],
 *   },
 * } as const satisfies PopoverMenuDataType;
 *
 * <FxPopover
 *   items={MENU}
 *   onItemClick={(value) => handleDelete(value)}
 *   InteractChild={<button>Options</button>}
 * />
 *
 * @example
 * // With navigation links (uses slug instead of onItemClick)
 * const NAV_MENU = {
 *   pages: {
 *     data: [
 *       { label: "Settings", slug: "/settings", icon: Settings },
 *       { label: "Profile", slug: "/profile", icon: User },
 *     ],
 *   },
 * } satisfies PopoverMenuDataType;
 *
 * <FxPopover
 *   items={NAV_MENU}
 *   InteractChild={<button>Navigate</button>}
 * />
 */
export const FxPopover = <T extends PopoverMenuDataType>({
  InteractChild,
  items,
  className,
  onItemClick,
  ...props
}: FxPopoverPropsType<T>) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{InteractChild}</PopoverTrigger>
      <PopoverContent
        className={`bg-background-color_850C w-[238px] border border-border-color_3 rounded-xl ${className}`}
        {...props}
      >
        <ul className="text-workspace_3 font-medium ">
          {Object.entries(items).map(([Key, data], i) => {
            return (
              <div
                key={`${Key}-${i}`}
                className={`p-1  border-border-color_3 ${i < Object.entries(items).length - 1 ? "border-b" : ""}`}
              >
                {data && data.label ? (
                  <p className="text-[12px] font-[450] text-text-color_3 px-2 pt-1">
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
                          ? itemStatusHoverEffect[item.effectType][item.status]
                          : itemStatusHoverEffect.SOFT.NEUTRAL;
                      const textColor = item.status
                        ? getTextColor[item.status]
                        : getTextColor.NEUTRAL;

                      return (
                        <React.Fragment
                          key={`${(item.value || item.slug)?.toString().toLowerCase()}-${j}`}
                        >
                          {item.slug ? (
                            <Link href={item.slug}>
                              <li
                                className={`flex justify-start items-center gap-1.5 h-8 cursor-default group transition-colors ${hoverItemStatusEffect} rounded-lg px-2 ${textColor} ${!item.showStatusHoverEffect ? hoverStatusTextColor : ""}`}
                              >
                                <div
                                  className={`${item.status ? "text-inherit" : "text-text-svg_default"} transition-colors group-hover:text-inherit ${item.iconClassname}`}
                                >
                                  {Icon && <Icon size={16} />}
                                </div>
                                <span>{item.label}</span>
                              </li>
                            </Link>
                          ) : (
                            <li
                              onClick={() =>
                                onItemClick?.(item.value, item.isAsQueryParam)
                              }
                              className={`flex justify-start items-center  h-8 gap-1.5 cursor-default group transition-colors ${hoverItemStatusEffect} rounded-lg px-2 ${textColor} ${!item.showStatusHoverEffect ? hoverStatusTextColor : ""}`}
                            >
                              <div
                                className={` ${item.status ? "text-inherit" : "text-text-svg_default"} transition-colors group-hover:text-inherit ${item.iconClassname}`}
                              >
                                {Icon && <Icon size={16} />}
                              </div>
                              <span>{item.label}</span>
                            </li>
                          )}
                        </React.Fragment>
                      );
                    })
                  : null}
              </div>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
