"use client";
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { CircleArrowUp, Edit, Edit2, SquarePen, ThumbsDown, ThumbsUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { generateTocFromMdx, TocItem, useActiveHeading } from "react-mdxutils";
export const ContentAside = ({ toc, scrollToTopElement }: { toc: TocItem[] , scrollToTopElement?: React.ReactNode}) => {
  
  const {
    activeHeading,
    handleActiveHeading,
    headingListRefs,
    activeIndicatorRef,
    asideRef,
  } = useActiveHeading(`${toc}`);
  return (
    <aside>
      <div className=" pt-16 pb-2">
        <p className="text-text-color_4 font-medium text-workspace_2 ">
          On this page
        </p>
      </div>
      <ul
        className="relative  max-h-[350px] h-full overflow-y-auto pl-0.5 pb-14 overflow-x-hidden hide-scrollbar"
        ref={asideRef}
      >
        {/* <div className="absolute w-[1px] z-[-1] bg-background-color_800C h-full left-0.5"></div> */}
        {toc.map((item, i) => {
          return (
            <Link
              key={i}
              href={`#${item.slug}`}
              className="border-l flex justify-start border-border-color_1"
            >
              <li
                style={{ marginLeft: `${(item.level - 2) * 20}px` }}
                className={`text-workspace_2 font-medium py-1 px-3 leading-5 transition-colors ${activeHeading === `#${item.slug}` ? "text-text-color_1" : "text-text-color_3"}`}
                onClick={() => {
                  handleActiveHeading(
                    headingListRefs.current[item.slug] as HTMLElement,
                    `#${item.slug}`
                  );
                }}
                ref={(el) => {
                  headingListRefs.current[item.slug] = el;
                }}
              >
                {item.content} hello
              </li>
            </Link>
          );
        })}
        <div
          ref={activeIndicatorRef}
          className="absolute transition-all !w-[2px] dark:bg-fx_zinc-50 bg-fx_zinc-950 h-[28px] !left-[1.5px] top-0 rounded-full z-10"
        ></div>
      </ul>
      <div className="shadow-[0px_0px_50px_44px_var(--background-color-925C)] h-[10px] w-full  relative z-10"></div>
      <div className="relative z-20 pt-5">
        <div className="flex justify-between items-center group">
          <FxButton
            variant="secondary"
            className="p-1 px-3 group rounded flex justify-center items-center gap-2 text-workspace_2"
          >
            <span className="text-text-color_2 group-hover:text-text-color_1 transition-colors font-medium">
              Suggest Edits
            </span>
            <SquarePen
              size={16}
              className="text-text-color_4 group-hover:!text-text-color_1"
            />
          </FxButton>
        </div>
        <div className="mt-5 border w-full p-3 border-border-color_1 rounded-rounded_15C ">
          <p className="text-text-color_2 text-workspace_2 font-medium">Was this page helpful?</p>
          <div className="flex justify-start items-center gap-2 mt-3">

          <FxButton variant="secondary" className="px-3 py-1 rounded flex justify-center items-center !text-workspace_2 font-medium text-text-color_2 hover:text-text-color_1 gap-1">
            <ThumbsUp size={16} />
            <span>Yes</span>
          </FxButton>
          <FxButton variant="secondary" className="px-3 py-1 rounded flex justify-center items-center !text-workspace_2 font-medium text-text-color_2 hover:text-text-color_1 gap-1">
            <ThumbsDown size={16} />
            <span>No</span>
          </FxButton>
          </div>
        </div>
        {scrollToTopElement}
      </div>
    </aside>
  );
};
