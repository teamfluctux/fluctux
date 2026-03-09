import { UserIcon, CodeIcon } from "@fluctux/ui";
import React, { useEffect } from "react";
import { useRefinementList, UseRefinementListProps } from "react-instantsearch";

export default function DocCustomRefinementList(props: UseRefinementListProps) {
  const { items, refine } = useRefinementList(props);

  useEffect(() => {
    if (items.length > 0 && !items.some((item) => item.isRefined)) {
      refine(items[0]!.value); // Set the first item as the default refinement
    }
  }, [items, refine]);

  const handleCheckboxChange = (value: string) => {
    // Uncheck all items first
    items.map((item) => {
      if (item.isRefined) {
        refine(item.value); // Uncheck the currently refined item
      }
    });
    // Then check the selected item
    refine(value);
  };

  return (
    <>
      <ul className="fx-flex-cl gap-2 pl-2 pr-2 overflow-x-auto">
        {items.map((item) => (
          <li
            key={item.label}
            className={`${item.isRefined ? "fx-third-bg text-(--foreground)" : "fx-label-color"} font-medium p-2  pt-1 pb-1 rounded-tiny shrink-0`}
          >
            <label className="cursor-pointer flex flex-col justify-center items-start">
              <input
                className="hidden"
                type="checkbox"
                checked={item.isRefined}
                onChange={() => handleCheckboxChange(item.value)}
              />
              <div className="fx-flex-cl gap-2">
                <div
                  className={`w-[30px] h-[30px] rounded-tiny border fx-border-color fx-flex-center ${item.isRefined && "fx-primary-purple-transparent-bg border-none"} shrink-0`}
                >
                  {item.value === "user" ? <UserIcon /> : <CodeIcon />}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="fx-flex-center gap-2">
                    <span>
                      {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                    </span>
                    <span className="p-px w-[25px] h-[25px] text-workspace_3 rounded-tablet border fx-border-color shrink-0 fx-flex-center text-(--primary-color) ">
                      {" "}
                      {item.count}
                    </span>
                  </div>
                  <span className="text-workspace_3 fx-sec-label-color">
                    {item.value === "user"
                      ? "Search as User"
                      : "Search as Developer"}
                  </span>
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
