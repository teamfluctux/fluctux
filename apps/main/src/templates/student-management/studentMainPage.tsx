"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@fluctux/ui";

import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import { GridLoader } from "@/components/workspace/loader";
import { ViewStudentPopupObserver } from "@/components/workspace/student-management";

const DynamicStudentGrid = dynamic(
  () => import("./dynamic-grid").then((module) => module.DynamicStudentGrid),
  {
    ssr: false,
    loading: () => <GridLoader />,
  }
);

export const StudentsListMainPage = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center text-workspace_2 h-[50px] px-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple" className="!text-text-color_4">
                Apple
              </SelectItem>
              <SelectItem value="banana" className="!text-text-color_4">
                Banana
              </SelectItem>
              <SelectItem value="blueberry" className="!text-text-color_4">
                Blueberry
              </SelectItem>
              <SelectItem value="grapes" className="!text-text-color_4">
                Grapes
              </SelectItem>
              <SelectItem value="pineapple" className="!text-text-color_4">
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <DynamicStudentGrid />
      <ViewStudentPopupObserver />
    </div>
  );
}
