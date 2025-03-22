'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useThemeSwitcher, useToggleOpen } from '@fluctux/hooks';
import { cn, LUCIDE_WORKSPACE_ICON_SIZE, SidebarLeftIcon } from '@fluctux/ui';
import { Rnd } from "react-rnd";
import { CircleHelp, LogOut, PanelLeft, PanelLeftClose } from 'lucide-react';
import { THEME_ICONS } from '@/constants/global';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
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
        className={cn("overflow-hidden transition-all duration-500 rnd-workspace-sidebar", isSidebarOpen ? "left-[0%_!important]" : "left-[-100%_!important]")}
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
            <ThemeSwitcher/>
          </div>
          <div className='h-[calc(100%-106px)] w-full overflow-y-auto custom-scrollbar'>
            <div className='h-[1200px]'>

            </div>
          </div>
          <div className='w-full h-[54px] fx-flex-between-ic px-[6px] gap-1'>

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
                            <li className='fx-flex-cl gap-2 hover:bg-background-color_5 rounded-tiny px-2 text-text-color_2 hover:text-text-color_1'>
                              {item.icon}
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
                            <li className='fx-flex-cl gap-2 hover:bg-background-color_5 rounded-tiny px-2 text-text-color_2 hover:text-text-color_1'>
                              {item.icon}
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
                          <li className='fx-flex-cl gap-2 hover:bg-background-color_5 rounded-tiny px-2 text-text-color_2 hover:text-text-color_1'>
                            {item.icon}
                            <span>
                              {item.label}

                            </span>
                          </li>
                        </Link>

                      ))
                    }
                    </div>

                    <div className='p-1 border-t border-border-color_2'>

                    <li className='fx-flex-cl cursor-pointer gap-2 hover:bg-background-color_5 rounded-tiny px-2 text-text-color_2 hover:text-text-color_1'>
                      <LogOut color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} />
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
      <div className={cn("w-full h-screen bg-background-color_2")}>
        <div className='border-b border-border-color_1 w-full h-[40px] relative fx-flex-center'>
          <div className='w-[30px] h-[30px] fx-flex-center rounded-[5px] absolute left-1 hover:bg-background-color_3 cursor-pointer z-[52]' onClick={toggleSidebarOpen}>
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