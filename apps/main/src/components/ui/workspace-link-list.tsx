import { Ban, LucideIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";

export const WorkSpaceLinkList = ({
  icon,
  children,
  active = false,
  ...props
}: {
  icon?: LucideIcon;
  active?: boolean;
  children?: React.ReactNode;
}) => {
  const Icon = icon;
  return (
    <li
      className={`text-workspace_2 cursor-pointer border border-transparent font-medium text-text-color_4 group flex justify-start items-center gap-2 px-2 py-1  rounded-tiny  ${
        active
          ? "active:!border-surface-indigo-border-active !text-surface-indigo-fg bg-surface-indigo-bg-active"
          : "hover:text-text-color_1 hover:bg-background-color_900C "
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
