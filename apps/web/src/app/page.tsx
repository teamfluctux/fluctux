"use client";
import React, { useRef } from "react";
import { FxButton } from "@fluctux/ui";
import { Network, Pentagon, UsersRound, Workflow } from "lucide-react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper/types";
import { EffectFade } from "swiper/modules";

interface HeroWorkspaceSliderItemsType {
  label: string;
  icon: React.ReactElement;
}

const HERO_WORKSPACE_SLIDER_TYPE: HeroWorkspaceSliderItemsType[] = [
  {
    label: "Workspace",
    icon: (
      <Pentagon
        size={16}
        className="text-text-svg_default group-hover:text-text-color_1 transition-colors duration-300"
      />
    ),
  },
  {
    label: "Teams",
    icon: (
      <UsersRound
        size={16}
        className="text-text-svg_default group-hover:text-text-color_1 transition-colors duration-300"
      />
    ),
  },
  {
    label: "Workflows",
    icon: (
      <Workflow
        size={16}
        className="text-text-svg_default group-hover:text-text-color_1 transition-colors duration-300"
      />
    ),
  },
  {
    label: "Connections",
    icon: (
      <Network
        size={16}
        className="text-text-svg_default group-hover:text-text-color_1 transition-colors duration-300"
      />
    ),
  },
];

export default function HomePage() {
  const swiperRef = useRef<SwiperTypes>(null);
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

      <div className="fx-layout-max-1200 mx-auto">
        <div>
          <div className="w-full flex flex-col justify-center items-center mt-52">
            <h1 className="text-[55px] font-semibold flex flex-col justify-center items-center max-w-[900px] w-full leading-[3.6rem]">
              <span>Made for Teams</span>
              <span>Designed for Collaboration</span>
            </h1>
            <p className="text-[18px] font-medium text-text-color_4 text-center max-w-[800px] mt-6 leading-[1.5rem]">
              Combining smart project management with social connection to help
              teams move faster, stay in sync, and get more done together
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-3 mt-6 mb-24">
            <FxButton
              radius="primary"
              className="py-2 px-5 font-medium text-workspace_1 transition-colors"
            >
              Get Started
            </FxButton>
            <FxButton
              radius="primary"
              variant="secondary"
              className="py-2 px-5 font-medium text-workspace_1 transition-colors"
            >
              Get Custom Guidance
            </FxButton>
          </div>

          <div className="w-full px-[1px]">
            <div>
              <div className=" left-1/2 -translate-x-1/2 w-fit relative h-[35px] pb-[0.4rem] flex justify-center items-center">
                {/* <div className="w-[100px] h-full absolute bg-background-color_850C bottom-0 -z-10 rounded-t-[10px] chrome_tab "></div> */}

                <button className="transition-colors group fx-flex-center gap-1 bg-transparent rounded h-full px-3 text-workspace_2 font-medium hover:bg-background-color_800C">
                  <Pentagon
                    size={16}
                    className="text-text-svg_default group-hover:text-text-color_1 transition-colors duration-300"
                  />
                  <span className="text-text-color_2 group-hover:text-text-color_1 transition-colors duration-300">
                    Workspace
                  </span>
                </button>
              </div>
            </div>

            <div className="w-full h-[650px] p-2  rounded-[25px] bg-background-color_850C hero_workspace_box relative">
              <div className=" w-[500px] absolute -z-10 left-[50%] -translate-x-1/2 -top-[80px] h-[500px] rounded-t-[50%] bg-background-color_950C  blur-[80px]"></div>
              <div className="w-full h-full bg-background-color_925C overflow-hidden rounded-[20px] border border-border-color_1">
                <Swiper
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  navigation={false}
                  className="w-full h-full"
                  draggable={false}
                  modules={[EffectFade]}
                  effect={"fade"}
                >
                  <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
                  <SwiperSlide className="bg-green-500">Slide 2</SwiperSlide>
                  <SwiperSlide className="bg-blue-500">Slide 3</SwiperSlide>
                  <SwiperSlide className="bg-pink-500">Slide 4</SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
