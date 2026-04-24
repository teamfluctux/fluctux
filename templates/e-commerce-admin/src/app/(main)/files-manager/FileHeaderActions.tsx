import { FxButton } from "@fluctux/ui";
import {
  Download,
  FolderPlus,
  FileDown,
} from "lucide-react";
import { observer } from "mobx-react";
import React from "react";
import { fileStore } from "stores";

/**
 * Component that renders contextual action buttons in the Files Manager header.
 * 
 * The buttons change dynamically based on the current navigation type 
 * (e.g., "Import Images" for images, "New Folder" for folders).
 */
export const FileHeaderActions = observer(() => {
  return (
    <>
      {fileStore.fileNavType === "image" && (
        <FxButton size="sm" variant="primary" icon={Download}>
          Import Images
        </FxButton>
      )}
      {fileStore.fileNavType === "video" && (
        <FxButton size="sm" variant="primary" icon={Download}>
          Import Videos
        </FxButton>
      )}
      {(fileStore.fileNavType === "pdf" || fileStore.fileNavType === "csv") && (
        <FxButton size="sm" variant="primary" icon={FileDown}>
          Add new
        </FxButton>
      )}
      {fileStore.fileNavType === "folder" && (
        <FxButton size="sm" variant="primary" icon={FolderPlus}>
          New Folder
        </FxButton>
      )}
    </>
  );
});
