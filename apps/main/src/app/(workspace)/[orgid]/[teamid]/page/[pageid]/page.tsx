"use client";
import { ICON_DEFAULT_COLOR } from "@/constants/workspace";
import { cn, FxButton, LUCIDE_WORKSPACE_ICON_SIZE, Switch } from "@fluctux/ui";
import { Settings } from "lucide-react";
import React, { useState } from "react";

export default function WorkspacePage() {
  const [pageSettingsOpen, setPageSettingsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="w-full h-full overflow-y-auto custom-scrollbar">
        <div className="h-[1500px]"></div>
      </div>

      <div
        className={cn(
          "w-0 transition-[width] flex-shrink-0 border-l border-border-color_1 h-full bg-background-color_4 relative",
          pageSettingsOpen && "w-[250px]"
        )}
      >
        <div className="absolute w-fit right-[100%] p-1 backdrop-blur-lg rounded-tiny">
          <FxButton
            variant="secondary"
            radius="tiny"
            className="group w-[30px] h-[30px] fx-flex-center rounded-[5px]"
            onClick={() => setPageSettingsOpen(!pageSettingsOpen)}
          >
            <Settings
              size={LUCIDE_WORKSPACE_ICON_SIZE}
              className={cn(
                "text-text-svg_default group-hover:text-text-color_1",
                pageSettingsOpen && "text-text-color_1"
              )}
            />
          </FxButton>
        </div>

        <div className="h-[calc(100%-40px)] overflow-y-auto p-1 w-full overflow-x-hidden">
          <FxButton radius="tiny" variant="lightSilent" className="w-full" >
            <label className="w-full px-2 py-1 fx-flex-between-ic gap-2">
              <div>
              <span className="text-workspace_2 text-text-color_4 font-medium">Full width</span>
              </div>
              <Switch  />
            </label>
          </FxButton>
        </div>
      </div>
    </div>
  );
}
