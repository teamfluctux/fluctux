"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn, FadeFavLoading, useThemeSwitcher } from "@fluctux/ui";
import { PanelLeft, PanelLeftClose } from "lucide-react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import { workspaceContext } from "@/context/workspace-context";
import { WorkspaceSidebar } from "@/components/workspace/sidebar";

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

export default function Layout({ children }: WorkspaceLayoutProps) {
  // ==========================================================================
  //                                 Sidebar
  // ==========================================================================
  const [sidebarSize, setSidebarSize] = useState<number | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load saved width from storage
    const savedSize = localStorage.getItem("workspaceSidebarWidth");
    if (savedSize) {
      setSidebarSize(parseInt(savedSize, 10));
    } else {
      setSidebarSize(250); // Default value
    }
  }, []);

  const { ThemeSwitcher } = useThemeSwitcher();

  if (sidebarSize === null)
    return (
      <>
        <div className="w-full h-screen fx-flex-center bg-background-color_950C">
          <FadeFavLoading />
        </div>
      </>
    );

  return (
    <>
      {/* for RND window tabs -> ./src/hooks/useTaskBar */}
      <workspaceContext.Provider
        value={{ parentRef, sidebarSize, setSidebarSize }}
      >
        <div
          className={cn(
            "flex justify-center items-center w-full overflow-hidden"
          )}
        >
          <WorkspaceSidebar />
          {/* ==========================================================================
                                      Content
      ========================================================================== */}
          <div
            ref={parentRef}
            className={cn("w-full h-screen bg-background-color_900C relative")}
          >
            <div className="border-b border-border-color_1 w-full h-[40px] sticky top-0 fx-flex-center">
              {/* SIDEBAR TOGGLE BUTTON */}
              {/* <div
                className="w-[30px] h-[30px] fx-flex-center rounded-[5px] absolute left-1 hover:bg-background-color_3 cursor-pointer z-[50] text-text-svg_default hover:text-text-color_1"
                onClick={toggleSidebarOpen}
              >
                {isSidebarOpen ? (
                  <PanelLeftClose size={LUCIDE_WORKSPACE_ICON_SIZE} />
                ) : (
                  <PanelLeft size={LUCIDE_WORKSPACE_ICON_SIZE} />
                )}
              </div> */}
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
