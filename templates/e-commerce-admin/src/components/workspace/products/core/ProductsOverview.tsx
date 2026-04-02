
import { PRODUCTS_OVERVIEW_DATA } from "@/constants";
import { formatScaleValue } from "@fluctux/shared";
import { FxSeparator } from "@fluctux/ui";
import React from "react";

export const ProductOverview = () => {
  return (
    <div>
      <ul className="flex justify-start items-center shrink-0 ">
        {PRODUCTS_OVERVIEW_DATA.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <li className="text-workspace_2 font-medium ">
                <span className="text-text-color_2 ">{item.label}:</span>{" "}
                <span className="text-text-color_4">
                  {formatScaleValue(item.value)}
                </span>
              </li>
              {i < PRODUCTS_OVERVIEW_DATA.length - 1 && (
                <FxSeparator
                  gap="sm"
                  orientation="vertical"
                  separatorClassName="w-4! border-border-color_2!"
                />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
