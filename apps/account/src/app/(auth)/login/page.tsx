"use client";

import {
  DiscordIcon,
  GithubIcon,
  GoogleIcon,
  FxButton,
  FxInput,
  FxSeparator,
  SlackIcon,
} from "@fluctux/ui";
import Link from "next/link";
import React from "react";
import AuthWrapper from "../auth-wrapper";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <AuthWrapper>
      <div className=" w-full">
        <h1 className="text-[25px] font-medium mb-5 black-white-gradient-bt">
          Login to Fluctux
        </h1>
        <>
          <p className="text-text-color_2 font-medium text-workspace_1">
            Email
          </p>
          <FxInput
            className="w-full text-workspace_1 font-medium"
            variant="primary"
            size="md"
            placeholder="youremail@gmail.com"
            radius="primary"
          />
          <p className="text-text-color_2 mt-3 font-medium text-workspace_1">
            Password
          </p>
          <FxInput
            className="w-full text-workspace_1 font-medium"
            type="password"
            variant="primary"
            size="md"
            radius="primary"
          />
          <div className="mt-1">
            <Link
              href={""}
              className="fx-link-color hover:underline text-workspace_2"
            >
              Forget Password?
            </Link>
          </div>

          <FxButton
            onClick={async () => {
              const res = await fetch("http://localhost:5000/api/auth/csrf");
              const { csrfToken } = await res.json();

              await fetch("http://localhost:5000/api/auth/signin", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  csrfToken,
                  provider: "google",
                }),
              });
            }}
            className="w-full mt-5"
            variant="primary"
            size="md"
            radius="primary"
          >
            <p className="font-medium text-white text-workspace_1">Continue</p>
          </FxButton>
        </>

        <FxSeparator orientation="horizontal" gap="xl">
          <p className="text-text-color_2 bg-background-color_950C pl-2 pr-2 font-medium text-workspace_1">
            Or
          </p>
        </FxSeparator>

        <>
          <FxButton
            onClick={() => {
              router.push("http://localhost:5000/api/auth/signin/google");
            }}
            className="w-full  flex justify-center items-center gap-2 group"
            variant="secondary"
            size="md"
            radius="primary"
          >
            <p className="font-medium text-text-color_2 text-workspace_1 group-hover:text-text-color_1">
              Login with Google
            </p>
            <GoogleIcon />
          </FxButton>
          <div className="flex justify-center items-center gap-3 mt-3">
            <FxButton
              onClick={() => {
              router.push("http://localhost:5000/api/auth/signin/github");
            }}
              className="w-full  flex justify-center items-center gap-2 group"
              variant="secondary"
              size="md"
              radius="primary"
            >
              <p className="font-medium text-text-color_2 text-workspace_1 group-hover:text-text-color_1">
                Login with Github
              </p>
              <GithubIcon />
            </FxButton>
            <FxButton
              className="w-full  flex justify-center items-center gap-2 group"
              variant="secondary"
              size="md"
              radius="primary"
            >
              <p className="font-medium text-text-color_2 text-workspace_1 group-hover:text-text-color_1">
                Login with Slack
              </p>
              <SlackIcon width={25} height={25} />
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
    </AuthWrapper>
  );
}
