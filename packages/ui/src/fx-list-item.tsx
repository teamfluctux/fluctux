import React, { PropsWithChildren, SVGProps } from "react";

export const FxListItem = ({
  label,
  icon,
  iconPosition = "left",
  className = "",
}: {
  label: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}) => {
  return (
    <li
      className={`text-workspace_2 gap-2 font-medium text-text-color_2 flex justify-start items-center list-none hover:bg-background-color_800C hover:text-text-color_1 transition-colors ${className}  ${iconPosition === "right" ? "flex-row-reverse" : ""}`}
    >
      {icon}
      <span>{label}</span>
    </li>
  );
};

export const FxGroupListItem = ({
  groupLabel,
  children,
  className = "",
  classNames: {
    labelClassName = "",
    childrenContainerClassName = "",
  }
}: PropsWithChildren & { groupLabel: string, className?: string, classNames: {
  labelClassName?: string;
  childrenContainerClassName?: string;
} }) => {
  return (
    <div className={`w-full ${className}`}>
      <p className={`text-workspace_3 font-medium text-text-color_3 ${labelClassName}`}>{groupLabel}</p>
      <div className={`${childrenContainerClassName}`}>{children}</div>
    </div>
  );
};
