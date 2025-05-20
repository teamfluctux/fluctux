"use client";
import React, { useCallback, useRef, useState } from "react";
import { Network, Pentagon, UsersRound, Workflow } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper/types";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

interface LucideSvgIconType extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

interface HeroWorkspaceSliderItemsType {
  label: string;
  icon: React.ComponentType<LucideSvgIconType>;
}

const HERO_WORKSPACE_SLIDER_TYPE: HeroWorkspaceSliderItemsType[] = [
  {
    label: "Workspace",
    icon: Pentagon,
  },
  {
    label: "Teams",
    icon: UsersRound,
  },
  {
    label: "Workflows",
    icon: Workflow,
  },
  {
    label: "Connections",
    icon: Network,
  },
];

export const HeroTabs = () => {
  const swiperRef = useRef<SwiperTypes>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const chromeTabRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const moveChromeTabRefTo = useCallback(
    (btn: HTMLElement) => {
      if (!chromeTabRef.current) return;
      chromeTabRef.current.style.width = `${btn.offsetWidth}px`;
      chromeTabRef.current.style.left = `${btn.offsetLeft}px`;
    },
    [slideIndex]
  );

  return (
    <div className="w-full px-[1px]">
      <div>
        <div className=" left-1/2 -translate-x-1/2 w-fit relative h-[35px] pb-[0.4rem] flex justify-center items-center">
          {/* chrome tab */}
          <div
            ref={chromeTabRef}
            className="w-[100px] left-0 h-full transition-all duration-500 absolute bg-gradient-to-t dark:from-fx_indigo-900 from-fx_indigo-400 dark:via-fx_indigo-900 via-fx_indigo-400 dark:to-fx_indigo-600 to-fx_indigo-300 backdrop-blur-3xl bottom-0 -z-10 rounded-t-[10px] chrome_tab "
          ></div>

          {HERO_WORKSPACE_SLIDER_TYPE.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                ref={(el) => void (tabRefs.current[i] = el)}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`transition-colors group select-none fx-flex-center gap-1  rounded h-full px-3 text-workspace_2 font-medium  ${slideIndex === i ? "text-text-color_default_white bg-transparent drop-shadow-md" : "text-text-color_2 hover:text-text-color_1"}`} 
              > 
                <div className="text-text-color_1">
                  <Icon
                    size={16}
                    className={` transition-colors duration-300 ${slideIndex === i ? "text-text-color_default_white drop-shadow-md" : "text-text-svg_default group-hover:text-text-color_1"}`}
                  />
                </div>
                <span className="transition-colors duration-300">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full h-[650px] p-2 rounded-[25px] bg-gradient-to-t from-background-color_850C via-background-color_850C dark:to-fx_indigo-950 to-fx_indigo-300 hero_workspace_box relative">
        <div className="absolute w-full h-[8px] bg-gradient-to-r from-transparent via-background-color_850C  to-transparent top-0 left-0"></div>
        <div className=" w-[600px] absolute -z-10 left-[50%] -translate-x-1/2 -top-[110px] h-[600px] rounded-t-[50%] bg-background-indigo_primary  blur-[150px] opacity-35"></div>
        <div className="w-full h-full bg-background-color_925C overflow-hidden rounded-[20px] border border-border-color_1">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            onSlideChange={(swiper) => {
              const idx = swiper.realIndex;
              setSlideIndex(idx);

              const btn = tabRefs.current[idx];
              if (btn) moveChromeTabRefTo(btn);
            }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={false}
            className="w-full h-full"
            modules={[EffectFade, Autoplay]}
            effect={"fade"}
          >
            <SwiperSlide className="bg-background-color_925C">
              <Image src={"/images/demo_management.png"} width={1200} height={1200} alt="work-item-dark" className="object-cover object-top w-full h-full" />
            </SwiperSlide>
            <SwiperSlide className="bg-background-color_925C">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-background-color_925C">Slide 3</SwiperSlide>
            <SwiperSlide className="bg-background-color_925C">Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
