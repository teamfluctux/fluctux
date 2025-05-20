import React from "react";
import Image from "next/image";

const WHITE_COMPANY_LOGOS = [
  "/company_images/openai_white.png",
  "/company_images/startech_white.png",
  "/company_images/sonar_white.png",
  "/company_images/funtech_white.png",
  "/company_images/vercel_white.png",
  "/company_images/prime_white.png",
  "/company_images/aequor_white.png",
  // repeat again to make it loop seamlessly
  "/company_images/openai_white.png",
  "/company_images/startech_white.png",
  "/company_images/sonar_white.png",
  "/company_images/funtech_white.png",
  "/company_images/vercel_white.png",
  "/company_images/prime_white.png",
  "/company_images/aequor_white.png",
];

const BLACK_COMPANY_LOGOS = [
  "/company_images/openai_black.png",
  "/company_images/startech_black.png",
  "/company_images/sonar_black.png",
  "/company_images/funtech_black.png",
  "/company_images/vercel_black.png",
  "/company_images/prime_black.png",
  "/company_images/aequor_black.png",
  // repeat again to make it loop seamlessly
  "/company_images/openai_black.png",
  "/company_images/startech_black.png",
  "/company_images/sonar_black.png",
  "/company_images/funtech_black.png",
  "/company_images/vercel_black.png",
  "/company_images/prime_black.png",
  "/company_images/aequor_black.png",
];

export const CompanyMarquee = () => {
  return (
    <div className="fx-layout-max-1200 mx-auto py-5 flex justify-between items-center">
      <div className="max-w-[450px] w-full flex-shrink-0">
        <h2 className="text-read_20 font-medium">
          Powering the Next Generation of Teamwork
        </h2>
        <p className="text-read_16 font-medium text-text-color_2 leading-5 mt-1">
          From startups to enterprises, teams rely on us to stay aligned and
          move faster.
        </p>
      </div>

      <div className="company_logo_marquee_wrapper w-full relative">
        <div className=" flex justify-start items-center gap-10 company_logo_marquee">
          {WHITE_COMPANY_LOGOS.map((src, i) => (
            <Image
              key={i}
              src={src}
              width={300}
              height={300}
              alt="company-logo"
              className="h-[25px] object-contain object-center dark:block hidden"
            />
          ))}
          {BLACK_COMPANY_LOGOS.map((src, i) => (
            <Image
              key={i}
              src={src}
              width={300}
              height={300}
              alt="company-logo"
              className="h-[25px] object-contain object-center dark:hidden block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
