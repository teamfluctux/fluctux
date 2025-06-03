"use client";
import React, { useState } from "react";
import { FxButton } from "../fxbutton";
import { LUCIDE_WORKSPACE_ICON_SIZE } from "../constant";
import { Eye, EyeClosed } from "lucide-react";

type TogglePasswordButtonPropsType = {
  classNames?: {
    buttonClassName: string;
    iconClassName: string;
  };
};

export const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const TogglePasswordButton: React.FC<TogglePasswordButtonPropsType> = ({
    classNames,
  }) => {
    const tempIconClassName = classNames?.iconClassName
      ? classNames.iconClassName
      : "text-text-svg_default group-hover:text-text-color_default_white";
    return (
      <FxButton
        className={`fx-flex-center ${classNames?.buttonClassName ? classNames.buttonClassName : "p-1 rounded-tiny right-2 absolute hover:bg-background-color_750C top-1/2 -translate-y-1/2"}  transition-colors group`}
        variant="ghost_zinc"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <Eye
            size={LUCIDE_WORKSPACE_ICON_SIZE}
            className={`${tempIconClassName}`}
          />
        ) : (
          <EyeClosed
            size={LUCIDE_WORKSPACE_ICON_SIZE}
            className={`${tempIconClassName}`}
          />
        )}
      </FxButton>
    );
  };
  return {
    TogglePasswordButton,
    showPassword,
    setShowPassword,
  };
};
