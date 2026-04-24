import { LayoutGrid, List, Grid2X2, type LucideIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@fluctux/ui";
import { useRouter } from "next/navigation";
import { useUrlQueryParams } from "@fluctux/hooks";
import type { FileCompQueryParamsType, FileViewModeType } from "@/types";
import { useEffect } from "react";

type FileComponentViews = {
  icon: LucideIcon;
  label: string;
  value: FileViewModeType;
};

const VIEWS: FileComponentViews[] = [
  {
    icon: Grid2X2,
    label: "Small icons",
    value: "small_icons",
  },
  {
    icon: LayoutGrid,
    label: "Large icons",
    value: "large_icons",
  },
  {
    icon: List,
    label: "Details",
    value: "list",
  },
];

/**
 * Component for switching between different file view modes (Small icons, Large icons, Details).
 * 
 * It synchronizes the selected view mode with the URL query parameters
 * and defaults to "small_icons" on initial mount.
 */
export const FileViewMode = () => {
  const { handlePushQueryParam, getQueryParam } =
    useUrlQueryParams<FileCompQueryParamsType>();
  const currentViewMode = VIEWS.find(
    (item) => item.value == getQueryParam("view")
  );

  useEffect(() => {
    handlePushQueryParam("view", VIEWS[0]?.value as FileViewModeType);
  }, []);
  return (
    <Select onValueChange={(value) => handlePushQueryParam("view", value)}>
      <SelectTrigger className="w-fit  h-8! flex justify-center items-center gap-1">
        {currentViewMode?.icon && <currentViewMode.icon />}
        {currentViewMode?.label}
      </SelectTrigger>
      <SelectContent className="w-[180px]!">
        <SelectGroup>
          <SelectLabel>Views</SelectLabel>
          {VIEWS.map((item, i) => {
            return (
              <SelectItem value={item.value}>
                <div className="flex justify-start items-center gap-1">
                  {item.icon && <item.icon />}
                  {item.label}
                </div>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
