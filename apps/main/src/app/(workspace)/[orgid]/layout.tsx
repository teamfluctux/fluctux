"use client";
import React, { useEffect, useRef, useState } from "react";
import { useThemeSwitcher, useToggleOpen } from "@fluctux/hooks";
import {
  cn,
  FadeFavLoading,
  FxButton,
  FxFavIcon,
  LUCIDE_WORKSPACE_ICON_SIZE,
} from "@fluctux/ui";
import { Rnd } from "react-rnd";
import {
  CircleHelp,
  LogOut,
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
import { workspaceContext } from "@/context/workspace-context";

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

const DynamicTaskBarAndTabs = dynamic(
  () =>
    import("@/components/workspace/main-area").then((mod) => mod.RndWindows),
  {
    ssr: false,
    loading: () => (
      <div
        className={cn(
          "w-[100%] max-w-[500px] z-50 absolute bottom-0 p-2 bg-transparent transition-all duration-300 overflow-hidden"
        )}
      >
        <div className="w-full h-[50px] rounded-tiny backdrop-blur-lg p-1 fx-flex-cl gap-1 overflow-hidden ">
          <Skeleton
            width={40}
            height={40}
            borderRadius={"5px"}
            className="border border-border-color_1"
          />
          <Skeleton
            width={40}
            height={40}
            borderRadius={"5px"}
            className="border border-border-color_1"
          />
          <Skeleton
            width={40}
            height={40}
            borderRadius={"5px"}
            className="border border-border-color_1"
          />
        </div>
      </div>
    ),
  }
);

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

export default function Layout({ children }: WorkspaceLayoutProps) {
  // ==========================================================================
  //                                 Sidebar
  // ==========================================================================
  const [sidebarSize, setSidebarSize] = useState<number | null>(null);
  const { isOpen: isSidebarOpen, toggle: toggleSidebarOpen } = useToggleOpen({
    id: "workspace-sidebar-rnd",
  });
  const parentRef = useRef<HTMLDivElement | null>(null);

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

  const { ThemeSwitcher } = useThemeSwitcher(THEME_ICONS);

  if (sidebarSize === null)
    return (
      <>
        <div className="w-full h-screen fx-flex-center bg-background-color_1">
          <FadeFavLoading />
        </div>
      </>
    );

  return (
    <>
      <workspaceContext.Provider value={{ parentRef, sidebarSize }}>
        <div
          className={cn(
            "flex justify-center items-center w-full overflow-hidden"
          )}
        >
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
                            isCommandOpen ? "bg-background-transparent-indigo_1 hover:bg-background-transparent-indigo_2 border border-border-primary_indigo" : ""
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
                      <ul className="text-workspace_2 font-medium leading-7">
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
                        src={"/placeholder_img.png"}
                        width={500}
                        height={500}
                        className="w-[35px] flex-shrink-0 overflow-hidden cursor-pointer h-[35px]  rounded-tiny object-cover object-center border border-border-color_1 "
                        alt="profile-image"
                      /> 
                      <div className="fx-flex-between-ic w-full">
                        <div className="text-left leading-[16px]">
                          <h3 className="text-workspace_1 font-medium">
                            Mahin
                          </h3>
                          <p className="text-workspace_3 text-text-color_2">
                            nimulmahin@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent align="end" side="right">
                    <div className="w-[200px] bg-background-color_4 border border-border-color_2 rounded">
                      <ul className="text-workspace_2 font-medium leading-7">
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
          <div
            ref={parentRef}
            className={cn("w-full h-screen bg-background-color_2 relative")}
          >
            <div className="border-b border-border-color_1 w-full h-[40px] sticky top-0 fx-flex-center">
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

            {/* taskbar uncomment this */}
            {sidebarSize !== null && <DynamicTaskBarAndTabs />}
          </div>
        </div>
      </workspaceContext.Provider>
    </>
  );
}
