
import { Search, User } from "lucide-react";
import { DocNavType } from "./type";
import { GithubIcon } from "@fluctux/ui";

export const USER_DOC_NAV: DocNavType = {
  "Getting Started User": {
    type: "multiple",
    slug: "getting-started",
    icon: <GithubIcon size={16}/>,
    lists: [
      {
        label: "Set up Environment",
        slug: "set-up-environment",
        icon: <Search size={16} />,
      },
      {
        label: "Set up Environment",
        slug: "set-up-environment",
      },
    ],
    group: {
      "Hello world User": {
        type: "multiple",
        slug: "hello-world",
        lists: [
          {
            label: "Set up Environment",
            slug: "set-up-environment",
          },
          {
            label: "Set up Environment",
            slug: "set-up-environment",
          },
        ],
      },
    },
  },
  Test: {
    type: "single",
    slug: "test",
  },
};
