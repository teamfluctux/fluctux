import { SVGProps } from "react";

export interface DocNavType {
  [key: string]: {
    type: "multiple" | "single";
    slug: string;
    icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
    lists?: {
      label: string;
      slug: string;
      icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
    }[];
    group?: DocNavType;
  };
}
