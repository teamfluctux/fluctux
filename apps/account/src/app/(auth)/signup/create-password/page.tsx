"use client";
import { FxButton, FxInput, useTogglePassword } from "@fluctux/ui";
import aiIcon from "../../../../../public/ai.png"
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
            <FxButton
                className={`fx-flex-center p-[3px] rounded-tiny right-9 absolute hover:bg-background-color_750C transition-colors group`}
                variant="silent"
              >
                <Image src={aiIcon} width={200} height={200} className="w-[25px] h-[25px] " alt="AI" />
              </FxButton>
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
                className="w-full mt-1"
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
