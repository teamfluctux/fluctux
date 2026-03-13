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
        <FxButton
          size="md"
          className="pl-4! pr-2! h-full rounded-lg rounded-tr-none rounded-br-none  text-workspace_2"
        >
          Sign up
        </FxButton>
        <Popover>
          <PopoverTrigger asChild className="outline-hidden">
            <FxButton className=" h-full px-1!  rounded-tl-none rounded-bl-none ">
              <ChevronDown size={LUCIDE_WORKSPACE_ICON_SIZE} />
            </FxButton>
          </PopoverTrigger>
          <PopoverContent
            className="w-[103px]  h-[38px] bg-background-color_925C border border-border-color_1 p-1"
            align="end"
          >
            <Link href={"#"}>
              <li className=" font-medium text-text-color_1 text-workspace_2 cursor-pointer px-2 h-full flex justify-start items-center  rounded-sm list-none hover:bg-background-color_800C transition-colors">
                Login
              </li>
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
