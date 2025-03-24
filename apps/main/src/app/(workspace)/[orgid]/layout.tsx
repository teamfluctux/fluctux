'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useThemeSwitcher, useToggleOpen } from '@fluctux/hooks';
import { cn, FxButton, FxFavIcon, FxSeparator, LUCIDE_WORKSPACE_ICON_SIZE, SidebarLeftIcon } from '@fluctux/ui';
import { Rnd } from "react-rnd";
import { ArrowLeftRight, Building2, CircleHelp, CirclePlus, Landmark, Layers, LayoutDashboard, LogOut, PanelLeft, PanelLeftClose, Settings, Telescope } from 'lucide-react';
import { THEME_ICONS } from '@/constants/global';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,

  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,


} from "@fluctux/ui"
import Link from 'next/link';
import { ACCOUNT_MENU_ITEMS, FIND_HELP_ITEMS, ICON_DEFAULT_COLOR, WHATS_NEW_ITEMS } from '@/constants/workspace';
import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';


interface WorkspaceLayoutProps {
  children: React.ReactNode
}

const DynamicSidebarBottom = dynamic(() => import("@/components/workspace/sidebar").then((mod) => mod.SidebarBottom), {
  ssr: false,
  loading: () => <div className='h-[calc(100%-107px)] w-full overflow-y-auto custom-scrollbar p-2'>
      {Array.from({ length: 3 }).map((_, i) => {
            return (
              <div key={i} className="mb-2">
       
                <Skeleton height={25} borderRadius={"5px"} style={{marginBottom: "2px"}} />
                <Skeleton width={200} height={25} borderRadius={"5px"} style={{marginBottom: "2px"}} />
                <Skeleton height={25} borderRadius={"5px"} style={{marginBottom: "2px"}} />
                <Skeleton width={180} height={25} borderRadius={"5px"} style={{marginBottom: "2px"}} />
            
              </div>
            );
          })}
  </div>
})

