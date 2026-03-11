"use client";
import { Button, ButtonGroup } from "@fluctux/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSettingsStore } from "../SettingsWrapper";
import { usePathname } from "next/navigation";
import { SETTINGS_TITLE_DESC } from "@/constants";
import { useEffect } from "react";

export const Settingsheader = () => {
  const path_name = usePathname();
  const { setMetaData, metaData } = useSettingsStore();
  useEffect(() => {
    const getPathArray = path_name.split("/");
    const data =
      SETTINGS_TITLE_DESC[
        getPathArray[getPathArray.length - 1]?.toString() ?? ""
      ];
    setMetaData({ title: data?.title, desc: data?.desc });
  }, [path_name, setMetaData]);

  return (
    <header className="w-full py-4 mb-8 mt-10 sticky top-0 left-0 gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-read_18 font-medium">{metaData.title}</h1>
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
        {metaData.desc}
      </p>
    </header>
  );
};
