"use client";
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE, LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE } from "@fluctux/ui";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  CircleArrowUp,
  Forward,
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
        className="w-full h-[70px] px-3 rounded group border border-border-color_1"
        variant="ghost_zinc"
      >
        <div className={`flex items-center gap-1 ${position === "left" ? "justify-start" : "justify-start flex-row-reverse"} w-full`}>
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
  const { containerRef, isVisible, scrollToTop } = useScrollToTop();
  return (
    <div
      ref={containerRef}
      className=" w-full h-full overflow-y-auto scroll-smooth grid grid-cols-[1fr_340px]"
    >
      <div className="max-w-[650px] w-full mx-auto px-3 py-14 ">
        <div className="w-full h-[50px] z-40 sticky top-0 bg-background-color_925C mb-6 flex justify-between items-center">
          <div className="w-full text-workspace_2 flex justify-start items-center gap-2  font-weight_450">
            <span>Getting Started</span>
            <span>/</span>
            <span>Hello world</span>
          </div>
          <div className="flex justify-start items-center gap-2">

            <FxButton className="w-[28px] h-[28px] rounded flex justify-center items-center" variant="ghost_zinc">
              <Bookmark size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE}/>
            </FxButton>

              <FxButton className="px-3 h-[28px] rounded flex justify-center items-center gap-1 text-text-color_2 hover:text-text-color_1" variant="secondary">
                <span className="text-workspace_2 font-medium">Share</span>
              <Forward  size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE}/>
            </FxButton>

          <div className="flex-shrink-0 flex justify-end items-center gap-2 w-fit">
            <FxButton
              variant="secondary"
              className="w-[28px] h-[28px] border rounded flex justify-center items-center"
            >
              <ChevronLeft size={LUCIDE_WORKSPACE_ICON_SIZE} />
            </FxButton>
            <FxButton
              variant="secondary"
              className="w-[28px] h-[28px] border rounded flex justify-center items-center"
            >
              <ChevronRight size={LUCIDE_WORKSPACE_ICON_SIZE} />
            </FxButton>
          </div>
              </div>
        </div>
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
      <div className=" h-[calc(100vh-13px)] overflow-hidden sticky top-0 max-w-[300px] w-full">
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
