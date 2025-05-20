import { HeroMainContent } from "@/components/landing_page/hero-main-content";
import { HeroTabs } from "@/components/landing_page/hero-tabs";
import React from "react";

export default function HomePage() {
  return (
    <div className="w-full pb-24">
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

      <section className="w-full relative">
        <div className="fx-layout-max-1200 mx-auto ">
          <div>
            {/* Hero main content here */}
            <HeroMainContent />
            {/* hero tabs here */}
            <HeroTabs />
          </div>
        </div>
        <div className="w-full h-[300px] absolute bottom-[-180px] bg-background-color_950C z-10 blur-[50px]"></div>
      </section>

      <section className="w-full relative z-10 mt-14">
        <div className="fx-layout-max-1200 mx-auto py-5">
          <div className="max-w-[450px] w-full">
          <h2 className="text-read_20 font-medium">Powering the Next Generation of Teamwork</h2>
          <p className="text-read_16 font-medium text-text-color_2 leading-5 mt-1">From startups to enterprises, teams rely on us to stay aligned and move faster.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
