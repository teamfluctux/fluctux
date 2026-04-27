"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { cn, Separator } from "@fluctux/ui";
import { observer } from "mobx-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { scraperStore } from "stores";

export const InstalledScraperList = observer(() => {
  const activeApiUrl = scraperStore.scrapingConfiguration.apiUrl;
  return (
    <div className="w-[300px] border-r border-border-color_1 h-full sticky top-0 shrink-0 p-2 space-y-2 transition-colors">
      {scraperStore.installedScrappers.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <li
              onClick={() =>
                scraperStore.setScrapingConfiguration({ apiUrl: item.apiURL })
              }
              className={cn(
                "w-full h-fit p-1 px-1.5 rounded-lg cursor-default  flex justify-start items-center gap-2",
                activeApiUrl === item.apiURL
                  ? "bg-surface-bg border border-surface-border-active hover:bg-surface-bg-active"
                  : "hover:bg-background-color_800C"
              )}
            >
              <Image
                src={item.image}
                width={500}
                height={500}
                className="w-[70px] h-[70px] rounded-md overflow-hidden border border-border-color_1 object-cover shrink-0 object-center"
                alt={item.title}
              />
              <div className="w-full space-y-0.5">
                <h4 className="text-workspace_2 one-line-ellipsis font-medium">
                  {item.title}
                </h4>
                <p className="text-[12px] text-text-color_2 two-line-ellipsis leading-4">
                  {item.meta_desc}
                </p>
                <p className="text-[12px]  font-medium text-text-color_4 one-line-ellipsis">
                  {item.category}
                </p>
              </div>
            </li>
            {i < scraperStore.installedScrappers.length - 1 && (
              <Separator
                orientation="horizontal"
                className="bg-border-color_1!"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
});
