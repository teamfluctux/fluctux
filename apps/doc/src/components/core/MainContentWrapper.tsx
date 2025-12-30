"use client";
import { ComboBox, FxButton } from "@fluctux/ui";
import { ChevronsUpDown, SearchIcon } from "lucide-react";
import React from "react";

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

export const MainContentWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full">
      {/* content header */}
      <div className="content-header backdrop-blur-md z-50 sticky top-0 w-full h-[64px]  border-b border-border-color_1 flex justify-between items-center px-5">
        <div className="flex justify-start items-center gap-2">
          <ComboBox
            data={frameworks}
            currentValue="next.js"
            onComboDataSelect={(data) => console.log(data)}
            showSearchBox={true}
            popoverTriggerComponent={
              <FxButton size="sm" variant="secondary" radius="tiny">
                {frameworks.find((v) => v.value === "next.js")?.label}
                <ChevronsUpDown className="opacity-50" size={16} />
              </FxButton>
            }
          />
          <span className="text-text-color_2">/</span>
          <span className="text-text-color_1 text-workspace_1 font-weight_450">
            Getting Started
          </span>
        </div>
        <FxButton variant="secondary" size="md_2" className="!px-0 !w-8">
          <SearchIcon size={16} />
        </FxButton>
      </div>

      {children}
    </div>
  );
};
