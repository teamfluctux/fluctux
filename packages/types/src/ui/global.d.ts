export type SizeType = "sm" | "md" | "lg" | "xl";

export type ThemeType = "dark" | "light";
export type IconType =
  | React.ComponentType<SVGProps<SVGSVGElement>>
  | LucideIcon;

export type FileType =
  | "js"
  | "ts"
  | "tsx"
  | "jsx"
  | "html"
  | "css"
  | "json"
  | "bash"
  | "nginx"
  | "docker"
  | "git"
  | "cpp"
  | "c"
  | "md"
  | "mdx"
  | "text"
  | "npm"
  | "turbo"
  | "prettier";

export type ObjectListArrayType = {
  [key: string]: {
    label: string;
    slug: string;
    icon: LucideIcon;
  }[];
};
