"use client";
import Link from "next/link";
import React from "react";
import { generateTocFromMdx, useActiveHeading } from "react-mdxutils";
export const ContentAside = ({ matterContent }: { matterContent: string }) => {
  const toc = generateTocFromMdx(matterContent);
  const {
    activeHeading,
    handleActiveHeading,
    headingListRefs,
    activeIndicatorRef,
    asideRef,
  } = useActiveHeading(matterContent);
  return (
    <aside>
      <div className=" pt-16 pb-2">
        <p className="text-text-color_1 font-medium text-workspace_2 ">On this page</p>
      </div>
      <ul className="relative h-full overflow-y-auto pl-1 overflow-x-hidden" ref={asideRef}>
        <div className="absolute w-[1px] z-[-1] bg-background-color_800C h-full left-0.5"></div>
        {toc.map((item, i) => {
          return (
            <Link
              key={i}
              href={`#${item.slug}`}
              
            >
              <li
              style={{ marginLeft: `${(item.level - 2) * 20}px` }}
                className={`text-workspace_2 font-medium py-1 px-3 one-line-ellipsis transition-colors ${ activeHeading === `#${item.slug}` ? "text-text-color_1" : "text-text-color_2" }`}
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
    </aside>
  );
};
