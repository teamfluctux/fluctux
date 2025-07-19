import { Ban, LucideIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";

export const WorkSpaceLinkList = ({
  slug = "#",
  icon,
  children,
  active = false,
  ...props
}: {
  label?: string;
  slug?: string;
  icon?: LucideIcon;
  active?: boolean,
  children?: React.ReactNode
} & Omit<LinkProps, "href">) => {
  const Icon = icon;
  return (
    <Link href={slug} {...props}>
      <li className={`text-workspace_2 border border-transparent font-medium text-text-color_4 group flex justify-start items-center gap-2 px-2 py-1  rounded-tiny  ${ 
        active ? "active:!border-surface-indigo-border-active !text-surface-indigo-fg bg-surface-indigo-bg-active" : "hover:text-text-color_1 hover:bg-background-color_900C "
      }`}>
        {
          Icon &&
        <div className="text-text-svg_default group-hover:text-text-color_1">
          <Icon size={16} className={`${active ? "text-surface-indigo-fg": "text-text-svg_default"}`} />
        </div>
        }
        {children || "Undefined"}
      </li>
    </Link>
  );
};