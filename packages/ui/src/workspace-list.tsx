import React from "react";
import type { LucideIcon } from "lucide-react";

type WorkSpaceListProps = {
  icon?: LucideIcon;
  active?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  slug?: string;
  order?: number;
  label?: string;
  onClickDo?: (
    active: boolean,
    disabled: boolean,
    slug: string,
    label: string
  ) => void;
};

type ReactWorkSpaceListProps = WorkSpaceListProps &
  React.LiHTMLAttributes<HTMLLIElement>;

export const WorkSpaceList = ({
  icon,
  children,
  active = false,
  disabled,
  slug,
  order,
  label,
  onClickDo,
  ...props
}: ReactWorkSpaceListProps) => {
  const Icon = icon;
  return (
    <li
      onClick={() =>
        onClickDo?.(
          active || false,
          disabled || false,
          slug ?? "",
          label ?? "Undefined"
        )
      }
      className={`text-workspace_2 select-none cursor-pointer border border-transparent font-medium text-text-color_4 group flex justify-start items-center gap-2 px-2 py-1 rounded-tiny ${
        active
          ? "text-surface-indigo-fg! bg-surface-indigo-bg-active"
          : "hover:text-text-color_1 hover:bg-background-color_900C "
      } ${
        disabled
          ? "cursor-not-allowed"
          : "active:border-surface-indigo-border-active!"
      }`}
      {...props}
    >
      {Icon && (
        <div className="text-text-svg_default group-hover:text-text-color_1">
          <Icon
            size={16}
            className={`${active ? "text-surface-indigo-fg" : "text-text-svg_default"}`}
          />
        </div>
      )}
      {children || "Undefined"}
    </li>
  );
};
