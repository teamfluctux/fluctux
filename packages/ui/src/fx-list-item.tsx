import React, { SVGProps } from "react";

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
    <li className={`text-workspace_2 gap-2 font-medium text-text-color_2 flex justify-start items-center list-none hover:bg-background-color_800C hover:text-text-color_1 transition-colors ${className}  ${iconPosition === "right" ? "flex-row-reverse" : ""}`}>
      {icon}
      <span>{label}</span>
    </li>
  );
};
