"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useTaskBar } from "@/hooks/useTaskBar";
import {
  cn,
  FadeFavLoading,
  LUCIDE_WORKSPACE_ICON_SIZE,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@fluctux/ui";
import {
  CircleDot,
  FileText,
  Maximize,
  Minimize,
  Minus,
  X,
} from "lucide-react";
import { TaskbarCategoriesType } from "@fluctux/types";
import dynamic from "next/dynamic";

const DynamicRnd = dynamic(() => import("react-rnd").then((mod) => mod.Rnd), {
  ssr: false,
  loading: () => (
    <>
      <div className="w-full h-full absolute z-20 top-0 fx-flex-center bg-background-color_950C">
        <FadeFavLoading />
      </div>
    </>
  ),
});

const TASK_BAR_ITEMS = [
  {
    slug: "my-issues",
    label: "My issues",
  },
  {
    slug: "my-new-page",
    label: "My new page",
  },
  {
    slug: "my-two-page",
    label: "My two page",
  },
];

export const RndWindows = () => {
  const {
    showTaskBar,
    setShowTaskbar,
    allowIntelligentAutoHideTaskBar,
    setAllowIntelligentAutoHideTaskBar,
    isDragStart,
    setIsDragStart,
    parentRef,
    tabs,
    updateTabInCategory,
    handleCloseTab,
    handleMaxMinTabSize,
    handleAddNewTab,
  } = useTaskBar();

  const [taskbarItems, setTaskbarItems] = useState(TASK_BAR_ITEMS);

  const [enabledTopWindow, setEnabledTopWindow] = useState(false);
  const [enabledLeftWindow, setEnabledLeftWindow] = useState(false);
  const [enabledRightWindow, setEnabledRightWindow] = useState(false);
  const [enabledBottomWindow, setEnabledBottomWindow] = useState(false);
  const [enabledFullWindow, setEnabledFullWindow] = useState(false);

  const handleEnableTopWindow = () => {
    setEnabledTopWindow(true);

    setEnabledFullWindow(false);
    setEnabledBottomWindow(false);
    setEnabledLeftWindow(false);
    setEnabledRightWindow(false);
  };

  const handleEnableFullWindow = () => {
    setEnabledFullWindow(true);

    setEnabledBottomWindow(false);
    setEnabledLeftWindow(false);
    setEnabledRightWindow(false);
    setEnabledTopWindow(false);
  };

  const handleEnableRightWindow = () => {
    setEnabledRightWindow(true);

    setEnabledFullWindow(false);
    setEnabledBottomWindow(false);
    setEnabledLeftWindow(false);
    setEnabledTopWindow(false);
  };

  const handleEnableLeftWindow = () => {
    setEnabledLeftWindow(true);

    setEnabledFullWindow(false);
    setEnabledBottomWindow(false);
    setEnabledRightWindow(false);
    setEnabledTopWindow(false);
  };

  const handleEnableBottomWindow = () => {
    setEnabledBottomWindow(true);

    setEnabledFullWindow(false);
    setEnabledLeftWindow(false);
    setEnabledRightWindow(false);
    setEnabledTopWindow(false);
  };

  const handleDisableWindowPlaceholders = () => {
    setEnabledFullWindow(false);
    setEnabledBottomWindow(false);
    setEnabledLeftWindow(false);
    setEnabledRightWindow(false);
    setEnabledTopWindow(false);
  };

  useEffect(() => {
    setAllowIntelligentAutoHideTaskBar(false);
  }, []);

  const isTabActive = Object.values(tabs).some((category) =>
    category.tabs.some((tab) => tab.isActive)
  );

  const isTabActiveInCategory = useCallback(
    (category: TaskbarCategoriesType) => {
      return tabs[category]?.tabs.some((tab) => tab.isActive);
    },
    [tabs]
  );

  return (
    <>
      {/* windows placeholders */}
      <>
        <div
          className={cn(
            "w-full h-full absolute hidden opacity-[20%] top-0 left-0 p-2 z-10",
            enabledFullWindow && "animate-fadeUpWinPlaceHolder flex"
          )}
        >
          <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>

        <div
          className={cn(
            "w-full h-1/2 absolute hidden opacity-[20%] top-0 left-0 z-10 p-2",
            enabledTopWindow && "animate-fadeUpWinPlaceHolder flex"
          )}
        >
          <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>

        <div
          className={cn(
            "w-1/2 h-full absolute hidden opacity-[20%] top-0 left-0 z-10 p-2",
            enabledLeftWindow && "animate-fadeUpWinPlaceHolder flex"
          )}
        >
          <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>

        <div
          className={cn(
            "w-1/2 h-full absolute hidden opacity-[20%] top-0 right-0 z-10 p-2",
            enabledRightWindow && "animate-fadeUpWinPlaceHolder flex"
          )}
        >
          <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>

        <div
          className={cn(
            "w-full h-1/2 absolute hidden opacity-[20%] bottom-0 left-0 z-10 p-2",
            enabledBottomWindow && "animate-fadeUpWinPlaceHolder flex"
          )}
        >
          <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>
      </>

      {Object.entries(tabs).map(([tabType, category]) => {
        const key = tabType as TaskbarCategoriesType;
        if (!key) return;
        return category.tabs.map((tab, i) => {
          return (
            <>
              {category.tabs.length > 0 && (
                <DynamicRnd
                  onMouseDown={() =>
                    updateTabInCategory(key, tab.id!, { isActive: true })
                  }
                  key={i}
                  size={{
                    width: tab.size?.width || 700,
                    height: tab.size?.height || 500,
                  }}
                  position={tab.position}
                  minWidth={280}
                  minHeight={300}
                  bounds="parent"
                  onResize={(e, direction, ref, delta, pos) => {
                    setIsDragStart(true);
                    updateTabInCategory(key, tab.id!, {
                      size: {
                        width: ref.offsetWidth,
                        height: ref.offsetHeight,
                      },
                      position: pos,
                      isMaximized:
                        ref.offsetWidth === parentRef.current?.offsetWidth &&
                        ref.offsetHeight === parentRef.current?.offsetHeight,
                    });
                  }}
                  onResizeStop={(e, direction, ref, delta, pos) => {
                    setIsDragStart(false);
                  }}
                  onDrag={(e, d) => {
                    updateTabInCategory(key, tab.id!, { isActive: true });

                    if (
                      d.y < 30 &&
                      d.y !== 0 &&
                      d.x !== 0 &&
                      d.x + d.node.offsetWidth !==
                        parentRef.current?.offsetWidth!
                    ) {
                      // full window
                      handleEnableFullWindow();
                    } else if (
                      d.y === 0 &&
                      d.x !== 0 &&
                      tab.size?.height !== parentRef.current?.offsetHeight! &&
                      d.x + d.node.offsetWidth !==
                        parentRef.current?.offsetWidth!
                    ) {
                      // top window
                      handleEnableTopWindow();
                    } else if (
                      d.x === 0 &&
                      d.y !== 0 &&
                      tab.size?.width !== parentRef.current?.offsetWidth! &&
                      d.y + d.node.offsetHeight !==
                        parentRef.current?.offsetHeight
                    ) {
                      // left window
                      handleEnableLeftWindow();
                    } else if (
                      d.y !== 0 &&
                      d.x + d.node.offsetWidth ===
                        parentRef.current?.offsetWidth! &&
                      d.y + d.node.offsetHeight !==
                        parentRef.current?.offsetHeight &&
                      tab.size?.width !== parentRef.current?.offsetWidth
                    ) {
                      // right window
                      handleEnableRightWindow();
                    } else if (
                      d.y + d.node.offsetHeight ===
                        parentRef.current?.offsetHeight &&
                      d.x !== 0 &&
                      d.x + d.node.offsetWidth !==
                        parentRef.current?.offsetWidth &&
                      tab.size?.height !== parentRef.current?.offsetHeight
                    ) {
                      // bottom window
                      handleEnableBottomWindow();
                    } else {
                      handleDisableWindowPlaceholders();
                    }
                  }}
                  onDragStart={() => setIsDragStart(true)}
                  onDragStop={(e, d) => {
                    updateTabInCategory(key, tab.id!, {
                      position: { x: d.x, y: d.y },
                    });
                    setIsDragStart(false);
                    setEnabledFullWindow(false);
                    setEnabledBottomWindow(false);
                    setEnabledLeftWindow(false);
                    setEnabledRightWindow(false);
                    setEnabledTopWindow(false);

                    if (d.y < 30 && d.y !== 0 && d.x !== 0) {
                      // full window
                      updateTabInCategory(key, tab.id!, {
                        size: {
                          width: parentRef.current?.offsetWidth || 700,
                          height: parentRef.current?.offsetHeight || 500,
                        },
                        position: { x: 0, y: 0 },
                        isMaximized: true,
                      });
                    } else if (
                      d.y === 0 &&
                      d.x !== 0 &&
                      tab.size?.height !== parentRef.current?.offsetHeight! &&
                      d.x + d.node.offsetWidth !==
                        parentRef.current?.offsetWidth!
                    ) {
                      // top window
                      updateTabInCategory(key, tab.id!, {
                        size: {
                          width: parentRef.current?.offsetWidth || 700,
                          height: (parentRef.current?.offsetHeight || 500) / 2,
                        },
                        position: { x: 0, y: 0 },
                        isMaximized: false,
                      });
                    } else if (
                      d.x === 0 &&
                      d.y !== 0 &&
                      tab.size?.width !== parentRef.current?.offsetWidth! &&
                      d.y + d.node.offsetHeight !==
                        parentRef.current?.offsetHeight
                    ) {
                      // left window
                      updateTabInCategory(key, tab.id!, {
                        size: {
                          width: (parentRef.current?.offsetWidth || 700) / 2,
                          height: parentRef.current?.offsetHeight || 500,
                        },
                        position: { x: 0, y: 0 },
                        isMaximized: false,
                      });
                    } else if (
                      d.y + d.node.offsetHeight ===
                        parentRef.current?.offsetHeight &&
                      d.x !== 0 &&
                      d.x + d.node.offsetWidth !==
                        parentRef.current?.offsetWidth &&
                      tab.size?.height !== parentRef.current?.offsetHeight
                    ) {
                      // bottom window
                      updateTabInCategory(
                        key as TaskbarCategoriesType,
                        tab.id!,
                        {
                          size: {
                            width: parentRef.current?.offsetWidth || 700,
                            height:
                              (parentRef.current?.offsetHeight || 500) / 2,
                          },
                          position: {
                            x: 0,
                            y:
                              parentRef.current?.offsetHeight -
                              (parentRef.current?.offsetHeight || 500) / 2,
                          },
                          isMaximized: false,
                        }
                      );
                    } else if (
                      d.y !== 0 &&
                      d.x + d.node.offsetWidth ===
                        parentRef.current?.offsetWidth! &&
                      d.y + d.node.offsetHeight !==
                        parentRef.current?.offsetHeight &&
                      tab.size?.width !== parentRef.current?.offsetWidth
                    ) {
                      // right window
                      updateTabInCategory(key, tab.id!, {
                        size: {
                          width: (parentRef.current?.offsetWidth || 700) / 2,
                          height: parentRef.current?.offsetHeight || 500,
                        },
                        position: {
                          x:
                            parentRef.current?.offsetWidth! -
                            (parentRef.current?.offsetWidth || 700) / 2,
                          y: 0,
                        },
                        isMaximized: false,
                      });
                    }
                  }}
                  dragHandleClassName="drag-handle"
                  className={cn(
                    "border border-border-color_2 animate-fadeUp rounded overflow-hidden cursor-[default_!important] transition-all bg-background-color_900C shadow-xl ",
                    tab.isActive ? "z-50" : "z-1",
                    isDragStart && "transition-none",
                    tab.isActive &&
                      !tab.isMaximized &&
                      "border-border-primary_indigo",
                    tab.isMaximized && "border-none"
                  )}
                >
                  <div className="h-[30px] border-b border-border-color_2 fx-flex-between-ic pl-2 pr-1 bg-background-color_800C drag-handle">
                    <h3 className="font-medium text-workspace_2">My Issue</h3>
                    <div className="fx-flex-cr gap-2">
                      <span className="hover:bg-background-color_900C p-[2px] rounded-tiny cursor-pointer">
                        <Minus size={LUCIDE_WORKSPACE_ICON_SIZE} />
                      </span>
                      <span className="hover:bg-background-color_900C p-[2px] rounded-tiny cursor-pointer">
                        {!tab.isMaximized && (
                          <Maximize
                            onClick={(e) => {
                              e.preventDefault();
                              handleMaxMinTabSize(tab.id!, key);
                            }}
                            size={16}
                          />
                        )}
                        {tab.isMaximized && (
                          <Minimize
                            onClick={(e) => {
                              e.preventDefault();
                              handleMaxMinTabSize(tab.id!, key);
                            }}
                            size={16}
                          />
                        )}
                      </span>

                      <span
                        onClick={() => handleCloseTab(key, tab.id!)}
                        className="p-[2px] cursor-pointer rounded-tiny hover:bg-red-600"
                      >
                        <X size={LUCIDE_WORKSPACE_ICON_SIZE} />
                      </span>
                    </div>
                  </div>
                  <div>{tab.label}</div>
                </DynamicRnd>
              )}
            </>
          );
        });
      })}

      {/* ==========================================================================
                                      Taskbar
            ========================================================================== */}
      <div
        className={cn(
          "w-[100%] max-w-[500px] z-50 absolute bottom-[-57px] p-2 bg-transparent transition-all duration-300",
          allowIntelligentAutoHideTaskBar
            ? showTaskBar && "bottom-0 "
            : "bottom-0"
        )}
        onMouseEnter={() =>
          allowIntelligentAutoHideTaskBar && setShowTaskbar(true)
        }
        onMouseLeave={() =>
          allowIntelligentAutoHideTaskBar && setShowTaskbar(false)
        }
      >
        <div className="w-full h-fit rounded-tiny backdrop-blur-lg fx-flex-cl px-1 gap-1 ">
          <TooltipProvider delayDuration={0.1}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "hover:bg-background-color_750C h-[30px] cursor-pointer  px-2 rounded-tiny relative fx-flex-center",
                    isTabActiveInCategory("issues") &&
                      "bg-background-color_800C"
                  )}
                >
                  <div className="flex justify-center items-center gap-1">
                    <CircleDot size={16} className="text-text-svg_default" />
                    <span
                      className={`${isTabActiveInCategory("issues") ? "text-text-color_1" : "text-text-color_4"} text-workspace_2`}
                    >
                      Issues
                    </span>
                  </div>
                  <div
                    className={cn(
                      "bottom_bar w-[6px] h-[3px] transition-all duration-300 rounded-tablet dark:bg-zinc-400 absolute bottom-0 left-[50%] translate-x-[-50%]",
                      isTabActiveInCategory("issues") &&
                        "dark:bg-background-indigo_primary w-[15px]"
                    )}
                  ></div>
                </div>
              </TooltipTrigger>

              <TooltipContent
                align="start"
                sideOffset={15}
                className="z-[52] bg-background-color_800C fx-flex-between-ic gap-1 p-1 w-fit h-[150px] border border-border-color_2 rounded-[8px_!important]"
              >
                {taskbarItems.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      handleAddNewTab("issues", {
                        id: i,
                        size: { width: 700, height: 500 },
                        position: { x: 50 + i * 50, y: 50 + i * 50 },
                        isActive: true,
                        slug: item.slug,
                        label: item.label,
                      });
                    }}
                    className="w-[200px] group overflow-hidden h-[140px] border border-border-color_1 hover:border-border-primary_indigo transition-colors duration-150 rounded-tiny  backdrop-blur-lg bg-background-color_900C"
                  >
                    <div className="w-full group-hover:text-text-color_1 py-1 px-2 text-workspace_3 text-text-color_2 border-b border-border-color_1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={0.1}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "hover:bg-background-color_750C h-[30px] cursor-pointer  px-2 rounded-tiny relative fx-flex-center",
                    isTabActiveInCategory("pages") && "bg-background-color_800C"
                  )}
                >
                  <div className="flex justify-center items-center gap-1">
                    <FileText size={16} className="text-text-svg_default" />
                    <span
                      className={`${isTabActiveInCategory("pages") ? "text-text-color_1" : "text-text-color_4"} text-workspace_2`}
                    >
                      Pages
                    </span>
                  </div>
                  <div
                    className={cn(
                      "bottom_bar w-[6px] h-[3px] transition-all duration-300 rounded-tablet dark:bg-zinc-400 absolute bottom-0 left-[50%] translate-x-[-50%]",
                      isTabActiveInCategory("pages") &&
                        "dark:bg-background-indigo_primary w-[15px]"
                    )}
                  ></div>
                </div>
              </TooltipTrigger>
              <TooltipContent
                align="start"
                sideOffset={15}
                className="z-[52] bg-background-color_800C fx-flex-between-ic gap-1 p-1 w-fit h-[150px] border border-border-color_2 rounded-[8px_!important]"
              >
                {/* 
                DATA STRUCTURE FOR TASKBAR ITEMS
                KEEP ONE TOOLTIP PROVIDER AND MAP OVER THE ITEMS
                
                [key: string] {
                  label: string;
                  slug: string;
                }[] 
                 
                */}
               {taskbarItems.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      handleAddNewTab("pages", {
                        id: i,
                        size: { width: 700, height: 500 },
                        position: { x: 50 + i * 50, y: 50 + i * 50 },
                        isActive: true,
                        slug: item.slug,
                        label: item.label,
                      });
                    }}
                    className="w-[200px] group overflow-hidden h-[140px] border border-border-color_1 hover:border-border-primary_indigo transition-colors duration-150 rounded-tiny  backdrop-blur-lg bg-background-color_900C"
                  >
                    <div className="w-full group-hover:text-text-color_1 py-1 px-2 text-workspace_3 text-text-color_2 border-b border-border-color_1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* <div className=" hover:bg-background-color_800C w-[40px] h-[40px] rounded-tiny relative fx-flex-center"> 
           <div className="bottom_bar w-[25px] h-[4px] rounded-tablet bg-background-indigo_primary absolute bottom-0 left-[50%] translate-x-[-50%]"></div> 
         </div> */}
        </div>
      </div> 
    </>
  );
};
