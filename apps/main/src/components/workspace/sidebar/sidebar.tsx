"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import {
  cn,
  FxButton,
  FxFavIcon,
  LUCIDE_WORKSPACE_ICON_SIZE,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@fluctux/ui";
import { CircleHelp, LogOut, Settings, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ACCOUNT_MENU_ITEMS,
  FIND_HELP_ITEMS,
  ICON_DEFAULT_COLOR,
  WHATS_NEW_ITEMS,
} from "@/constants/workspace";
import { CommandMenuSkeleton, SidebarSkeletonLoading } from "./loading";
import dynamic from "next/dynamic";
import { useWorkspaceContext } from "@/context/workspace-context";
import { useToggleOpen } from "@fluctux/hooks";

const DynamicSidebarBottom = dynamic(
  () =>
    import("@/components/workspace/sidebar").then((mod) => mod.SidebarBottom),
  {
    ssr: false,
    loading: () => <SidebarSkeletonLoading />,
  }
);

const DynamicSidebarCommandMenu = dynamic(
  () => import("@/components/workspace/sidebar").then((mod) => mod.CommandMenu),
  {
    ssr: false,
    loading: () => <CommandMenuSkeleton />,
  }
);

export const WorkspaceSidebar = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebarOpen } = useToggleOpen({
    id: "workspace-sidebar-rnd",
  });
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
  const { parentRef, sidebarSize, setSidebarSize } = useWorkspaceContext();



  const saveWidth = useCallback((width: string) => {
    localStorage.setItem("workspaceSidebarWidth", width);
  }, [sidebarSize]);

  return (
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
        "overflow-hidden transition-all duration-500 bg-background-color_950C rnd-workspace-sidebar",
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
                      "w-[30px] h-[30px] hover:bg-background-color_900C cursor-pointer fx-flex-center rounded-tiny",
                      isCommandOpen
                        ? "bg-background-transparent-indigo_2 hover:bg-background-transparent-indigo_1 border border-border-primary_indigo"
                        : ""
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
              variant="ghost_zinc"
              className="w-[30px] h-[30px] fx-flex-center rounded-tiny group"
            >
              <Settings
                className="text-text-svg_default group-hover:text-text-color_1 transition-colors"
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
                  "rounded-circle flex-shrink-0 p-2 text-text-svg_default hover:bg-background-color_900C cursor-pointer",
                  isWhatsNewMenuOpen
                    ? "bg-background-color_800C text-text-color_1"
                    : ""
                )}
              >
                <CircleHelp size={LUCIDE_WORKSPACE_ICON_SIZE} />
              </div>
            </PopoverTrigger>
            <PopoverContent align="start" side="top">
              <div className="bg-background-color_850C border border-border-color_2 rounded  w-[200px]">
                <ul className="text-workspace_2 font-medium leading-7">
                  <div className="p-1">
                    {FIND_HELP_ITEMS.map((item, index) => (
                      <Link href={item.slug} key={index}>
                        <li className="fx-flex-cl gap-2  group hover:bg-background-color_750C rounded-tiny px-2 text-text-color_4 hover:text-text-color_1">
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
                        <li className="fx-flex-cl gap-2  group hover:bg-background-color_750C rounded-tiny px-2 text-text-color_4 hover:text-text-color_1">
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
                  "fx-flex-cl w-full rounded-tiny hover:bg-background-color_900C gap-2 cursor-pointer p-1",
                  isAccountMenuOpen ? "bg-background-color_800C" : ""
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
                    <h3 className="text-workspace_1 font-medium">Mahin</h3>
                    <p className="text-workspace_3 text-text-color_2">
                      nimulmahin@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent align="end" side="right">
              <div className="w-[200px] bg-background-color_850C border border-border-color_2 rounded">
                <ul className="text-workspace_2 font-medium leading-7">
                  <div className="p-1 ">
                    {ACCOUNT_MENU_ITEMS.map((item, index) => (
                      <Link href={item.slug} key={index}>
                        <li className="fx-flex-cl gap-2  group hover:bg-background-color_750C rounded-tiny px-2 text-text-color_4 hover:text-text-color_1">
                          <div className="text-text-svg_default group-hover:text-text-color_1">
                            {item.icon}
                          </div>
                          <span>{item.label}</span>
                        </li>
                      </Link>
                    ))}
                  </div>

                  <div className="p-1 border-t border-border-color_2">
                    <li className="fx-flex-cl w-full cursor-pointer group gap-2 hover:bg-background-color_750C rounded-tiny px-2 text-text-color_4 hover:text-red-500">
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
  );
};
