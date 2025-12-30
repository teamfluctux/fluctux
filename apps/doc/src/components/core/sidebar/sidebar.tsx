"use client";
import { sidebarStore } from "@/services/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ComboBox,
  FxButton,
  FxFavIcon,
} from "@fluctux/ui";
import { ChevronsUpDown } from "lucide-react";
import { observer } from "mobx-react";
import { useTransition } from "react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export const DocAppSidebar = observer(() => {
  return (
    <>
      {sidebarStore.isSidebarDocListLoading ? (
        "Loading..."
      ) : (
        <aside className="border-r border-border-color_1  h-screen shrink-0 sticky top-0 w-[300px]">
          <div className="w-full h-[64px] border-b border-border-color_1 flex justify-start items-center">
            <div className="h-full w-[64px] p-1 border-border-color_1 border-r shrink-0">
              <div className="h-full w-full transition-all cursor-pointer ring-0 hover:ring-[1px] hover:ring-surface-indigo-border flex justify-center items-center hover:bg-surface-indigo-bg">
                <FxFavIcon size="sm" variant="theme" />
              </div>
            </div>
            <div className="w-full h-full flex justify-start items-center ">
              {["User", "Developer"].map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`w-full h-full ${i == 1 ? "border-0" : "border-r "} border-border-color_1 p-1 flex justify-center items-center text-workspace_1 font-medium`}
                  >
                    <div className="w-full h-full ring-0 transition-all flex cursor-pointer justify-center items-center hover:ring-[1px] ring-surface-indigo-border-active hover:bg-surface-indigo-bg-active ">
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-3 border-b border-border-color_1">
            <ComboBox
              data={frameworks}
              currentValue="next.js"
              onComboDataSelect={(data) => console.log(data)}
              showSearchBox={false}
              popoverClassName="!w-[275px]"
              popoverTriggerComponent={
                <FxButton
                  size="md"
                  variant="secondary"
                  className="w-full justify-between"
                >
                  <span>Fluctux v1.0</span>
                  <ChevronsUpDown className="opacity-50" size={16} />
                </FxButton>
              }
            />
          </div>

          <div>
            <Accordion type="multiple" className="w-full">
              {Object.entries(sidebarStore.sidebarDocList).map(
                ([key, value], i) => {
                  return (
                    <AccordionItem
                      value={`${value.slug}`}
                      key={`${key}-${i}`}
                      className="  !text-workspace_1 !font-medium"
                    >
                      <AccordionTrigger className="!no-underline !text-text-color_4 !rounded-none py-3 !h-fit px-5 hover:bg-surface-indigo-bg hover:!text-surface-indigo-fg">
                        {" "}
                        {key}
                      </AccordionTrigger>

                      <AccordionContent className="flex flex-col text-balance !pb-0">
                        {value.lists.map((list, j) => {
                          return (
                            <div
                              key={`${key}-${list.slug}-${j}`}
                              className="py-3 !text-text-color_2 hover:!bg-surface-indigo-bg-active hover:!text-surface-indigo-fg px-5"
                            >
                              {list.label}
                            </div>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  );
                }
              )}
            </Accordion>
          </div>
        </aside>
      )}
    </>
  );
});
