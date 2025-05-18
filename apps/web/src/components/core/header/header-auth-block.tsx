"use client"
import React from 'react'
import {
  FxButton,
  LUCIDE_WORKSPACE_ICON_SIZE,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,

} from "@fluctux/ui";
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';


export const HeaderAuthBlock = () => {
  return (
    <div>
          <div className="rounded overflow-hidden h-[35px] flex  justify-center items-center">
            <FxButton className="pl-4 pr-2 h-full  font-medium text-workspace_1">
              Sign up
            </FxButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="outline-none">
                <FxButton className="group h-full px-1">
                  <ChevronDown
                    size={LUCIDE_WORKSPACE_ICON_SIZE}
                    className="text-text-color_default_white"
                  />
                </FxButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[105px] rounded" align="end">
                <Link href={"#"}>
                  <li className="text-workspace_1 font-medium text-text-color_1 cursor-pointer px-2 py-1 rounded-tiny list-none hover:bg-background-color_800C ">
                    Login
                  </li>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
  )
}
