"use client";

import {
  DiscordIcon,
  GithubIcon,
  GoogleIcon,
  FxButton,
  FxInput,
  FxSeparator,
  SlackIcon,
  Label,
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
        <h1 className="text-[25px] font-medium text-center mb-6 black-white-gradient-bt">
          Login to Fluctux
        </h1>

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
            <p className="font-medium text-text-color_2 text-workspace_1 transition-colors group-hover:text-text-color_1">
              Login with Google
            </p>
            <GoogleIcon />
          </FxButton>
        </>

        <FxSeparator orientation="horizontal" gap="xl">
          <p className="text-text-color_2 bg-background-color_950C pl-2 pr-2 font-medium text-workspace_1">
            Or
          </p>
        </FxSeparator>
        <>
          <Label className="mb-2">Email</Label>
          <FxInput
            className="w-full text-workspace_1 font-medium"
            variant="primary"
            size="md"
            placeholder="youremail@gmail.com"
            radius="primary"
          />
          <div className="flex justify-between items-center gap-3 mb-2 mt-4">
            <Label className=" ">Password</Label>

            <Link href={""}>
              <Label className="fx-link-color hover:to-blue-800">Forget Password?</Label>
            </Link>
          </div>
          <FxInput
            className="w-full text-workspace_1 font-medium tracking-widest"
            type="password"
            variant="primary"
            placeholder="••••••"
            size="md"
            radius="primary"
          />

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
