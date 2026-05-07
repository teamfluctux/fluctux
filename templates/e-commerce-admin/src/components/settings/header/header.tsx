"use client";
import { Button, ButtonGroup } from "@fluctux/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSettingsStore } from "../SettingsWrapper";
import { usePathname, useRouter } from "next/navigation";
import { SETTINGS_TITLE_DESC, type SettingsSlugType } from "@/constants";
import { useEffect } from "react";

export const Settingsheader = () => {
  const path_name = usePathname();
  const router = useRouter();
  const { setMetaData, metaData, pagination, setPagination } =
    useSettingsStore();
  useEffect(() => {
    const data = SETTINGS_TITLE_DESC[path_name as SettingsSlugType];
    setMetaData({ title: data?.title, desc: data?.desc });
    setPagination(path_name);
  }, [path_name, setMetaData]);

  return (
    <header className="w-full flex h-[80px] mb-8 mt-10 sticky top-0 left-0 gap-10 backdrop-blur-3xl z-50">
      <div className="max-w-[800px] w-full mx-auto px-3 flex justify-between items-center">
        <div >
          <h1 className="text-read_18 font-medium one-line-ellipsis">{metaData.title}</h1>
             <p className="text-workspace_2 font-medium text-text-color_3 one-line-ellipsis">
          {metaData.desc}
        </p>
        </div>
     
        <div className="shrink-0">
            <ButtonGroup>
              <Button
                showClickOutlineEffect
                disabled={!pagination.prev}
                onClick={() =>
                  pagination.prev && router.push(pagination.prev?.slug)
                }
                variant={"secondary"}
              >
                <ChevronLeft />
              </Button>
              <Button
                showClickOutlineEffect
                disabled={!pagination.next}
                onClick={() =>
                  pagination.next && router.push(pagination.next?.slug)
                }
                variant={"secondary"}
              >
                <ChevronRight />
              </Button>
            </ButtonGroup>
          </div>
      </div>
    </header>
  );
};
