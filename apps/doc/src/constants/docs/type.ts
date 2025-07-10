import { SVGProps } from "react";

export interface DocNavType {
  [key: string]: {
    type: "multiple" | "single";
    slug: string;
    icon?: React.ReactElement;
    lists?: {
      label: string;
      slug: string;
      icon?: React.ReactElement;
    }[];
    group?: DocNavType;
  };
}
