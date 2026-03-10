"use client";
import React, { useCallback, useState } from "react";
import { Rnd } from "react-rnd";
import {
  cn,
  FxFavIcon,
  LUCIDE_WORKSPACE_ICON_SIZE,
  Popover,
  PopoverContent,
  PopoverTrigger,
  FxPopover,
  type PopoverMenuDataType,
} from "@fluctux/ui";
import {
  BookOpen,
  CircleHelp,
  HeartHandshake,
  LogOutIcon,
  Logs,
  Settings,
  SquareSlash,
} from "lucide-react";
import Image from "next/image";
import { CommandMenuSkeleton, SidebarSkeletonLoading } from "./loading";
import dynamic from "next/dynamic";
import { useToggleOpen } from "@fluctux/hooks";
import { mainSidebarStore } from "@/services/stores";
import { observer } from "mobx-react";

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

const ACCOUNT_MENU: PopoverMenuDataType = {
  Account: {
    data: [
      {
        label: "Settings",
        icon: Settings,
      },
    ],
  },
  "Log out": {
    data: [
      {
        label: "Log out",
        slug: "log-out",
        status: "DANGER",
        effectType: "SOFT",
        showStatusHoverEffect: true,
        icon: LogOutIcon,
      },
    ],
  },
};

export const HELPS_MENU_ITEMS: PopoverMenuDataType = {
  Resources: {
    data: [
      {
        label: "Docs",
        slug: "#",
        icon: BookOpen,
      },
      {
        label: "Shortcuts",
        slug: "#",
        icon: SquareSlash,
      },
      {
        label: "Support",
        slug: "#",
        icon: HeartHandshake,
      },
    ],
  },
  Changelog: {
    label: "Whats New?",
    data: [
      {
        label: "Changelog",
        slug: "#",
        icon: Logs,
      },
    ],
  },
};

export const WorkspaceSidebar = observer(() => {
  const { isOpen: isSidebarOpen } = useToggleOpen({
    id: "workspace-sidebar-rnd",
  });
  // ==========================================================================
  //                               Menu States
  // ==========================================================================
  const [isCommandOpen, setIsCommandOpen] = useState<boolean | null>(null);

  const saveWidth = useCallback((width: string) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("workspaceSidebarWidth", width);
    }
  }, []);

  return (
    <Rnd
      minWidth={250}
      maxWidth={350}
      size={{
        width: mainSidebarStore.getSidebarSize?.toString() || "250px",
        height: "100%",
      }}
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
        "overflow-hidden transition-all z-50 duration-500 bg-background-color_950C  rnd-workspace-sidebar",
        isSidebarOpen ? "left-[0%_!important]" : "left-[-100%_!important]"
      )}
      onResize={(e, direction, ref, delta, position) => {
        ref.style.transition = "none";
        mainSidebarStore.setSidebarSize(ref.offsetWidth);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        saveWidth(`${ref.offsetWidth}`);
      }}
    >
      <div className="w-full h-screen border-r border-border-color_1">
        {/* ==========================================================================
                                            Top sidebar
          ========================================================================== */}
        <div className="w-full h-fit">
          <div className="w-full p-2 fx-flex-between-ic">
            <div className="flex justify-start items-center gap-2">
              <Popover onOpenChange={(open) => setIsCommandOpen(open)}>
                <PopoverTrigger asChild>
                  <div className="w-[30px] h-[30px] hover:bg-background-color_900C cursor-pointer fx-flex-center rounded-tiny data-[state=open]:border border-surface-indigo-border-active data-[state=open]:bg-surface-indigo-bg-active!">
                    <FxFavIcon customSize={15} variant="theme" />
                  </div>
                </PopoverTrigger>
                <PopoverContent align="start">
                  {isCommandOpen && <DynamicSidebarCommandMenu />}
                </PopoverContent>
              </Popover>
              <div>
                <h1 className="font-weight_450 text-[10px] text-text-color_2">
                  NI, Org
                </h1>
                <p className="one_line_ellipsis text-text-color_1 text-workspace_2 font-medium">
                  Ni Mahins Team
                </p>
              </div>
            </div>
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
          <FxPopover
            align="start"
            InteractChild={
              <div className="rounded-circle shrink-0 p-2 text-text-svg_default hover:bg-background-color_900C transition-colors cursor-pointer data-[state=open]:bg-background-color_800C data-[state=open]:text-text-color_1">
                <CircleHelp size={LUCIDE_WORKSPACE_ICON_SIZE} />
              </div>
            }
            items={HELPS_MENU_ITEMS}
          />

          <FxPopover
            align="end"
            side="top"
            InteractChild={
              <div className="fx-flex-cl w-full rounded hover:bg-background-color_900C gap-2 transition-colors cursor-pointer p-1 data-[state=open]:bg-background-color_800C">
                <Image
                  src={"/placeholder_img.png"}
                  width={500}
                  height={500}
                  className="w-[35px] shrink-0 overflow-hidden cursor-pointer h-[35px]  rounded-tiny object-cover object-center border border-border-color_1 "
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
            }
            items={ACCOUNT_MENU}
          />
        </div>
      </div>
    </Rnd>
  );
});
