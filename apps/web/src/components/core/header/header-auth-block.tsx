"use client";
import React from "react";
import {
  FxButton,
  LUCIDE_WORKSPACE_ICON_SIZE,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@fluctux/ui";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const HeaderAuthBlock = () => {
  return (
    <div>
      <div className="rounded overflow-hidden h-[35px] flex  justify-center items-center">
        <FxButton className="pl-4 pr-2 h-full  ">
          <span className="text-fx_zinc-50 font-medium text-workspace_1">
            Sign up
          </span>
        </FxButton>
        <Popover>
          <PopoverTrigger asChild className="outline-none">
            <FxButton className="group h-full px-1">
              <ChevronDown
                size={LUCIDE_WORKSPACE_ICON_SIZE}
                className="text-text-color_default_white"
              />
            </FxButton>
          </PopoverTrigger>
          <PopoverContent
            className="w-[103px] rounded h-[38px] bg-background-color_925C border border-border-color_1 p-1"
            align="end"
          >
            <Link href={"#"}>
              <li className="text-workspace_1 font-medium text-text-color_1 cursor-pointer px-2 h-full flex justify-start items-center  rounded-tiny list-none hover:bg-background-color_800C transition-colors">
                Login
              </li>
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
