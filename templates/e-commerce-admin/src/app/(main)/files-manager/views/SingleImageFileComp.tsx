"use client"
import type { FileCompQueryParamsType, FileViewModeType, SingleFileComponentPropsType } from "@/types";
import { useUrlQueryParams } from "@fluctux/hooks";
import { FxButton, FxPopover, type PopoverMenuDataType } from "@fluctux/ui";
import { Ellipsis, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

export type ImageFileDataPropsType = SingleFileComponentPropsType & {
  src: string;
};

/**
 * Configuration for the file action popover menu.
 */
const ImageMoreOptions: PopoverMenuDataType = {
  "More Options": {
    data: [
      // {
      //   label: "Zoom",
      //   icon: ZoomIn,
      //   value: "zoom",
      //   status: "NEUTRAL",
      // },
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
const FileSmallIconsView = ({
  createdAt,
  name,
  meta_desc,
  size,
  updatedAt,
  src,
}: ImageFileDataPropsType) => {
  return (
    <div
      className={`relative group w-full h-[200px] rounded-xl overflow-hidden border border-border-color_1`}
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
        items={ImageMoreOptions}
      />

      <Image
        src={src ?? ""}
        alt={name}
        width={500}
        height={500}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

type SingleImageFileCompPropsType = ImageFileDataPropsType;
export const SingleImageFileComp = (props: SingleImageFileCompPropsType) => {
    const {getQueryParam} = useUrlQueryParams<FileCompQueryParamsType>()
    const viewMode = getQueryParam("view") as FileViewModeType;
  if (viewMode == "small_icons") return <FileSmallIconsView {...props} />;
    return null;
};
