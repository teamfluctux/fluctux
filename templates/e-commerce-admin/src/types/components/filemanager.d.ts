export type FilesManagerHeaderMenusType = {
  label: string;
  value: string;
  icon: LucideIcon;
  type: "image" | "video" | "pdf" | "csv" | "recent" | "folder";
};

export type FileType = Exclude<
  FilesManagerHeaderMenusType["type"],
  "recent" | "folder"
>;

export type FileViewModeType = "list" | "large_icons" | "small_icons";
