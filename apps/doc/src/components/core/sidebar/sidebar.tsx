import React from "react";
import {
  FxButton,
  FxFavIcon,
  FxListItem,
  LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@fluctux/ui";
import {
  ToggleGroup,
  ToggleGroupItem,
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@fluctux/ui";
import Link from "next/link";
import { RecursiveNav } from "./recursive-nav";
import {
  Bookmark,
  Headset,
  History,
  LogIn,
  LucideIcon,
  Settings,
  Settings2,
} from "lucide-react";
import { IconType } from "@fluctux/types";
import { ButtonWithIconBox } from "./button-with-iconbox";
import { DocNavCategory, getDocsByCategory } from "@/constants/docs";
import { DocNavType } from "@/constants/docs/type";
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
  data: DocNavType;
  docType: DocNavCategory;
}) => {
  return (
    <aside className="w-full h-full border-r border-border-color_1 bg-background-color_900C">
      <div className="w-full h-[calc(100vh-74px)] ">
        <div className="w-full h-fit px-5 py-4 flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <FxFavIcon size="sm" variant="theme" />
            <h1 className="text-read_16 font-semibold text-text-color_4">
              Docs
            </h1>
          </div>
          <div>
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
        </div>
        <div className=" w-full px-5 mt-5 leading-8">
          {TopNavItems.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <ButtonWithIconBox
                  slug={item.slug.toString()}
                  label={item.label.toString()}
                  icon={item.icon}
                />
              </React.Fragment>
            );
          })}
        </div>
        {data && Object.keys(data).length > 0 && (
          <div className="px-2 pt-1.5 mt-5">
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
              className="w-[30px] h-[30px] rounded flex justify-center items-center "
            >
              <Settings2 size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE} />
            </FxButton>
          </PopoverTrigger>
          <PopoverContent
            className="w-[200px] rounded h-fit bg-background-color_850C border border-border-color_1 p-1"
            align="end"
          >
            <Link href={"#"}>
              <FxListItem label="Log out" icon={<LogIn size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE}/>} className="hover:!text-red-600 hover:!bg-background-color_750C w-full py-1 px-2 rounded-tiny"  />
            </Link>
            
          </PopoverContent>
        </Popover>
      </div>
    </aside>
  );
};
