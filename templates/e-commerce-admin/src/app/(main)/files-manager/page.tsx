"use client";
import { workspaceHeaderStore } from "@/services/stores";
import React, { useEffect } from "react";
import { FileHeader } from "./FileHeader";
import { FileContent } from "./FileContent";

export default function FilesManager() {
  // -- Set heading and meta description
  useEffect(() => {
    workspaceHeaderStore.setMetaData({
      title: "Files Manager",
      desc: "All your uploaded files are displayed here.",
    });
    return () => workspaceHeaderStore.clearMetaData();
  }, []);

  return (
    <div className="w-full">
      <FileHeader />
      <FileContent />
    </div>
  );
}
