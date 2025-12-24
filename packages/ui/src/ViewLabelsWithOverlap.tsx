import { IconBase } from "react-icons/lib";
import React from "react";
import { AvatarFallback, Avatar, AvatarImage } from "./avatar";

export type ViewLabelsWithOverlapDataType = {
  value: string;
  label: string;
  icon?: typeof IconBase | null;
  image?: string;
  iconClassName?: string;
};

export type ViewLabelsWithOverlapPropsType = {
  data: ViewLabelsWithOverlapDataType[];
  initialPlaceholder?: React.ReactNode;
  initialPlaceholderClassname?: string;
  shortViewTextForMultipleLabels?: string;
  avatarClassname?: string;
  iconOrImageContainerClassname?: string;
};

export const ViewLabelsWithOverlap = ({
  data,
  initialPlaceholderClassname,
  initialPlaceholder,
  avatarClassname,
  shortViewTextForMultipleLabels,
  iconOrImageContainerClassname,
}: ViewLabelsWithOverlapPropsType) => {
  return (
    <>
      <div>
        {data.length > 0 ? (
          <div className="flex justify-center items-center gap-2">
            <div>
              <div
                className={`flex -space-x-1.5  ${iconOrImageContainerClassname}`}
              >
                {data.map((task, i) => {
                  const Icon = task.icon;
                  if (i < 5) {
                    return (
                      <Avatar
                        key={task.label}
                        className={`w-[20px] h-[20px] border-border-color_1 !ring-0 border outline-none ${!task.image ? "!w-fit !h-fit !p-0 !bg-transparent border-none" : " "} ${avatarClassname}`}
                      >
                        {task.image ? (
                          <AvatarImage
                            src={`${task.image}`}
                            alt={`${task.value}`}
                          />
                        ) : null}
                        <AvatarFallback>
                          {Icon && (
                            <Icon size={10} className={task.iconClassName} />
                          )}
                        </AvatarFallback>
                      </Avatar>
                    );
                  }
                })}
              </div>
            </div>
            {data.length < 2 ? <span>{data?.[0]?.label}</span> : null}
          </div>
        ) : (
          <div className={`${initialPlaceholderClassname}`}>
            {initialPlaceholder ? initialPlaceholder : "Label"}
          </div>
        )}
      </div>

      {data.length > 1 ? (
        <span>
          {data.length}{" "}
          {shortViewTextForMultipleLabels
            ? shortViewTextForMultipleLabels
            : "Labels"}
        </span>
      ) : (
        ""
      )}
    </>
  );
};
