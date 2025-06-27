import { DocNavType } from "./type";

export const DEVELOPER_DOC_NAV: DocNavType = {
  "Getting Started": {
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
      "Hello world": {
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
        group: {
          hello: {
             type: "multiple",
            slug: "hello",
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
              hello: {
                 type: "multiple",
                slug: "hello",
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
                  hello: {
                     type: "multiple",
                    slug: "hello",
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
            },
          },
        },
      },
    },
  },
  "Test": {
    type:"single",
    slug: "test"
  }
};
