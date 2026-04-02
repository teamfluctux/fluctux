import type lucideReact = require("lucide-react");

export type MenuListType = {
  [key: string]: {
    label?: string;
    items: {
      label: string;
      slug?: string;
      value?: string;
      icon?: lucideReact.LucideIcon;
    }[];
  };
};
