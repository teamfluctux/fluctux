export type FilesManagerHeaderMenusType = {
  label: string;
  icon: LucideIcon;
  type: "image" | "video" | "pdf" | "csv" | "recent" | "folder";
};

export type FileType = Exclude<
  FilesManagerHeaderMenusType["type"],
  "recent" | "folder"
>;

export type FileViewModeType = "list" | "large_icons" | "small_icons";
export type FileCompQueryParamsType = "view" | "type" 

export type SingleFileComponentPropsType = {
  name: string;
  meta_desc?: string;
  size?: string;
  createdAt?: string;
  updatedAt?: string;
};

;