"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setPagination } from "@/redux/pagination/docPaginateSlice";
import { FLUCTUX_VERSION } from "@/constants/fluctux-version";
import { lessonKey } from "../constant";
import { DocNavListType } from "../type";
import {
  FxButton,
  FxFavIcon,
  FxPopupRadio,
  ArrowLeftSolidIcon,
  RightArrowIcon,
  SolidLineIcon,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@fluctux/ui";
import { DOC_TYPE } from "@/constants/docs";
import { useToggleOpen } from "@fluctux/hooks";
import { FoldVertical, LocateFixed, UnfoldVertical } from "lucide-react";

export interface DocSidebarPropsType {
  docType: string;
  data: {
    docNavList: DocNavListType[];
  };
}

export default function DocSidebar({ docType, data }: DocSidebarPropsType) {
  const path_name = usePathname();
  const { handleOpenArray, isOpenFromArray, setOpenArray } = useToggleOpen({});
  const {
    isOpen: isDocAsideOpen,
    setOpen: setDocAsideOpen,
    toggle: docAsideToggleOpen,
  } = useToggleOpen({
    id: "doc-aside",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const lessons = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [focus, setFocus] = useState(false);

  const handleDocTypeChange = useCallback(
    (value: string) => {
      localStorage.removeItem(lessonKey);
      router.push(`/docs/${value}/01-get-started/01-introduction`);
    },
    [router]
  );

  const openChapterOnDemand = () => {
    const chapter_index = path_name
      .split("/")[3]
      ?.replace(/\D/g, "")
      .replace(/^0+/, "");

    if (chapter_index) {
      return setOpenArray((state) => ({
        ...state,
        [parseInt(chapter_index) - 1]: true,
      }));
    }
  };

  // Flatten the docNavList into a single list (excluding directories)
  const flattenDocs = useCallback(
    (list: DocNavListType[]): DocNavListType[] => {
      return list.flatMap((item) =>
        item.type === "dir" ? flattenDocs(item.docNavTreeList || []) : [item]
      );
    },
    []
  );

  const handleExpandChapters = () => {
    data.docNavList.map((navItem, i: number) => {
      if (navItem?.type === "dir") {
        setOpenArray((prevStates) => ({
          ...prevStates,
          [`${i}`]: true,
        }));
      }
    });
  };

  const handleCollapseChapters = () => {
    data.docNavList.map((navItem, i: number) => {
      if (navItem?.type === "dir") {
        setOpenArray((prevState) => ({
          ...prevState,
          [`${i}`]: false,
        }));
      }
    });
  };

  useEffect(() => {
    setDocAsideOpen(false);

    const flatDocList = flattenDocs(data.docNavList);

    // Find current document index
    const currentIndex = flatDocList.findIndex((navItem) =>
      path_name.endsWith(
        navItem.path.replace("src/content/docs/", "").replace(".mdx", "")
      )
    );
    if (currentIndex !== -1) {
      dispatch(setPagination({ currentIndex, flatDocList }));
    } else {
      // If the document is not found, reset pagination state
      dispatch(setPagination({ currentIndex: -1, flatDocList: [] }));
    }
  }, [dispatch, flattenDocs, data.docNavList, path_name, handleDocTypeChange]);

  useEffect(() => {
    openChapterOnDemand();
  }, [path_name]);

  useEffect(() => {
    const lesson = localStorage.getItem(lessonKey);
    if (lesson && lessons.current[lesson]) {
      setTimeout(() => {
        lessons.current[lesson]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 500);
    }
  }, [focus]);

  const goToReading = () => {
    handleCollapseChapters()
    openChapterOnDemand();
    setFocus(!focus);
  };

  useEffect(() => {
    handleExpandChapters()
  }, [])

  return (
    <>
      <aside
        className={`w-[250px] h-screen sticky top-0 bg-background-color_1 flex-shrink-0 doc-aside-nav transition-all duration-150 ease-out ${isDocAsideOpen ? "left-0" : " doc-aside-nav-off"}`}
      >
        <div
          onClick={docAsideToggleOpen}
          className={`w-[15px] hidden absolute right-0 top-0 h-screen justify-center items-center doc-aside-toggle-btn`}
        >
          <SolidLineIcon
            className={`absolute ${isDocAsideOpen && "hidden"}`}
            width={34}
            height={34}
          />
          <ArrowLeftSolidIcon
            className={`absolute ${!isDocAsideOpen && "hidden"} `}
          />
        </div>
        <nav className="h-[calc(100%-105px)] sticky top-[105px] overflow-y-scroll custom-scrollbar doc-hide-scrollbar pr-2 pb-24 doc-aside-nav-container">
          <FxButton
            variant="secondary"
            className="w-full fx-flex-cl gap-2 p-2 mb-3 "
            radius="primary"
          >
            <div className="p-2 rounded-[5px]">
              <FxFavIcon size="sm" variant="default" />
            </div>
            <div className="text-left">
              <p className="font-medium">Fluctux</p>
              <p className="text-text-color_2 text-[13px]">
                v{FLUCTUX_VERSION}
              </p>
            </div>
          </FxButton>

          <FxPopupRadio
            onValueChange={handleDocTypeChange}
            align="start"
            classNames={{
              button:
                "fx-flex-cl rounded-[8px] gap-2 mb-3 p-2 w-full bg-background-color_2 sticky top-[0px] z-[20] font-medium",
              activeLabel:
                "hover:bg-[var(--background-color-3)_!important] bg-[var(--background-color-3)]",
              label: "w-full fx-secondary-hover-bg p-2 hover:bg-[transparent] group",
              layout: "w-[230px] p-[0px_!important] overflow-hidden",
              labelIconContainer:
                " p-2 rounded-[5px] bg-[var(--indigo-transparent-1st)] group-hover:border group-hover:fx-primary-purple-border",
              buttonSvgContainer:
                " p-2 rounded-[5px] bg-[var(--indigo-transparent-1st)] ",
            }}
            alignItems="vertical"
            buttonType="modern"
            items={DOC_TYPE}
            initialValue={`${docType}`}
            closeMenuOnSelect={true}
            showDescInButton={true}
          />

          <div className="w-full p-1 mb-3 border-border-color_1 rounded-[5px] backdrop-blur-md z-[15] sticky top-[60px] fx-flex-cl gap-2">
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <FxButton
                    variant="silent"
                    className="px-2 py-[2px] text-[15px] fx-flex-cl gap-2"
                    radius="tiny"
                    onClick={() => goToReading()}
                  >
                    <LocateFixed color="var(--foreground-color-2)" size={18} />
                    Focus
                  </FxButton>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="start">
                  <p className="text-text-color_2" >Distraction-free mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex flex-col gap-2 w-full">
            {data.docNavList.map((navItem, i) => {
              return (
                <div key={i}>
                  {navItem.type === "dir" ? (
                    <button
                      className={`font-medium text-[15px] relative z-[2] hover:bg-background-color_2 transition w-full fx-flex-between-ic p-1 pl-2 pr-2 rounded-[5px] text-text-color_2 ${isOpenFromArray(`${i}`) && "text-[var(--foreground)_!important]"} ${path_name.includes(navItem.path.split("/").slice(-1).toString()) && "text-[var(--primary-color)_!important] "}`}
                      onClick={() => handleOpenArray(`${i}`)}
                    >
                      <span>
                        {navItem.name
                          .replace(/^\d+-/, "")
                          .replace(/-/g, " ")
                          .replace(/^\w/, (c) => c.toUpperCase())}
                      </span>
                      <RightArrowIcon
                        className={`${isOpenFromArray(`${i}`) ? "rotate-90" : "rotate-0"} transition-all duration-150`}
                      />
                    </button>
                  ) : (
                    <Link
                      key={i}
                      href={`/docs/${navItem.path.replace("src/content/docs/", "").replace(".mdx", "")}`}
                      onClick={() => {
                        localStorage.setItem(lessonKey, path_name);
                      }}
                    >
                      <button
                        className={`font-medium text-[15px] hover:bg-background-color_2 transition hover:text-[var(--foreground)] w-full fx-flex-between-ic p-1 pl-2 pr-2 rounded-[5px] text-text-color_2 ${path_name.endsWith(`${navItem.name.replace(".mdx", "")}`) && "bg-background-color_2 text-[var(--primary-color)_!important]"}`}
                      >
                        <span>
                          {navItem.name
                            .replace(/^\d+-/, "")
                            .replace(/-/g, " ")
                            .replace(/^\w/, (c) => c.toUpperCase())
                            .replace(".mdx", "")}
                        </span>
                      </button>
                    </Link>
                  )}

                  {
                    // if there are type=file don't show this else show
                    navItem.type === "dir" && (
                      <div
                        className={`ml-2 text-[15px] pl-2 flex relative flex-col border-l border-border-color_1 text-text-color_2 font-medium transition-all duration-150 ease-in-out ${isOpenFromArray(`${i}`) ? "max-h-full pt-2 pb-2  opacity-100" : "max-h-0 h-0 opacity-0 pt-0 pb-0"} overflow-hidden origin-top `}
                      >
                        <div
                          className={`absolute z-[5] w-full  bg-gradient-to-t from-[var(--background)] to-transparent transition-all duration-700  bottom-0 origin-bottom h-full ${isOpenFromArray(`${i}`) ? "scale-y-0 h-0" : "scale-y-100"}`}
                        ></div>
                        {navItem.docNavTreeList?.map((navTreeItem, j) => {
                          const slug = `/docs/${navTreeItem.path.replace("src/content/docs/", "").replace(".mdx", "")}`;
                          return (
                            <Link
                              key={j}
                              ref={(el) => {
                                lessons.current[slug] = el;
                              }}
                              href={slug}
                              className={`p-1 pl-3 pr-0 dark:hover:text-fx_zinc-50 hover:text-fx_zinc-950 relative hover:bg-background-color_2 transition rounded-[5px] ${path_name.endsWith(`${navTreeItem.name.replace(".mdx", "")}`) && "text-text-indigo-color_1 bg-background-color_2 hover:text-[var(--primary-color)_!important]"}`}
                              onClick={(e) => {
                                path_name === slug && e.preventDefault();
                                localStorage.setItem(lessonKey, slug);
                              }}
                            >
                              <span>
                                {navTreeItem.name
                                  .replace(/^\d+-/, "")
                                  .replace(/-/g, " ")
                                  .replace(/^\w/, (c) => c.toUpperCase())
                                  .replace(".mdx", "")}
                              </span>
                              {path_name.endsWith(
                                `${navTreeItem.name.replace(".mdx", "")}`
                              ) && (
                                  <span className="absolute transition left-[-0px] top-[50%] translate-y-[-50%] h-[17px] w-[3px] bg-background-indigo_primary z-10 rounded-[50px] "></span>
                                )}
                            </Link>
                          );
                        })}
                      </div>
                    )
                  }
                </div>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
}
