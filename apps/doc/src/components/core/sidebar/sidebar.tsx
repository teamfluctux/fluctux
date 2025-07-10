import React from "react";
import {
  FxButton,
  FxFavIcon,
  FxGroupListItem,
  FxListItem,
  LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "@fluctux/ui";
import {
  ToggleGroup,
  ToggleGroupItem,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@fluctux/ui";
import Link from "next/link";
import { RecursiveNav } from "./recursive-nav";
import {
  Bookmark,
  Headset,
  History,
  LogIn,
  LucideIcon,
  Search,
  Settings,
  Settings2,
} from "lucide-react";
import { IconType } from "@fluctux/types";
import { ButtonWithIconBox } from "./button-with-iconbox";
import { DocNavCategory, getDocsByCategory } from "@/constants/docs";
import { DocNavType } from "@/constants/docs/type";
import { ThemeToggler } from "@fluctux/shared";
const TopNavItems: { label: string; slug: string; icon: IconType }[] = [
  {
    label: "Bookmarks",
    slug: "/bookmarks",
    icon: Bookmark,
  },
  {
    label: "Changelog",
    slug: "/changelog",
    icon: History,
  },
  {
    label: "Support",
    slug: "support",
    icon: Headset,
  },
];

export const AppSidebar = ({
  data,
  docType,
}: {
  data?: DocNavType;
  docType?: DocNavCategory;
}) => {
  return (
    <aside className="w-full h-full border-r border-border-color_1 bg-background-color_925C ">
      <div className="w-full h-[calc(100vh-74px)] ">
        <div className="w-full h-fit px-5 py-4 flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <FxFavIcon size="sm" variant="theme" />
            <h1 className="text-read_16 font-semibold text-text-color_4">
              Docs
            </h1>
          </div>
          <FxButton size="sm" className="">
            Sign in
          </FxButton>
        </div>
        <div className=" px-5 flex justify-between items-center mt-5 rounded-rounded_10C  ">
          <div className="flex-shrink-0">
            <ToggleGroup type="single" size="sm" variant={"outline"}>
              <ToggleGroupItem
                data-state={`${docType === "user" && "on"}`}
                value="bold"
                aria-label="Toggle bold"
              >
                <Link
                  href={"/user"}
                  className="flex justify-center items-center py-1"
                >
                  <span className="text-workspace_3">User</span>
                </Link>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="italic"
                data-state={`${docType === "developer" && "on"}`}
                aria-label="Toggle italic"
                className="px-5"
              >
                <Link
                  href={"/developer"}
                  className="flex justify-center items-center py-1"
                >
                  <span className="text-workspace_3">Developer</span>
                </Link>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <Tooltip >
            <TooltipTrigger asChild>
              <FxButton
                variant="secondary"
                className="w-[30px] p-0 h-[30px] text-text-color_2 hover:!text-text-color_1"
              >
                <Search size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE} />
              </FxButton>
            </TooltipTrigger>
            <TooltipContent variant="zinc_900">
              <div>
                Search{" "}
                <span className="text-text-color_1 font-medium">
                  Ctrl
                </span>{" "}
                +{" "}
                <span className="text-text-color_1 font-medium">
                  k
                </span>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>

        {data && Object.keys(data).length > 0 && (
          <div className="px-2 pt-1.5 mt-2">
            <RecursiveNav data={data} docType={docType} />
          </div>
        )}
      </div>
      <div className="w-full h-[60px] px-5 flex justify-between items-center">
        <div className="flex justify-start items-center gap-3 flex-shrink-0">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="user" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-workspace_2 font-medium text-text-color_1">
              Nimul Islam Mahin
            </p>
            <p className="text-workspace_3 text-text-color_3">
              nimulmahin@gmail.com
            </p>
          </div>
        </div>

        <Popover>
          <PopoverTrigger asChild className="outline-none">
            <FxButton
              variant="secondary"
              className="w-[30px] h-[30px] p-0 "
            >
              <Settings2 size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE} />
            </FxButton>
          </PopoverTrigger>
          <PopoverContent
            className="w-[200px] rounded h-fit bg-background-color_900C border border-border-color_1 p-1"
            align="end"
          >
            <div className="  pl-3  p-1 text-text-color_4 flex justify-between items-center text-workspace_2 font-medium">
              Theme
              <ThemeToggler />
            </div>
            <Separator className="my-1 !bg-background-color_750C" />
            <Link href={"#"}>
              <FxListItem
                label="Log out"
                icon={<LogIn size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE} />}
                className="hover:!text-red-600 hover:!bg-background-color_800C w-full py-1 px-2 rounded-tiny"
              />
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </aside>
  );
};
