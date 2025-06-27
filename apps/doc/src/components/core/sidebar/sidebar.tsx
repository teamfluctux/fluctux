import React, { SVGProps } from "react";
import { FxFavIcon, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { ToggleGroup, ToggleGroupItem } from "@fluctux/ui";
import Link from "next/link";
import { DEVELOPER_DOC_NAV } from "@/constants/docs/developer.constant";
import { RecursiveNav } from "./recursive-nav";
import { Bookmark, History, LucideIcon } from "lucide-react";
import { IconType } from "@fluctux/types";
import { ButtonWithIconBox } from "./button-with-iconbox";

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
];

export const AppSidebar = ({ slug }: { slug: string }) => {
  const DATA = DEVELOPER_DOC_NAV;
  return (
    <div className="w-full h-full border-r border-border-color_1 bg-background-color_900C">
      <div className="w-full h-fit px-5 py-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <FxFavIcon size="sm" variant="theme" />
          <h1 className="text-read_16 font-semibold text-text-color_4">Docs</h1>
        </div>
        <div>
          <ToggleGroup type="single" size="sm" variant={"outline"}>
            <ToggleGroupItem
              data-state={`${slug === "user" && "on"}`}
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
              data-state={`${slug === "developer" && "on"}`}
              aria-label="Toggle italic"
              className="px-5"
            >
              <Link
                href={"/developer"}
                className="flex justify-center items-center py-1"
              >
                <span className="text-workspace_3 ">Developer</span>
              </Link>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className=" w-full px-5 mt-5 leading-10">
        {TopNavItems.map((item, i) => {
          return (
            <ButtonWithIconBox
              slug={item.slug.toString()}
              label={item.label.toString()}
              icon={item.icon}
            />
          );
        })}
      </div>
      <div className="px-1.5 pt-1.5 mt-5">
        <RecursiveNav data={DATA} />
      </div>
    </div>
  );
};
