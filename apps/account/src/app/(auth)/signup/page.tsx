"use client";

import { useReactForm } from "@fluctux/hooks";
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
import { userZodSchema } from "@fluctux/zod";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import AuthWrapper from "../auth-wrapper";

export default function SignUpPage() {
  const { register, handleSubmit, errors } = useReactForm({
    ZOD_SCHEMA: userZodSchema,
  });

  const onSubmit = (data: z.infer<typeof userZodSchema>) => {
    console.log(data.fname);
    console.log(data.lname);
    console.log(data.email);
  };

  return (
    <AuthWrapper>
      <div className="w-full">
        <h1 className="text-[25px] text-center font-medium mb-6 black-white-gradient-bt">
          Signup to Fluctux
        </h1>

        <FxButton
          className="w-full  flex justify-center items-center gap-2 group "
          variant="secondary"
          size="md"
          radius="primary"
        >
          <p className="text-workspace_1 font-medium text-text-color_2 transition-colors group-hover:text-text-color_1">
            Sign up with Google
          </p>
          <GoogleIcon />
        </FxButton>

        <FxSeparator orientation="horizontal" gap="xl">
          <p className="text-text-color_2 bg-[var(--background)] font-medium pl-2 pr-2 text-workspace_1">
            Or
          </p>
        </FxSeparator>

        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <Label className="mb-2">Email</Label>

            <FxInput
              className="w-full text-workspace_1 font-medium"
              variant="primary"
              size="md"
              placeholder="youremail@gmail.com"
              radius="primary"
            />
            <Label className="mb-2 mt-4">Password</Label>
            <FxInput
              className="w-full text-workspace_1 font-medium tracking-widest"
              type="password"
              variant="primary"
              placeholder="••••••"
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
              type="submit"
              className="w-full mt-5"
              variant="primary"
              size="md"
              radius="primary"
            >
              <p className="font-medium text-white text-workspace_1">
                Continue
              </p>
            </FxButton>
          </>
        </form>

        <p className="text-text-color_2 text-[14px] mt-8">
          By signing in, you agree to our{" "}
          <Link href={""} className="text-[var(--link-color)] hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href={""} className="text-[var(--link-color)] hover:underline">
            Privacy Policy.
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
}
