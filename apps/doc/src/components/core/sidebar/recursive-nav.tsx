"use client";
import { DocNavType } from "@/constants/docs/type";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

const INDENT_SIZE = 15;

export const RecursiveNav = ({
  data,
  depth = 0,
  docType,
}: {
  data: DocNavType;
  depth?: number;
  docType?: string;
}) => {
  if (depth > 5) {
    throw new Error("Maximum depth of 5 exceeded");
  }

  const dataEntries = useMemo(() => Object.entries(data), [data]);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div>
      {dataEntries.map(([key, value], i) => {
        const currentPaddingLeft = depth * INDENT_SIZE;
        return (
          <div key={`${key}-${depth}`} className="">
            {value.type === "multiple" ? (
              <div
                style={{ paddingLeft: `${currentPaddingLeft}px` }}
                className=""
              >
                <Link
                  href={`/${docType}/${value.slug}`}
                  className="w-fit flex justify-start items-center"
                >
                  <div
                    className={`rounded  text-workspace_2 hover:bg-background-color_800C transition-colors font-medium w-fit px-3 pr-1 py-1 flex justify-start items-center gap-2  ${isExpanded ? "text-text-color_4" : "text-text-color_2 hover:text-text-color_1"}`}
                  >
                    {key}
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        toggleExpansion();
                      }}
                      className="flex-shrink-0 p-1 rounded-tiny hover:bg-background-color_750C group hover:ring-[1px] ring-fx_indigo-600 transition-colors"
                    >
                      <ChevronRight
                        size={14}
                        className={`   ${isExpanded ? "rotate-90 text-text-color_4" : "text-text-color_2 group-hover:!text-text-color_1"} transition-all`}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div style={{ paddingLeft: `${currentPaddingLeft}px` }}>
                <Link
                  href={`/${docType}/${value.slug}`}
                  className="w-fit flex justify-start items-center"
                >
                  <div className="px-3 py-1 font-medium rounded w-fit text-workspace_2 hover:bg-background-color_800C text-text-color_2 hover:text-text-color_1">
                    {key} - single
                  </div>
                </Link>
              </div>
            )}
            {isExpanded && (
              <div className=" ">
                {value?.lists?.map((item, j) => {
                  const listItemsPadding = (depth + 1) * INDENT_SIZE;
                  return (
                    <div
                      style={{ paddingLeft: `${listItemsPadding}px` }}
                      key={item.slug}
                    >
                      <Link
                        href={`/${docType}/${value.slug}/${item.slug}`}
                        className="w-fit flex justify-start items-center"
                      >
                        <div className="px-3 py-1 hover:bg-background-color_800C transition-colors text-text-color_2 hover:text-text-color_1 text-workspace_2 font-medium rounded w-fit ">
                          {item.label}
                        </div>
                      </Link>
                    </div>
                  );
                })}

                {value.group && Object.keys(value.group).length > 0 && (
                  <RecursiveNav data={value?.group ?? {}} depth={depth + 1} />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
