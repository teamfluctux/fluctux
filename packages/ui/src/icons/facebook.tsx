import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const FacebookIcon: React.FC<SvgType> = ({
  className,
  size = SvgSizeInSQR.PRIMARY,
  color = "var(--svg-default-color)",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    fill={color}
    viewBox="0 0 24 24"
    xmlnsXlink="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
    </g>
  </svg>
);
