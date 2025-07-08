import { IconType } from "@fluctux/types";
import { LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import Link from "next/link";

export const ButtonWithIconBox = ({
  icon,
  label,
  slug,
}: {
  icon: IconType;
  label: string;
  slug: string;
}) => {
  const Icon = icon;
  return (
    <div className="w-full ">
      <Link
        href={`${slug}`}
        className="flex justify-start items-center gap-2 w-full"
      >
        <div className="w-[23px] h-[22px] rounded-tiny border flex justify-center items-center border-border-color_2 bg-background-color_750C">
          <Icon
            size={16}
            className="text-text-color_4"
          />
        </div>
        <span className="text-workspace_2 font-medium text-text-color_4 hover:text-text-color_1">
          {label}
        </span>
      </Link>
    </div>
  );
};
