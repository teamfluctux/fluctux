"use client";
import {
  Button,
  ButtonGroup,
  FxButton,
  Kbd,
  LUCIDE_WORKSPACE_ICON_SIZE,
} from "@fluctux/ui";
import { Bell, Search, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export const WorkSpaceHeader = () => {
  const router = useRouter()
  return (
    <header className="w-full h-[60px] flex justify-between items-center ">
      <div className="w-full flex justify-start items-center">
        <div className="text-left leading-5">
          <p className="text-read_18 font-medium">Dashboard</p>
          <p className="text-workspace_3 text-text-color_2 font-medium">
            All analytics view of your online store
          </p>
        </div>
      </div>
      <div className="flex justify-end items-center shrink-0 gap-3">
        <FxButton variant="secondary" size="sm" className="px-2!">
          <Search
            size={LUCIDE_WORKSPACE_ICON_SIZE}
            className="text-text-svg_default group-hover:text-text-color_1"
          />
          <span className="text-workspace_2">Search here...</span>
          <div className="pl-8">
            <Kbd>Ctrl+L</Kbd>
          </div>
        </FxButton>
        <ButtonGroup>
          <Button variant={"secondary"}>
            <Bell />
          </Button>
          <Button onClick={() => router.push("/settings")} variant={"secondary"}>
            <Settings />
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
};
