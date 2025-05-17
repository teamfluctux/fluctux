"use client";
import { FxButton, FxInput, useTogglePassword } from "@fluctux/ui";
import aiIcon from "../../../../../public/ai.png";
import Image from "next/image";

import React from "react";

const ToggleShowPasswordWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center items-center w-full relative">
      {children}
    </div>
  );
};

export default function CreatePassword() {
  const {
    TogglePasswordButton: ToggleShowMainPasswordButton,
    showPassword: isShowMainPassword,
  } = useTogglePassword();
  const {
    TogglePasswordButton: ToggleShowConfirmPasswordButton,
    showPassword: isShowConfirmPassword,
  } = useTogglePassword();

  return (
    <div className="w-full h-screen fx-flex-center">
      <div className="max-w-[420px] w-full ">
        <h2 className="text-read_25 font-medium">Create Password</h2>
        <div className="mt-5">
          <ToggleShowPasswordWrapper>
            <FxInput
              variant="primary"
              size="md"
              radius="primary"
              className="w-full"
              type={isShowMainPassword ? "text" : "password"}
            />

<div className="absolute w-[50px] h-[50px] group right-7 flex justify-center items-center">
  {/* Glow rotating on hover */}
  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-spin-gradient transition-all duration-500 blur-md bg-gradient-to-br from-[#2563eb] to-[#d946ef]"></div>

  {/* Actual image */}
  <div className="relative z-10 rounded-full overflow-hidden">
    <Image
      src={aiIcon}
      alt="AI"
      width={200}
      height={200}
      className="transition-all duration-300 w-[25px] h-[25px] group-hover:brightness-125 cursor-pointer group-hover:contrast-200"
    />
  </div>
</div>



            <ToggleShowMainPasswordButton />
          </ToggleShowPasswordWrapper>

          <div className="mt-5">
            <p className="text-read_16 text-text-color_2 font-medium">
              Confirm password
            </p>
            <ToggleShowPasswordWrapper>
              <FxInput
                variant="primary"
                size="md"
                radius="primary"
                className="w-full"
                type={isShowConfirmPassword ? "text" : "password"}
              />
              <ToggleShowConfirmPasswordButton />
            </ToggleShowPasswordWrapper>
          </div>

          <div className="mt-5">
            <FxButton
              className="w-full"
              variant="primary"
              size="md"
              radius="primary"
            >
              <p className="font-medium text-white">Next</p>
            </FxButton>
          </div>
        </div>
      </div>
    </div>
  );
}
