import { DocNavType } from "./type";

export const USER_DOC_NAV: DocNavType = {
  "Getting Started User": {
    type: "multiple",
    slug: "getting-started",
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
