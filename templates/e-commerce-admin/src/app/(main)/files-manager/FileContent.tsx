import type { FileViewModeType, ViewModeType } from "@/types";
import { FxButton, FxPopover, type PopoverMenuDataType } from "@fluctux/ui";
import { Ellipsis, Trash, ZoomIn } from "lucide-react";
import Image from "next/image";

type SingleFileComponentPropsType = {
  name: string;
  meta_desc?: string;
  size: string;
  createdAt: string;
  updatedAt?: string;
  viewMode: FileViewModeType;
};

type SingleFileClassNameTypes = {
  mainWrapper: { [key in FileViewModeType]: string };
};

/**
 * Tailwind CSS class mapping for different file view modes.
 */
const SingleFileClassName: SingleFileClassNameTypes = {
  mainWrapper: {
    small_icons:
      "w-full h-[200px] rounded-xl overflow-hidden border border-border-color_1",
  },
};

/**
 * Configuration for the file action popover menu.
 */
const FileMoreOptions: PopoverMenuDataType = {
  "More Options": {
    data: [
      {
        label: "Zoom",
        icon: ZoomIn,
        value: "zoom",
        status: "NEUTRAL",
      },
      {
        label: "Delete",
        effectType: "SOFT",
        showStatusHoverEffect: true,
        icon: Trash,
        value: "delete",
        status: "DANGER",
      },
    ],
  },
};

/**
 * Component for rendering a single image file item in the file manager.
 * 
 * @param createdAt - The creation date of the file.
 * @param name - The name of the file.
 * @param meta_desc - Optional metadata description.
 * @param size - The file size as a string.
 * @param updatedAt - Optional last updated date.
 * @param viewMode - The display mode (defaults to "small_icons").
 */
const SingleImageFileComponent = ({
  createdAt,
  name,
  meta_desc,
  size,
  updatedAt,
  viewMode = "small_icons",
}: SingleFileComponentPropsType) => {
  return (
    <div
      className={`relative group ${SingleFileClassName.mainWrapper[viewMode]}`}
    >
      <FxPopover
        className="w-[180px]"
        align="end"
        side="bottom"
        InteractChild={
          <FxButton
            icon={Ellipsis}
            className="absolute top-2 right-2  "
            variant="secondary"
            size="square_sm"
          />
        }
        items={FileMoreOptions}
      />

      <Image
        src={""}
        alt={name}
        width={500}
        height={500}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

/**
 * Main content area for the Files Manager.
 * 
 * Renders file components based on the current view mode and filters.
 */
export const FileContent = () => {
  return (
    <main className="w-full py-20">
      <div className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {Array.from({ length: 30 }).map((item, i) => {
          return <SingleImageFileComponent viewMode="small_icons" />;
        })}
      </div>
    </main>
  );
};
