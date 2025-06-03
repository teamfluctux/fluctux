"use client";

import React from "react";
import { FxButton } from "@fluctux/ui";

export const HeroMainContent = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-52">
        <h1 className="main_hero_heading_sync text-center font-semibold max-w-[900px] w-full">
          Made for Teams
          <br />
          Designed for Collaboration
        </h1>
        <p className="text-[18px] weight_450 text-text-color_4 text-center max-w-[600px] mt-5 leading-[1.5rem]">
          Combining smart project management with social connection to help
          teams move faster, stay in sync, and get more done together
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-3 mt-6 mb-24">
        <FxButton
          radius="primary"
          className="py-2 px-5  transition-colors text-fx_zinc-50"
        >
          <span className=" font-medium text-workspace_1">
          Get Started

          </span>
        </FxButton>
        <FxButton
          radius="primary"
          variant="secondary"
          className="py-2 px-5 font-medium text-workspace_1 transition-colors"
          
        >
          Get Custom Guidance
        </FxButton>
      </div>
    </>
  );
};
