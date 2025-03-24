'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useThemeSwitcher, useToggleOpen } from '@fluctux/hooks';
import { cn, FxButton, FxFavIcon, FxSeparator, LUCIDE_WORKSPACE_ICON_SIZE, SidebarLeftIcon } from '@fluctux/ui';
import { Rnd } from "react-rnd";
import { ArrowLeftRight, CircleHelp, LogOut, PanelLeft, PanelLeftClose, Settings } from 'lucide-react';
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


interface WorkspaceLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: WorkspaceLayoutProps) {
  const [sidebarSize, setSidebarSize] = useState<Number>()

  const { isOpen: isSidebarOpen, toggle: toggleSidebarOpen } = useToggleOpen({ id: "workspace-sidebar-rnd" })
  const { ThemeSwitcher } = useThemeSwitcher(THEME_ICONS)

  const saveWidth = (width: string) => {
    localStorage.setItem('workspaceSidebarWidth', width);
  }

  useEffect(() => {
    const savedWidth = localStorage.getItem('workspaceSidebarWidth');
    if (savedWidth) {
      setSidebarSize(parseInt(savedWidth.replace("px", "")));
    }
  }, [])


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
          <div className='w-full border-b border-border-color_1 h-[50px]'>
            <div className='w-full p-2 fx-flex-between-ic'>

              <div className='fx-flex-cl gap-1'>

                <Popover>
                  <PopoverTrigger asChild>
                    <div className='w-[30px] h-[30px] hover:bg-background-color_2 cursor-pointer fx-flex-center rounded-tiny'>
                      <FxFavIcon customSize={15} variant='theme' />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent align='start'>
                    <div className='w-[450px] border-border-color_1 bg-background-color_1 border rounded h-[400px] fx-flex-center'>
                      <div className='hover:bg-background-color_2 w-[200px]  flex-shrink-0 border-r border-border-color_1 h-full'>
                        <ul className='p-2'>
                          <p className='text-workspace_3 text-text-color_3 font-medium'>Organizations</p>
                          <li className='text-workspace_2 text-text-color_2 hover:bg-background-color_5 hover:text-text-color_1 px-2 py-1 rounded-tiny cursor-pointer font-medium' >Mahin Org</li>
                        </ul>
                        <FxSeparator orientation='horizontal' />
                        <ul className='p-2'>

                          <li className='text-workspace_2 text-text-color_2 group hover:bg-background-color_5 hover:text-text-color_1 px-2 py-1 rounded-tiny cursor-pointer font-medium fx-flex-cl gap-2' >
                            <div className='text-text-svg_default group-hover:text-text-color_1'>
                              <ArrowLeftRight size={LUCIDE_WORKSPACE_ICON_SIZE} />
                            </div>
                            <span>
                              Switch organization

                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className='hover:bg-background-color_2 w-full h-full'>

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

          <div className='h-[calc(100%-107px)] w-full overflow-y-auto custom-scrollbar'>
            <div className='h-[1200px]'>

            </div>
          </div>

          <div className='w-full h-[56px] fx-flex-between-ic px-2 gap-1'>
            <Popover>
              <PopoverTrigger asChild>
                <div className='rounded-circle flex-shrink-0 p-2 hover:bg-background-color_2 cursor-pointer'>
                  <CircleHelp color='var(--svg-default-color)' size={LUCIDE_WORKSPACE_ICON_SIZE} />
                </div>
              </PopoverTrigger>
              <PopoverContent align='start' side='top'>
                <div className='bg-background-color_4 border border-border-color_2 rounded  w-[200px]'>
                  <ul className='text-workspace_1 font-medium leading-7'>

                    <div className='p-1'>

                      {
                        FIND_HELP_ITEMS.map((item, index) => (
                          <Link href={item.slug} key={index}>
                            <li className='fx-flex-cl gap-2 group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_2 hover:text-text-color_1'>
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
                            <li className='fx-flex-cl gap-2 group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_2 hover:text-text-color_1'>
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

            <Popover>
              <PopoverTrigger asChild>
                <div className='fx-flex-cl w-full rounded-tiny hover:bg-background-color_2 gap-2 cursor-pointer p-1'>
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
                            <li className='fx-flex-cl gap-2 group hover:bg-background-color_5 rounded-tiny px-2 text-text-color_2 hover:text-text-color_1'>
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

                      <AlertDialog>
                        <AlertDialogTrigger className='w-full h-[20px] border '>
                          <li className='fx-flex-cl w-full cursor-pointer group gap-2 hover:bg-background-color_5 rounded-tiny px-2 text-text-color_2 hover:text-red-500'>
                            <div className='text-text-svg_default group-hover:text-red-500'>
                              <LogOut size={LUCIDE_WORKSPACE_ICON_SIZE} />
                            </div>
                            <span>
                              Log out
                            </span>
                          </li>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <div>
                            Are you sure?
                          </div>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                    </div>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>



          </div>
        </div>
      </Rnd>
      <div className={cn("w-full h-screen bg-background-color_2")}>
        <div className='border-b border-border-color_1 w-full h-[40px] relative fx-flex-center'>
          <div className='w-[30px] h-[30px] fx-flex-center rounded-[5px] absolute left-1 hover:bg-background-color_3 cursor-pointer z-[50]' onClick={toggleSidebarOpen}>
            {
              isSidebarOpen ?
                <PanelLeftClose size={LUCIDE_WORKSPACE_ICON_SIZE} color='var(--svg-default-color)' /> :
                <PanelLeft size={LUCIDE_WORKSPACE_ICON_SIZE} color='var(--svg-default-color)' />
            }
          </div>
        </div>
        {children}
      </div>

    </div>
  </>
}