import React from "react";
import type { ObjectListArrayType } from "@fluctux/types";
import { WorkSpaceLinkList } from "./workspace-link-list";
export const ObjectListArray = ({ data }: { data: ObjectListArrayType }) => {
  return (
    <>
      {Object.entries(data).map(([key, value], i) => {
        return (
          <div key={`${i}-${key}`} className="mb-5">
            <p className="text-workspace_2 text-text-color_3 font-weight_450 px-2">
              {key}
            </p>
            <div className="mt-1">
              {value.map((item, j) => {
                return (
                  <WorkSpaceLinkList
                    icon={item.icon}
                    key={`${i}${j}-${item.slug}`}
                  >
                    {item.label}
                  </WorkSpaceLinkList>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
