"use client";
import { ICON_DEFAULT_COLOR } from "@/constants/workspace";
import {
  cn,
  FxButton,
  FxOneList,
  FxSeparator,
  LUCIDE_WORKSPACE_ICON_SIZE,
  Switch,
} from "@fluctux/ui";
import {
  LockKeyhole,
  MoveHorizontal,
  Settings,
  UnlockKeyhole,
} from "lucide-react";
import React, { useState } from "react";

export default function WorkspacePage() {
  const [pageSettingsOpen, setPageSettingsOpen] = useState<boolean>(false);
  const [lockedPage, setLockedPage] = useState<boolean | null>(null);

  const handleLockPage = (checked: boolean) => {
    setLockedPage(checked);
  };

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
          <FxOneList variant="primary">
            <label className="w-full px-2 py-1 fx-flex-between-ic gap-2">
              <div className="fx-flex-cl gap-2">
                <MoveHorizontal
                  size={LUCIDE_WORKSPACE_ICON_SIZE}
                  color={ICON_DEFAULT_COLOR}
                />
                <span>Full width</span>
              </div>
              <Switch />
            </label>
          </FxOneList>

          <FxSeparator
            orientation="horizontal"
            gap="tiny"
            color="var(--border-color-1)"
          />

          <FxOneList variant="primary">
            <label className="w-full px-2 py-1 fx-flex-between-ic gap-2">
              <div className="fx-flex-cl gap-2">
                {lockedPage ? (
                  <LockKeyhole
                    size={LUCIDE_WORKSPACE_ICON_SIZE}
                    color={ICON_DEFAULT_COLOR}
                  />
                ) : (
                  <UnlockKeyhole
                    size={LUCIDE_WORKSPACE_ICON_SIZE}
                    color={ICON_DEFAULT_COLOR}
                  />
                )}
                <span>Lock Page</span>
              </div>
              <Switch
                name="lockPage"
                onCheckedChange={(checked) => {
                  handleLockPage(checked);
                }}
              />
            </label>
          </FxOneList>
        </div>
      </div>
    </div>
  );
}
