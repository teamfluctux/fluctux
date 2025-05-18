'use client'
import { FxButton } from "@fluctux/ui";
import React from "react";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* <div className="absolute inset-0 h-screen -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--background-color-900C)1px,transparent_1px),linear-gradient(to_bottom,var(--background-color-900C)1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
      </div> */}

      <div className="absolute h-[800px] w-full top-0 left-0 overflow-hidden -z-10">
        <div className="flex justify-center items-center w-full h-full rotate-[140deg]">
          <div className="w-[100px] h-[calc(100vh+150%)] bg-[linear-gradient(85deg,_var(--background),_var(--background),_var(--background-color-900C))] "></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 11 bg-[linear-gradient(262deg,_var(--background-color-900C),_var(--background),_var(--background))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 10 bg-[linear-gradient(92deg,_var(--background),_var(--background),_var(--background-color-900C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 9 bg-[linear-gradient(63deg,_var(--background),_var(--background),_var(--background-color-900C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 8 bg-[linear-gradient(81deg,_var(--background),_var(--background),_var(--background-color-900C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 7 bg-[linear-gradient(96deg,_var(--background),_var(--background),_var(--background-color-850C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 6 bg-[linear-gradient(86deg,_var(--background),_var(--background),_var(--background-color-850C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 5 bg-[linear-gradient(94deg,_var(--background),_var(--background),_var(--background-color-900C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 4 bg-[linear-gradient(85deg,_var(--background),_var(--background),_var(--background-color-800C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 3 bg-[linear-gradient(112deg,_var(--background),_var(--background),_var(--background-color-900C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 2 bg-[linear-gradient(97deg,_var(--background),_var(--background),_var(--background-color-850C))]"></div>
          <div className="w-[100px] h-[calc(100vh+150%)] 1 bg-[linear-gradient(84deg,_var(--background),_var(--background-color-900C))]"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-background-color_950C h-[300px]"></div>
      </div>

      <div className="fx-layout-max-1200 mx-auto h-[1000px]">
        <div>
          <div className="w-full flex flex-col justify-center items-center mt-52">
            <h1 className="text-[55px] font-semibold text-center max-w-[900px] w-full leading-[3.6rem]">
              Purpose-Built for Project Success and Team Connection
            </h1>
            <p className="text-[18px] font-medium text-text-color_2 text-center max-w-[800px] mt-6 leading-[1.5rem]">
              Designed for your progress, Fluctux is the intuitive project
              management and social collaboration platform that works the way
              you do. Unite your team and effortlessly manage projects across
              any industry
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-3 mt-6">
            <FxButton radius="primary" className="py-2 px-5 font-medium text-workspace_1">
              Get Started
            </FxButton>
            <FxButton radius="primary" className="py-2 px-5 bg-transparent hover:backdrop-blur-3xl hover:bg-transparent hover:border border-fx_indigo-500 font-medium text-workspace_1">
              Get Custom Guidance
            </FxButton>

          </div>

          <div className="w-full px-[1px]">

            <div className="w-full h-[650px] mt-16 p-2 rounded-[25px] bg-background-color_850C hero_workspace_box relative">
              <div className="w-full absolute -z-10 left-0 -top-[80px] h-[100px] rounded-t-[50%] bg-fx_indigo-500 blur-[200px]"></div>
              <div className="w-full h-full bg-background-color_925C overflow-hidden rounded-[20px] border border-border-color_1"></div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  );
}