export default function Layout({ children }: WorkspaceLayoutProps) {

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  // ==========================================================================
  //                                 Sidebar
  // ==========================================================================
  const [sidebarSize, setSidebarSize] = useState<Number>()
  const { isOpen: isSidebarOpen, toggle: toggleSidebarOpen } = useToggleOpen({ id: "workspace-sidebar-rnd" })
  const saveWidth = (width: string) => {
    localStorage.setItem('workspaceSidebarWidth', width);
  }
  useEffect(() => {
    const savedWidth = localStorage.getItem('workspaceSidebarWidth');
    if (savedWidth) {
      setSidebarSize(parseInt(savedWidth.replace("px", "")));
    }
  }, [])

  // ==========================================================================
  //                               Menu States
  // ==========================================================================
  const [isCommandOpen, setIsCommandOpen] = useState<boolean | null>(null)
  const [isWhatsNewMenuOpen, setIsWhatsNewMenuOpen] = useState<boolean | null>(null)
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean | null>(null)

  // ==========================================================================
  //                                Org Item
  // ==========================================================================
  const [isOrgItemHover, setIsOrgItemHover] = useState<boolean>(false)
  const [orgHoverSlug, setOrgHoverSlug] = useState<string>("")
  const handleMouseEnterOrgItem = (slug: string) => {
    setOrgHoverSlug(slug)
    setIsOrgItemHover(true)
  }
  const handleMouseLeaveOrgItem = () => {
    setOrgHoverSlug("")
    setIsOrgItemHover(false)
  }



  const { ThemeSwitcher } = useThemeSwitcher(THEME_ICONS)

  return <>
    <div className='flex justify-center items-center w-full'>
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
          left: false
        }}
        resizeHandleClasses={{
          right: "right-handler-box"
        }}
        style={{ position: "unset" }}
        className={cn("overflow-hidden transition-all duration-500 bg-background-color_1 rnd-workspace-sidebar", isSidebarOpen ? "left-[0%_!important]" : "left-[-100%_!important]")}
        onResize={(e, direction, ref, delta, position) => {
          ref.style.transition = "none"
          setSidebarSize(
            ref.offsetWidth,
          );
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          saveWidth(
            ref.style.width
          );
        }}
      >
        <div className='w-full h-screen border-r border-border-color_1'>

          {/* ==========================================================================
                                            Top sidebar
          ========================================================================== */}
          <div className='w-full border-b border-border-color_1 h-[50px]'>
            <div className='w-full p-2 fx-flex-between-ic'>

              <div className='fx-flex-cl gap-1'>

                <Popover onOpenChange={(open) => setIsCommandOpen(open)}>
                  <PopoverTrigger asChild>
                    <div className={cn("w-[30px] h-[30px] hover:bg-background-color_2 cursor-pointer fx-flex-center rounded-tiny", isCommandOpen ? "bg-background-color_3" : "")}>
                      <FxFavIcon customSize={15} variant='theme' />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent align='start'>
                    <div className='w-fit border-border-color_1 overflow-hidden bg-background-color_1 border rounded h-[400px] fx-flex-center'>
                      <div className={cn('hover:bg-background-color_2 w-[200px]  flex-shrink-0  border-border-color_1 h-full', isOrgItemHover ? "border-r" : "border-none")}>
                        <ul className='p-2' onMouseLeave={() => setIsOrgItemHover(false)}>
                          <p className='text-workspace_3 text-text-color_3 font-medium '>
                            Organizations
                          </p>
                          <li
                            onMouseEnter={() => handleMouseEnterOrgItem("hello-world")}
                            className='text-workspace_2  text-text-color_4 hover:bg-background-color_5 hover:text-text-color_1 px-2 py-1 rounded-tiny cursor-pointer font-medium ' >

                            Mahin Org

                          </li>
                        </ul>
                        <FxSeparator orientation='horizontal' />
                        <ul className='p-2'>

                          <li className='text-workspace_2  group text-text-color_4 hover:bg-background-indigo_primary dark:hover:text-text-color_1 hover:text-text-color_default_white px-2 py-1 rounded-tiny cursor-pointer font-medium fx-flex-cl gap-2' >
                            <div className='text-text-color_2 dark:group-hover:text-text-color_1 group-hover:text-text-color_default_white'>
                              <CirclePlus size={LUCIDE_WORKSPACE_ICON_SIZE} />
                            </div>
                            <span >Create new org</span>
                          </li>
                          <li className='text-workspace_2 group text-text-color_4 hover:bg-background-color_5 hover:text-text-color_1 px-2 py-1 rounded-tiny cursor-pointer font-medium fx-flex-cl gap-2' >
                            <div className='text-text-color_2 group-hover:text-text-indigo-color_1'>
                              <Telescope size={LUCIDE_WORKSPACE_ICON_SIZE} />
                            </div>
                            <span>Explore</span>
                          </li>
                        </ul>
                        <FxSeparator orientation='horizontal' />
                        <ul className='p-2'>

                          <li className='text-workspace_2  text-text-color_4 group hover:bg-background-color_5 hover:text-text-color_1 px-2 py-1 rounded-tiny cursor-pointer font-medium fx-flex-cl gap-2' >
                            <div className='text-text-svg_default group-hover:text-text-color_1'>
                              <ArrowLeftRight size={LUCIDE_WORKSPACE_ICON_SIZE} />
                            </div>
                            <span>
                              Switch organization
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div onMouseLeave={() => handleMouseLeaveOrgItem()} onMouseEnter={() => setIsOrgItemHover(true)} className={cn('hover:bg-background-color_2 h-full transition-all duration-300 opacity-0', isOrgItemHover ? "w-[250px] opacity-100" : "w-0")}>
                        {
                          orgHoverSlug && <p>{orgHoverSlug}</p>
                        }
                      </div>

                    </div>
                  </PopoverContent>
                </Popover>


                <h1 className='font-medium text-workspace_1'>NI, Org</h1>
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <FxButton variant='silent' className='w-[30px] h-[30px] fx-flex-center rounded-tiny' ><Settings color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} /></FxButton>
                  </TooltipTrigger>
                  <TooltipContent align='end'>
                    <p className='text-text-color_2'>Org Settings</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

            </div>
          </div>

          {/* ==========================================================================
                                          Middle Sidebar
          ========================================================================== */}
          {
            <DynamicSidebarBottom />
          }

          {/* ==========================================================================
                                         Bottom Sidebar
          ========================================================================== */}
          <div className='w-full h-[56px] fx-flex-between-ic px-2 gap-1'>
            <Popover onOpenChange={(open) => setIsWhatsNewMenuOpen(open)}>
              <PopoverTrigger asChild>
                <div className={cn('rounded-circle flex-shrink-0 p-2 text-text-svg_default hover:bg-background-color_2 cursor-pointer', isWhatsNewMenuOpen ? "bg-background-color_3 text-text-color_1" : "")}>
                  <CircleHelp size={LUCIDE_WORKSPACE_ICON_SIZE} />
                </div>
              </PopoverTrigger>
              <PopoverContent align='start' side='top'>
                <div className='bg-background-color_4 border border-border-color_2 rounded  w-[200px]'>
                  <ul className='text-workspace_1 font-medium leading-7'>

                    <div className='p-1'>

                      {
                        FIND_HELP_ITEMS.map((item, index) => (
                          <Link href={item.slug} key={index}>
                            <li className='fx-flex-cl gap-2  group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_4 hover:text-text-color_1'>
                              <div className='text-text-svg_default group-hover:text-text-color_1'>

                                {item.icon}
                              </div>
                              <span>
                                {item.label}
                              </span>
                            </li>
                          </Link>
                        ))
                      }
                    </div>

                    <div className='p-1 border-t border-border-color_2'>
                      <p className='text-workspace_3 font-medium text-text-color_3 px-2'>Whats New?</p>
                      {
                        WHATS_NEW_ITEMS.map((item, index) => (
                          <Link href={item.slug} key={index}>
                            <li className='fx-flex-cl gap-2  group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_4 hover:text-text-color_1'>
                              <div className='text-text-svg_default group-hover:text-text-color_1'>

                                {item.icon}
                              </div>
                              <span>
                                {item.label}
                              </span>
                            </li>
                          </Link>
                        ))
                      }
                    </div>

                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            <Popover onOpenChange={(open) => setIsAccountMenuOpen(open)} >
              <PopoverTrigger asChild>
                <div className={cn('fx-flex-cl w-full rounded-tiny hover:bg-background-color_2 gap-2 cursor-pointer p-1', isAccountMenuOpen ? "bg-background-color_3" : "")}>
                  <Image src={""} width={500} height={500} className='w-[35px] flex-shrink-0 overflow-hidden cursor-pointer h-[35px]  rounded-tiny object-cover object-center border border-border-color_1 ' alt='profile-image' />
                  <div className='fx-flex-between-ic w-full'>
                    <div className='text-left leading-[16px]'>
                      <h3 className='text-workspace_1 font-medium'>Mahin</h3>
                      <p className='text-workspace_3 text-text-color_2'>nimulmahin@gmail.com</p>
                    </div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent align='end' side='right'>
                <div className='w-[200px] bg-background-color_4 border border-border-color_2 rounded'>
                  <ul className='text-workspace_1 font-medium leading-7'>
                    <div className='p-1 '>
                      {
                        ACCOUNT_MENU_ITEMS.map((item, index) => (
                          <Link href={item.slug} key={index}>
                            <li className='fx-flex-cl gap-2  group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_4 hover:text-text-color_1'>
                              <div className='text-text-svg_default group-hover:text-text-color_1'>

                                {item.icon}
                              </div>
                              <span>
                                {item.label}

                              </span>
                            </li>
                          </Link>

                        ))
                      }
                    </div>

                    <div className='p-1 border-t border-border-color_2'>

                      <li className='fx-flex-cl w-full cursor-pointer group gap-2 hover:bg-background-color_5 rounded-tiny px-2 text-text-color_4 hover:text-red-500'>
                        <div className='text-text-svg_default group-hover:text-red-500'>
                          <LogOut size={LUCIDE_WORKSPACE_ICON_SIZE} />
                        </div>
                        <span>
                          Log out
                        </span>
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
      <div className={cn("w-full h-screen bg-background-color_2")}>
        <div className='border-b border-border-color_1 w-full h-[40px] relative fx-flex-center'>
          <div className='w-[30px] h-[30px] fx-flex-center rounded-[5px] absolute left-1 hover:bg-background-color_3 cursor-pointer z-[50] text-text-svg_default hover:text-text-color_1' onClick={toggleSidebarOpen}>
            {
              isSidebarOpen ?
                <PanelLeftClose size={LUCIDE_WORKSPACE_ICON_SIZE} /> :
                <PanelLeft size={LUCIDE_WORKSPACE_ICON_SIZE} />
            }
          </div>
        </div>
        {children}
      </div>

    </div>
  </>
}