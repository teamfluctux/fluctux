import { Check, LucideIcon } from "lucide-react";

export const AgGridMenuListButton = ({
  icon,
  children,
  className,
  active,
  ...props
}: {
  icon?: LucideIcon;
  children?: React.ReactNode;
  active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const Icon = icon || null;
  return (
    <button
      className={`w-full px-2 py-1 rounded-[3px] text-workspace_3 hover:bg-background-color_800C group font-medium text-text-color_2 flex justify-start items-center gap-2 hover:text-text-color_1 transition-colors ${className} ${active && "!text-text-color_1"}`}
      {...props}
    >
      {Icon && (
        <Icon
          size={16}
          className="text-text-color_3 group-hover:text-text-color_2"
        />
      )}
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center gap-2 flex-shrink-0">
          {children}
        </div>
        <div className=" flex-shrink-0">{active && <Check size={16} />}</div>
      </div>
    </button>
  );
};
