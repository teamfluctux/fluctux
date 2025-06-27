import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const FxFavSVGIcon: React.FC<SvgType> = ({
  size = SvgSizeInSQR.PRIMARY,
  className,
  color = "#5b66af",
  ...props
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 396 458.98"
    {...props}
  >
    <polygon
      points="83.8 246.14 83.8 361.85 0 458.98 0 161.63 0.73 162.37 83.8 246.14"
      fill={color}
    />
    <polygon points="396 0 323.73 83.77 0 83.77 0 0 396 0" fill={color} />
    <polygon
      points="255.92 162.37 183.65 246.14 83.8 246.14 83.8 162.37 255.92 162.37"
      fill={color}
    />
  </svg>
);
