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
import { observer } from "mobx-react";
import { workspaceHeaderStore } from "@/services/stores";

export const WorkSpaceHeader = observer(() => {
  const router = useRouter();

  return (
    <header className=" w-full h-[60px] sticky top-0 mt-5   backdrop-blur-2xl z-[999] ">
      <div className="max-w-[1200px] w-full px-5  h-full mx-auto items-center flex justify-between">
        <div className="w-full flex justify-start items-center">
          <div className="text-left leading-5">
            <p className="text-read_18 font-medium">
              {workspaceHeaderStore.metaData?.title}
            </p>
            <p className="text-workspace_3 text-text-color_2 font-medium mt-0.5">
              {workspaceHeaderStore.metaData?.desc}
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center shrink-0 gap-3">
          <FxButton
            variant="secondary"
            size="sm"
            className="px-2! rounded-lg! h-8!"
          >
            <Search
              size={LUCIDE_WORKSPACE_ICON_SIZE}
              className="text-text-svg_default group-hover:text-text-color_1"
            />
            <span className="text-workspace_2">Search features...</span>
            <div className="pl-8">
              <Kbd>Ctrl+L</Kbd>
            </div>
          </FxButton>
          <ButtonGroup>
            <Button variant={"secondary"}>
              <Bell />
            </Button>
            <Button
              onClick={() => router.push("/settings")}
              variant={"secondary"}
            >
              <Settings />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </header>
  );
});
