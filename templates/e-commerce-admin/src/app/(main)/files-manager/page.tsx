"use client";
import type {
  FileCompQueryParamsType,
  FilesManagerHeaderMenusType,
  FileViewModeType,
} from "@/types";
import { SingleImageFileComp } from "./views";
import { FolderComp } from "./views/FolderComp";
import { useUrlQueryParams } from "@fluctux/hooks";
import { useEffect } from "react";
import { fileStore } from "stores";
import ErrorFallback from "@/components/ErrorBoundary";

type ViewCompsPropsType = {
  fileType: FilesManagerHeaderMenusType["type"];
};

const ViewComps = ({ fileType }: ViewCompsPropsType) => {
  if (fileType == "folder")
    throw new Error("Error fetching folders")
    return (
      <>
        {Array.from({ length: 30 }).map((item, i) => {
          return <FolderComp key={i} />;
        })}
      </>
    );

  if (fileType == "image")
    return (
      <>
        {Array.from({ length: 30 }).map((item, i) => {
          return <SingleImageFileComp key={i} />;
        })}
      </>
    );
};

/**
 * Main content area for the Files Manager.
 *
 * Renders file components based on the current view mode and filters.
 */
export default function FileContent() {
  const { getQueryParam } = useUrlQueryParams<FileCompQueryParamsType>();
  const fileType = getQueryParam("type") as FilesManagerHeaderMenusType["type"];

  useEffect(() => {
    fileStore.setFileNavType(fileType as FilesManagerHeaderMenusType["type"]);
  }, [fileType]);

  return (
    <main className="w-full pt-10 pb-20">
      <ErrorFallback title="Error rendering component!">

      <div className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        <ViewComps fileType={fileType} />
      </div>
      </ErrorFallback>
    </main>
  );
}
