"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTaskBar, useThemeSwitcher, useToggleOpen } from "@fluctux/hooks";
import {
  cn,
  FadeFavLoading,
  FxButton,
  FxFavIcon,
  InlineLoading,
  LUCIDE_WORKSPACE_ICON_SIZE,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TopLoading,
} from "@fluctux/ui";
import { Rnd } from "react-rnd";
import {
  CircleDot,
  CircleHelp,
  Copy,
  FileText,
  LogOut,
  Maximize,
  Minimize,
  Minus,
  PanelLeft,
  PanelLeftClose,
  Settings,
  X,
} from "lucide-react";
import { THEME_ICONS } from "@/constants/global";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@fluctux/ui";
import Link from "next/link";
import {
  ACCOUNT_MENU_ITEMS,
  FIND_HELP_ITEMS,
  ICON_DEFAULT_COLOR,
  WHATS_NEW_ITEMS,
} from "@/constants/workspace";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

const TASK_BAR_ITEMS = [
  {
    slug: "my-issues",
    label: "My issues"
  },
  {
    slug: "my-new-page",
    label: "My new page"
  },
  {
    slug: "my-two-page",
    label: "My two page"
  }
]

const DynamicSidebarBottom = dynamic(
  () =>
    import("@/components/workspace/sidebar").then((mod) => mod.SidebarBottom),
  {
    ssr: false,
    loading: () => (
      <div className="h-[calc(100%-107px)] w-full overflow-y-auto custom-scrollbar p-2">
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <div key={i} className="mb-2">
              <Skeleton
                height={25}
                borderRadius={"5px"}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                width={200}
                height={25}
                borderRadius={"5px"}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                height={25}
                borderRadius={"5px"}
                style={{ marginBottom: "2px" }}
              />
              <Skeleton
                width={180}
                height={25}
                borderRadius={"5px"}
                style={{ marginBottom: "2px" }}
              />
            </div>
          );
        })}
      </div>
    ),
  }
);

const DynamicSidebarCommandMenu = dynamic(
  () => import("@/components/workspace/sidebar").then((mod) => mod.CommandMenu),
  {
    ssr: false,
    loading: () => (
      <div className="w-[200px] p-2 border-border-color_1 overflow-hidden bg-background-color_1 border rounded h-[400px]">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <div key={i} className="mb-1">
              <Skeleton height={25} borderRadius={"5px"} />
            </div>
          );
        })}
      </div>
    ),
  }
);

interface TabsRndType {
  id?: number | null,
  size?: {
    width: number, height: number
  },
  position?: {
    x: number,
    y: number
  },
  isActive?: boolean,
  slug?: string,
  label?: string,
  isMaximized?: boolean
}

