"use client";
import {
  FxButton,
  LUCIDE_WORKSPACE_ICON_SIZE,
  LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE,
  Popover,
  PopoverContent,
  PopoverTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  FxListItem,
} from "@fluctux/ui";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  CircleArrowUp,
  FileText,
  Forward,
  Link2,
  LogIn,
  LucideIcon,
} from "lucide-react";
import React from "react";
import { ContentAside } from "./content-aside";
import { useScrollToTop } from "@fluctux/hooks";
import { TocItem } from "react-mdxutils";
import Link from "next/link";

const PaginationButton = ({
  label,
  icon,
  contentTitle,
  slug,
  position = "left",
}: {
  label: string;
  icon: LucideIcon;
  contentTitle: string;
  slug: string;
  position: "left" | "right";
}) => {
  const Icon = icon;
  return (
    <Link className="w-full h-full" href={`/${slug}`}>
      <FxButton
        className="w-full h-[70px] !block px-4 rounded group border border-border-color_1  "
        variant="ghost_zinc"
      >
        <div
          className={`flex items-center gap-1 ${position === "left" ? "justify-start" : "justify-start flex-row-reverse"} w-full`}
        >
          <Icon
            size={17}
            className="text-text-color_2 group-hover:text-text-color_1"
          />
          <span className="text-workspace_2 font-medium text-text-color_2 group-hover:text-text-color_1">
            {label}
          </span>
        </div>
        <p
          className={`text-workspace_2 font-medium text-text-color_1 w-full ${position === "left" ? "text-left" : "text-right"}  mt-1`}
        >
          {contentTitle}
        </p>
      </FxButton>
    </Link>
  );
};

export const Content = ({
  MdxComponent,
  toc,
}: {
  MdxComponent: string;
  toc: TocItem[];
}) => {
  const { isVisible, scrollToTop } = useScrollToTop();
  return (
    <div className=" w-full h-full flex justify-center items-start gap-7 pl-[320px]">
      <div className="max-w-[650px] w-full px-3 pb-14 pt-28">
        <article className="prose  prose-gray dark:prose-invert ">
          {MdxComponent}
        </article>
        <div className="flex justify-center items-center gap-3 mt-16">
          <PaginationButton
            contentTitle="Getting Started"
            label="Previous"
            icon={ChevronLeft}
            slug=""
            position="left"
          />
          <PaginationButton
            contentTitle="Hello World"
            label="Next"
            icon={ChevronRight}
            slug=""
            position="right"
          />
        </div>
      </div>
      <div className="w-[320px] pt-28 h-screen overflow-hidden sticky top-0 max-w-[300px]">
        <ContentAside
          toc={toc}
          scrollToTopElement={
            isVisible && (
              <div
                onClick={scrollToTop}
                className="text-text-color_2 cursor-pointer hover:text-text-color_1 flex justify-start items-center gap-1 mt-4 transition-colors"
              >
                <span className="text-workspace_2 font-medium">
                  Scroll to top
                </span>
                <CircleArrowUp size={18} />
              </div>
            )
          }
        />
      </div>
    </div>
  );
};
