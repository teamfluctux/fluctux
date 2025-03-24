import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const SidebarLeftIcon: React.FC<SvgType> = ({
  width = SvgSizeInSQR.PRIMARY,
  height = SvgSizeInSQR.PRIMARY,
  className,
  color = "var(--svg-default-color)",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      color={color}
      {...props}
    >
      <path
        d="M20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.5 3L9.5 21"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      ></path>
      <path
        d="M5 7H6M5 10H6"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
