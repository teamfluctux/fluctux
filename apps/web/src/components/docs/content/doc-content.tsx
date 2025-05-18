"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
import { lessonKey } from "../constant";
import {
  AngryIcon,
  FxButton,
  ArrowLeftSolidIcon,
  GithubCircleIcon,
  RightArrowIcon,
  SadIcon,
  SmileIcon,
  SolidLineIcon,
  StarFaceIcon,
  TextAlignLeftIcon,
} from "@fluctux/ui";
import { useGetAnchors, useToggleOpen, useProcessMDX } from "@fluctux/hooks";
import Head from "next/head";

export interface DocContentPropsType {
  data: string;
}
export default function DocContent({ data }: DocContentPropsType) {
  const { content, metaData } = useProcessMDX(data);
  const { anchors } = useGetAnchors(content);
  const path_name = usePathname();
  const { prev, next } = useSelector((state: RootState) => state.docPaginate);
  const {
    isOpen: isDocOnPageOpen,
    setOpen: setDocOnPageOpen,
    toggle: toggleDocOnPageOpen,
  } = useToggleOpen({
    id: "doc-on-the-page",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    setDocOnPageOpen(false);
  }, [path_name]);

  return (
    <>
      <title>{metaData.title || "Untitled"}</title>
      <meta
        name="description"
        content={metaData.description || "No Description"}
      />
      <section className="fx-flex-ct gap-6 relative w-full h-full ">
        <div className="mt-[64px] pt-10 w-full overflow-hidden">
          <div className="w-fit mb-8">
            <span className="text-text-color_2 font-medium">
              {path_name &&
                path_name
                  .split("/")
                  .slice(-3)
                  .map((segment, index, arr) =>
                    index === 0 && segment === "docs"
                      ? ""
                      : `${segment
                          .replace(/^\d+-/, "")
                          .replace(/-/g, " ")
                          .replace(/^\w/, (c) =>
                            c.toUpperCase()
                          )}${index < arr.length - 1 ? " / " : ""}`
                  )}
            </span>
          </div>

          <article
            dangerouslySetInnerHTML={{ __html: content }}
            className="prose prose-gray dark:prose-invert w-full "
          ></article>
          <div className="border-t mt-10 border-border-color_1 mb-24">
            <div className="w-full fx-flex-center gap-2 mt-5 doc-pagination">
              {prev && (
                <Link
                  href={`/docs/${prev?.path.replace("src/content/docs/", "").replace(".mdx", "")}`}
                  className="w-full"
                  onClick={() => {
                    localStorage.setItem(lessonKey, path_name);
                  }}
                >
                  <div className="w-full doc-paginate-btn h-[80px] border-none hover:bg-background-color_900C transition-colors duration-150 fx-rounded p-3 pt-0 pb-0 fx-flex-cl text-left flex-shrink-0 gap-2">
                    <div className="fx-flex-cl">
                      <RightArrowIcon className="rotate-180" />
                      <p className="text-text-color_2 font-medium text-[15px]">
                        Previous
                      </p>
                    </div>
                    <p className=" font-medium text-[16px] one-line-ellipsis">
                      {prev?.name
                        .replace(/^\d+-/, "")
                        .replace(/-/g, " ")
                        .replace(/^\w/, (c: string) => c.toUpperCase())
                        .replace(".mdx", "")}
                    </p>
                  </div>
                </Link>
              )}

              {next && (
                <Link
                  href={`/docs/${next?.path.replace("src/content/docs/", "").replace(".mdx", "")}`}
                  className="w-full"
                  onClick={() => {
                    localStorage.setItem(lessonKey, path_name);
                  }}
                >
                  <div className="w-full doc-paginate-btn h-[80px] border-none hover:bg-background-color_900C transition-colors duration-150 fx-rounded p-3 pt-0 pb-0 fx-flex-cr text-right flex-shrink-0 gap-2">
                    <div className="fx-flex-cr">
                      <p className="text-text-color_2 font-medium text-[15px]">
                        Next
                      </p>
                      <RightArrowIcon />
                    </div>
                    <p className=" font-medium text-[16px] one-line-ellipsis">
                      {next?.name
                        .replace(/^\d+-/, "")
                        .replace(/-/g, " ")
                        .replace(/^\w/, (c: string) => c.toUpperCase())
                        .replace(".mdx", "")}
                    </p>
                  </div>
                </Link>
              )}
            </div>

            {data !== "404: Not Found" && (
              <div className="w-full mt-5 border fx-rounded border-border-color_1 p-3 fx-flex-between-ic gap-3 edit-page-github">
                <div className="max-w-[500px] w-full">
                  <h4 className="text-text-color_1 text-[16px] font-medium">
                    Edit this page on Github?
                  </h4>
                  <p className="text-text-color_2 text-[14px] font-medium pt-2">
                    If you find any mistakes or areas that need updating, feel
                    free to edit and contribute improvements to the
                    documentation!
                  </p>
                </div>
                <Link
                  href={`https://github.com/teamfluctux/docs/blob/main/${path_name.replace(/^\/docs\//, "")}.mdx`}
                  target="_blank"
                  className="edit-page-github-btn"
                >
                  <FxButton
                    variant="secondary"
                    radius="primary"
                    size="md"
                    className="fx-flex-center gap-2 edit-page-github-btn"
                  >
                    <span className="font-medium">Edit</span>
                    <GithubCircleIcon />
                  </FxButton>
                </Link>
              </div>
            )}

            {data !== "404: Not Found" && (
              <div className="w-full fx-flex-center mt-5">
                <div className="border border-border-color_1 rounded-[50px] p-1 gap-2 fx-flex-center w-fit bg-background-color_900C">
                  <span className="text-text-color_2 text-[14px] font-medium ml-2">
                    Was this helpful?
                  </span>
                  <div className="fx-flex-center w-fit">
                    <span className="rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer hover:bg-background-color_800C">
                      <StarFaceIcon />
                    </span>
                    <span className="rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer hover:bg-background-color_800C">
                      <SmileIcon />
                    </span>
                    <span className="rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer hover:bg-background-color_800C">
                      <SadIcon />
                    </span>
                    <span className="rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer hover:bg-background-color_800C">
                      <AngryIcon />
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <aside
          className={`w-[220px] sticky top-0 h-screen flex-shrink-0 text-[15px] doc-on-this-page-aside ${isDocOnPageOpen && "doc-onthispage-aside-open"}`}
        >
          <div
            onClick={toggleDocOnPageOpen}
            className={`w-[15px] hidden absolute left-0 top-0 h-screen justify-center items-center doc-aside-onpage-toggle-btn`}
          >
            <SolidLineIcon
              className={`absolute ${isDocOnPageOpen && "hidden"}`}
              width={34}
              height={34}
            />
            <ArrowLeftSolidIcon
              className={`absolute rotate-180 ${!isDocOnPageOpen && "hidden"} `}
            />
          </div>
          <nav className="h-[calc(100%-105px)] sticky top-[105px] overflow-y-auto custom-scrollbar doc-hide-scrollbar pb-24 doc-on-this-page-aside-container">
            <div className="fx-flex-cl gap-2 sticky top-0 bg-background-color_950C pb-1">
              <TextAlignLeftIcon width={15} height={15} />
              <h3 className="font-medium text-workspace_1">On this page</h3>
            </div>

            <ul className="text-text-color_2 leading-7">
              {anchors.map((item: string, i: number) => {
                return (
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    key={i}
                    className="dark:hover:text-fx_zinc-50 text-workspace_1 hover:text-fx_zinc-950"
                  >
                    <li
                      onClick={() => setDocOnPageOpen(false)}
                      className="one-line-ellipsis"
                    >
                      {item}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
        </aside>
      </section>
    </>
  );
}
