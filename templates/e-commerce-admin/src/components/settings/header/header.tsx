"use client"
import { Button, ButtonGroup } from "@fluctux/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSettingsStore } from "../SettingsWrapper";

export const Settingsheader = () => {
  const { title } = useSettingsStore();
  return (
    <header className="w-full  px-3 py-4 mb-8 mt-10 sticky top-0 left-0">
      <div className="flex justify-between items-center">
        <h1 className="text-read_18 font-medium">{title}</h1>
        <div>
          <ButtonGroup>
            <Button variant={"secondary"}>
              <ChevronLeft />
            </Button>
            <Button variant={"secondary"}>
              <ChevronRight />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <p className="text-workspace_2 font-medium text-text-color_3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
        rerum.
      </p>
    </header>
  );
};
