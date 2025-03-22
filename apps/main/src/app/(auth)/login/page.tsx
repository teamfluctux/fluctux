"use client";

import {
  DiscordIcon,
  GithubIcon,
  GoogleIcon,
  FxButton,
  FxInput,
  FxSeparator,
} from "@fluctux/ui";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className=" w-full">
      <h1 className="text-[25px] font-medium mb-5 black-white-gradient-bt">Login to Fluctux</h1>
      <>
        <p className="text-text-color_2 font-medium">Email</p>
        <FxInput
          className="w-full"
          variant="primary"
          size="md"
          placeholder="youremail@gmail.com"
          radius="primary"
        />
        <p className="text-text-color_2 mt-3 font-medium">Password</p>
        <FxInput
          className="w-full"
          type="password"
          variant="primary"
          size="md"
          placeholder="********"
          radius="primary"
        />
        <div className="mt-1">
          <Link href={""} className="fx-link-color hover:underline text-[14px]">
            Forget Password?
          </Link>
        </div>

        <FxButton
          className="w-full mt-5"
          variant="primary"
          size="md"
          radius="primary"
        >
          <p className="font-medium text-white">Continue</p>
        </FxButton>
      </>

      <FxSeparator orientation="horizontal" gap="xl">
        <p className="text-text-color_2 bg-background-color_1 pl-2 pr-2 font-medium">Or</p>
      </FxSeparator>

      <>
        <FxButton
          className="w-full  flex justify-center items-center gap-2"
          variant="secondary"
          size="md"
          radius="primary"
        >
          <p className="font-medium text-text-color_2">Google</p>
          <GoogleIcon />
        </FxButton>
        <div className="flex justify-center items-center gap-3 mt-3">
          <FxButton
            className="w-full  flex justify-center items-center gap-2"
            variant="secondary"
            size="md"
            radius="primary"
          >
            <p className="font-medium text-text-color_2">Github</p>
            <GithubIcon />
          </FxButton>
          <FxButton
            className="w-full  flex justify-center items-center gap-2"
            variant="secondary"
            size="md"
            radius="primary"
          >
            <p className="font-medium text-text-color_2">Discord</p>
            <DiscordIcon width={25} height={25} color="var(--primary-color)" />
          </FxButton>
        </div>
      </>

      <p className="text-text-color_2 text-[14px] mt-8">
        By signing in, you agree to our{" "}
        <Link href={""} className="fx-link-color hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={""} className="fx-link-color hover:underline">
          Privacy Policy.
        </Link>
      </p>
    </div>
  );
}