export default function Layout({ children }: WorkspaceLayoutProps) {

  // ==========================================================================
  //                                 Sidebar
  // ==========================================================================
  const [sidebarSize, setSidebarSize] = useState<Number | null>(null);
  const { isOpen: isSidebarOpen, toggle: toggleSidebarOpen } = useToggleOpen({
    id: "workspace-sidebar-rnd",
  });

  const saveWidth = (width: string) => {
    localStorage.setItem("workspaceSidebarWidth", width);
  };

  useEffect(() => {
    // Load saved width from storage
    const savedSize = localStorage.getItem("workspaceSidebarWidth");
    if (savedSize) {
      setSidebarSize(parseInt(savedSize, 10));
    } else {
      setSidebarSize(250); // Default value
    }
  }, []);


  // ==========================================================================
  //                               Menu States
  // ==========================================================================
  const [isCommandOpen, setIsCommandOpen] = useState<boolean | null>(null);
  const [isWhatsNewMenuOpen, setIsWhatsNewMenuOpen] = useState<boolean | null>(
    null
  );
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean | null>(
    null
  );

  // ==========================================================================
  //                               Task bar
  // ==========================================================================
  const {
    showTaskBar,
    setShowTaskbar,
    allowIntelligentAutoHideTaskBar,
    setAllowIntelligentAutoHideTaskBar,
    taskbarItems,
    setTaskbarItems,
    isDragStart,
    setIsDragStart,
    tabs,
    setTabs,
    updateTab,
    handleCloseTab,
    parentRef,
    handleMaxMinTabSize,
    handleNewTab
  } = useTaskBar({ taskbarHoverItems: TASK_BAR_ITEMS })

  const { ThemeSwitcher } = useThemeSwitcher(THEME_ICONS);

  if (sidebarSize === null) return <>
    <div className="w-full h-screen fx-flex-center bg-background-color_1">
      <FadeFavLoading />
    </div>
  </>

  return (
    <>
      <div className={cn("flex justify-center items-center w-full overflow-hidden", sidebarSize !== null && "animate-scaleUp")}>

        <Rnd
          minWidth={250}
          maxWidth={350}
          size={{ width: sidebarSize?.toString() || "250px", height: "100%" }}
          bounds="window"
          disableDragging={true}
          enableResizing={{
            top: false,
            right: true,
            bottom: false,
            left: false,
          }}
          resizeHandleClasses={{
            right: "right-handler-box",
          }}
          style={{ position: "unset" }}
          className={cn(
            "overflow-hidden transition-all duration-500 bg-background-color_1 rnd-workspace-sidebar",
            isSidebarOpen ? "left-[0%_!important]" : "left-[-100%_!important]"
          )}
          onResize={(e, direction, ref, delta, position) => {
            ref.style.transition = "none";
            setSidebarSize(ref.offsetWidth);
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            saveWidth(ref.style.width);
          }}
        >
          <div className="w-full h-screen border-r border-border-color_1">
            {/* ==========================================================================
                                            Top sidebar
          ========================================================================== */}
            <div className="w-full border-b border-border-color_1 h-[50px]">
              <div className="w-full p-2 fx-flex-between-ic">
                <div className="fx-flex-cl gap-1">
                  <Popover onOpenChange={(open) => setIsCommandOpen(open)}>
                    <PopoverTrigger asChild>
                      <div
                        className={cn(
                          "w-[30px] h-[30px] hover:bg-background-color_2 cursor-pointer fx-flex-center rounded-tiny",
                          isCommandOpen ? "bg-background-color_3" : ""
                        )}
                      >
                        <FxFavIcon customSize={15} variant="theme" />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent align="start">
                      {isCommandOpen && <DynamicSidebarCommandMenu />}
                    </PopoverContent>
                  </Popover>

                  <h1 className="font-medium text-workspace_1">NI, Org</h1>
                </div>
                <FxButton
                  variant="silent"
                  className="w-[30px] h-[30px] fx-flex-center rounded-tiny"
                >
                  <Settings
                    color={ICON_DEFAULT_COLOR}
                    size={LUCIDE_WORKSPACE_ICON_SIZE}
                  />
                </FxButton>
              </div>
            </div>

            {/* ==========================================================================
                                          Middle Sidebar
          ========================================================================== */}
            {<DynamicSidebarBottom />}

            {/* ==========================================================================
                                         Bottom Sidebar
          ========================================================================== */}
            <div className="w-full h-[56px] fx-flex-between-ic px-2 gap-1">
              <Popover onOpenChange={(open) => setIsWhatsNewMenuOpen(open)}>
                <PopoverTrigger asChild>
                  <div
                    className={cn(
                      "rounded-circle flex-shrink-0 p-2 text-text-svg_default hover:bg-background-color_2 cursor-pointer",
                      isWhatsNewMenuOpen
                        ? "bg-background-color_3 text-text-color_1"
                        : ""
                    )}
                  >
                    <CircleHelp size={LUCIDE_WORKSPACE_ICON_SIZE} />
                  </div>
                </PopoverTrigger>
                <PopoverContent align="start" side="top">
                  <div className="bg-background-color_4 border border-border-color_2 rounded  w-[200px]">
                    <ul className="text-workspace_1 font-medium leading-7">
                      <div className="p-1">
                        {FIND_HELP_ITEMS.map((item, index) => (
                          <Link href={item.slug} key={index}>
                            <li className="fx-flex-cl gap-2  group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_4 hover:text-text-color_1">
                              <div className="text-text-svg_default group-hover:text-text-color_1">
                                {item.icon}
                              </div>
                              <span>{item.label}</span>
                            </li>
                          </Link>
                        ))}
                      </div>

                      <div className="p-1 border-t border-border-color_2">
                        <p className="text-workspace_3 font-medium text-text-color_3 px-2">
                          Whats New?
                        </p>
                        {WHATS_NEW_ITEMS.map((item, index) => (
                          <Link href={item.slug} key={index}>
                            <li className="fx-flex-cl gap-2  group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_4 hover:text-text-color_1">
                              <div className="text-text-svg_default group-hover:text-text-color_1">
                                {item.icon}
                              </div>
                              <span>{item.label}</span>
                            </li>
                          </Link>
                        ))}
                      </div>
                    </ul>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover onOpenChange={(open) => setIsAccountMenuOpen(open)}>
                <PopoverTrigger asChild>
                  <div
                    className={cn(
                      "fx-flex-cl w-full rounded-tiny hover:bg-background-color_2 gap-2 cursor-pointer p-1",
                      isAccountMenuOpen ? "bg-background-color_3" : ""
                    )}
                  >
                    <Image
                      src={""}
                      width={500}
                      height={500}
                      className="w-[35px] flex-shrink-0 overflow-hidden cursor-pointer h-[35px]  rounded-tiny object-cover object-center border border-border-color_1 "
                      alt="profile-image"
                    />
                    <div className="fx-flex-between-ic w-full">
                      <div className="text-left leading-[16px]">
                        <h3 className="text-workspace_1 font-medium">Mahin</h3>
                        <p className="text-workspace_3 text-text-color_2">
                          nimulmahin@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent align="end" side="right">
                  <div className="w-[200px] bg-background-color_4 border border-border-color_2 rounded">
                    <ul className="text-workspace_1 font-medium leading-7">
                      <div className="p-1 ">
                        {ACCOUNT_MENU_ITEMS.map((item, index) => (
                          <Link href={item.slug} key={index}>
                            <li className="fx-flex-cl gap-2  group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_4 hover:text-text-color_1">
                              <div className="text-text-svg_default group-hover:text-text-color_1">
                                {item.icon}
                              </div>
                              <span>{item.label}</span>
                            </li>
                          </Link>
                        ))}
                      </div>

                      <div className="p-1 border-t border-border-color_2">
                        <li className="fx-flex-cl w-full cursor-pointer group gap-2 hover:bg-background-color_5 rounded-tiny px-2 text-text-color_4 hover:text-red-500">
                          <div className="text-text-svg_default group-hover:text-red-500">
                            <LogOut size={LUCIDE_WORKSPACE_ICON_SIZE} />
                          </div>
                          <span>Log out</span>
                        </li>
                      </div>
                    </ul>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </Rnd>

        {/* ==========================================================================
                                      Content
      ========================================================================== */}
        <div ref={parentRef} className={cn("w-full h-screen bg-background-color_2")}>
          <div className="border-b border-border-color_1 w-full h-[40px] relative fx-flex-center">
            <div
              className="w-[30px] h-[30px] fx-flex-center rounded-[5px] absolute left-1 hover:bg-background-color_3 cursor-pointer z-[50] text-text-svg_default hover:text-text-color_1"
              onClick={toggleSidebarOpen}
            >
              {isSidebarOpen ? (
                <PanelLeftClose size={LUCIDE_WORKSPACE_ICON_SIZE} />
              ) : (
                <PanelLeft size={LUCIDE_WORKSPACE_ICON_SIZE} />
              )}
            </div>
          </div>

          {children}

          {
            tabs.map((tab, i) => {
              if (tab.id === null) return
              return <Rnd
                key={tab.id}
                size={tab.size}
                position={tab.position}
                minWidth={280}
                minHeight={400}
                bounds="parent"
                onResize={(e, direction, ref, delta, pos) => {
                  setIsDragStart(true)
                  updateTab(tab.id || 0, {
                    size: { width: ref.offsetWidth, height: ref.offsetHeight },
                    position: pos,
                  });
                }}
                onDragStop={(e, d) => {
                  updateTab(tab.id!, { position: { x: d.x, y: d.y } });
                  setIsDragStart(false);
                }}
                onResizeStop={(e, direction, ref, delta, pos) => {
                  setIsDragStart(false)
                }}
                onDrag={() => updateTab(tab.id!, { isActive: true })}
                onDragStart={() => setIsDragStart(true)}
                dragHandleClassName="drag-handle"
                className={cn("border border-border-color_2  rounded overflow-hidden cursor-[default_!important] transition-all bg-background-color_2 shadow-xl ", tab.isActive ? "z-50" : "z-1", isDragStart && "transition-none", tab.isActive && "border-border-primary_indigo")}
              >
                <div className="h-[30px] border-b border-border-color_2 fx-flex-between-ic pl-2 pr-1 bg-background-color_3 drag-handle">
                  <h3 className="font-medium text-workspace_2">My Issue</h3>
                  <div className="fx-flex-cr gap-2">
                    <span className="hover:bg-background-color_2 p-[2px] rounded-tiny cursor-pointer">
                      <Minus size={LUCIDE_WORKSPACE_ICON_SIZE} />
                    </span>
                    <span className="hover:bg-background-color_2 p-[2px] rounded-tiny cursor-pointer"  >
                      {
                        !tab.isMaximized &&
                        <Minimize onClick={() => handleMaxMinTabSize(tab.id!)} size={16} />
                      }
                      {
                        tab.isMaximized &&
                        <Maximize onClick={() => handleMaxMinTabSize(tab.id!)} size={16} />

                      }
                    </span>

                    <span onClick={() => handleCloseTab(tab.id!)} className="p-[2px] cursor-pointer rounded-tiny hover:bg-red-600">
                      <X size={LUCIDE_WORKSPACE_ICON_SIZE} />
                    </span>
                  </div>
                </div>
                <div>
                  {tab.label}
                </div>
              </Rnd>

            })
          }

          {/* ==========================================================================
                                      Taskbar
      ========================================================================== */}
          <div className={cn("w-[100%] max-w-[500px] z-50 absolute bottom-[-57px] p-2 bg-transparent transition-all duration-300", allowIntelligentAutoHideTaskBar ? showTaskBar && "bottom-0 " : "bottom-0")} onMouseEnter={() => allowIntelligentAutoHideTaskBar && setShowTaskbar(true)} onMouseLeave={() => allowIntelligentAutoHideTaskBar && setShowTaskbar(false)}>

            <div className="w-full h-[50px] rounded-tiny border border-border-color_2 backdrop-blur-lg fx-flex-cl p-1 gap-1 ">

              <TooltipProvider delayDuration={0.1}>
                <Tooltip>
                  <TooltipTrigger asChild>

                    <div className={cn("hover:bg-background-color_3  hover:border-border-color_2 hover:border w-[40px] h-[40px] rounded-tiny relative fx-flex-center")}>
                      <div>
                        <CircleDot size={LUCIDE_WORKSPACE_ICON_SIZE} />
                      </div>
                      <div className={cn("bottom_bar w-[10px] h-[3px] transition-all duration-300 rounded-tablet dark:bg-zinc-400 absolute bottom-0 left-[50%] translate-x-[-50%]", tabs.find((tab) => tab.isActive) && "dark:bg-background-indigo_primary w-[25px]")}></div>
                    </div>

                  </TooltipTrigger>

                  <TooltipContent align="start" sideOffset={15} className="z-[52] bg-background-color_3 fx-flex-between-ic gap-1 p-1 w-fit h-[150px] border border-border-color_2 rounded-[8px_!important]">
                    {
                      taskbarItems.map((item, i) => (
                        <div onClick={() => {
                          handleNewTab(
                            {
                              id: i,
                              size: { width: 700, height: 500 },
                              position: { x: 50 + i * 50, y: 50 + i * 50 },
                              isActive: true,
                              slug: item.slug,
                              label: item.label,
                            }
                          )
                        }} className="w-[200px] group overflow-hidden h-[140px] border border-border-color_1 hover:border-border-primary_indigo transition-colors duration-150 rounded-tiny  backdrop-blur-lg bg-background-color_2">
                          <div className="w-full group-hover:text-text-color_1 py-1 px-2 text-workspace_3 text-text-color_2 border-b border-border-color_1" >{item.label}</div>
                        </div>
                      ))
                    }
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>


              <div className=" w-[40px] h-[40px] rounded-tiny hover:bg-background-color_3 relative fx-flex-center">
                <div className="fx-flex-center">
                  <FileText size={LUCIDE_WORKSPACE_ICON_SIZE} />
                </div>
                {/* <div className="bottom_bar w-[25px] h-[4px] rounded-tablet bg-background-indigo_primary absolute bottom-0 left-[50%] translate-x-[-50%]"></div> */}
              </div>

              <div className=" hover:bg-background-color_3 w-[40px] h-[40px] rounded-tiny relative fx-flex-center">
                {/* <div className="bottom_bar w-[25px] h-[4px] rounded-tablet bg-background-indigo_primary absolute bottom-0 left-[50%] translate-x-[-50%]"></div> */}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
