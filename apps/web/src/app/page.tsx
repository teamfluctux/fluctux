import React from "react";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* <div className="absolute inset-0 h-screen -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--background-color-900C)1px,transparent_1px),linear-gradient(to_bottom,var(--background-color-900C)1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
      </div> */}

      <div className="fx-layout-max-1200 mx-auto h-[1000px]">
        <div className="w-full flex flex-col justify-center items-center mt-52">
         
            <h1 className="text-[55px] font-semibold text-center max-w-[900px] w-full leading-[3.6rem]">
              Purpose-Built for Project Success and Team Connection
            </h1>
            <p className="text-[18px] font-medium text-text-color_2 text-center max-w-[800px] mt-5 leading-[1.5rem]">
              Designed for your progress, Fluctux is the intuitive project
              management and social collaboration platform that works the way
              you do. Unite your team and effortlessly manage projects across
              any industry
            </p>
     
        </div>
      </div>
    </div>
  );
}
