import React from "react";
import type { LucideIcon } from "lucide-react";

export type WorkSpaceListProps = {
  icon?: LucideIcon;
  active?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  value?: string;
  order?: number;
  label?: string;
  onClickDo?: (
    active: boolean,
    disabled: boolean,
    value: string,
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
  value,
  className,
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
          value ?? "",
          label ?? "Undefined"
        )
      }
      className={`text-workspace_2 select-none cursor-default border border-transparent font-medium text-text-color_4 group flex justify-start items-center gap-2 px-2 h-7.5 rounded-tiny ${
        active
          ? "text-surface-fg! bg-surface-bg-active"
          : "hover:text-text-color_1 hover:bg-background-color_900C "
      } ${
        disabled ? "cursor-not-allowed" : "active:border-surface-border-active!"
      } ${className}`}
      {...props}
    >
      {Icon && (
        <div className="text-text-svg_default group-hover:text-text-color_1">
          <Icon
            size={16}
            className={`${active ? "text-surface-fg" : "text-text-svg_default"}`}
          />
        </div>
      )}
      {children || "Undefined"}
    </li>
  );
};
