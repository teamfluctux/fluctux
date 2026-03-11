import React from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type WorkSpaceLinkListProps = {
  icon?: LucideIcon;
  active?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  href?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const WorkSpaceLinkList = ({
  icon,
  children,
  active = false,
  disabled,
  className,
  href,
  ...props
}: WorkSpaceLinkListProps) => {
  const Icon = icon;
  return (
    <Link
      href={`${href || "#"}`}
      className={`text-workspace_2 select-none cursor-pointer border border-transparent font-medium text-text-color_4 group flex justify-start items-center gap-2 px-2 h-7.5 rounded-tiny ${
        active
          ? "text-surface-indigo-fg! bg-surface-indigo-bg-active"
          : "hover:text-text-color_1 hover:bg-background-color_900C "
      } ${
        disabled
          ? "cursor-not-allowed"
          : "active:border-surface-indigo-border-active!"
      } ${className}`}
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
    </Link>
  );
};
