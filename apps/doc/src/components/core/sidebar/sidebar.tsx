"use client";
import React, { useMemo } from "react";
import { FxFavIcon } from "@fluctux/ui";
import { ToggleGroup, ToggleGroupItem } from "@fluctux/ui";
import Link from "next/link";
import { DocNavType } from "@/constants/docs/type";
import { DEVELOPER_DOC_NAV } from "@/constants/docs/developer.constant";

const INDENT_SIZE = 5;

const DocNavList = ({
  data,
  depth = 0,
}: {
  data: DocNavType;
  depth?: number;
}) => {
  const dataEntries = useMemo(() => Object.entries(data), [data]);
  return (
    <div>
      {dataEntries.map(([key, value], i) => {
          const currentPaddingLeft = depth * INDENT_SIZE;
        return (
          <div key={`${key}-${depth}`}>
            {value.type === "multiple" ? (
              <div style={{paddingLeft: `${currentPaddingLeft}px`}}>{key}</div>
            ) : (
              <div style={{paddingLeft: `${currentPaddingLeft}px`}}>{key} - single</div>
            )}
            <div>
              {value?.lists?.map((item, j) => {
                const listItemsPadding = (depth + 1) * INDENT_SIZE;
                return <div style={{paddingLeft: `${listItemsPadding}px`}}>{item.label}</div>;
              })}

              {value.group && Object.keys(value.group).length > 0 && (
              <DocNavList
                data={value?.group ?? {}}
                depth={depth + 1}
              />
            )}
            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const AppSidebar = ({ slug }: { slug: string }) => {
  return (
    <div className="w-full h-full border-r border-border-color_1 bg-background-color_900C">
      <div className="w-full h-fit px-5 py-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <FxFavIcon size="sm" variant="theme" />
          <h1 className="text-read_16 font-semibold text-text-color_2">Docs</h1>
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
      <div>
        <DocNavList data={DEVELOPER_DOC_NAV} />
      </div>
    </div>
  );
};
