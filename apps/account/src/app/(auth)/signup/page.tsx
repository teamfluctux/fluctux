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
        <h1 className="text-[25px] font-medium mb-5 black-white-gradient-bt">
          Signup to Fluctux
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fx-flex-between-ic gap-3">
            <div>
              <p className="text-text-color_2 text-workspace_1 font-medium">
                First Name
              </p>
              <FxInput
                className="w-full text-workspace_2 font-medium"
                variant="primary"
                size="md"
                placeholder="Jhon"
                radius="primary"
                {...register("fname")}
                required
              />
              {errors.fname && <p>{errors.fname.message}</p>}
            </div>
            <div>
              <p className="text-text-color_2 text-workspace_1 font-medium">
                Last Name
              </p>
              <FxInput
                className="w-full text-workspace_1 font-medium"
                variant="primary"
                size="md"
                placeholder="Doe"
                radius="primary"
                {...register("lname")}
              />

              {errors.lname && <p>{errors.lname.message}</p>}
            </div>
          </div>
          <p className="text-text-color_2 mt-3 text-workspace_1 font-medium">
            Email
          </p>
          <FxInput
            className="w-full text-workspace_1 font-medium"
            variant="primary"
            size="md"
            placeholder="youremail@gmail.com"
            radius="primary"
            {...register("email")}
            required
          />
          {errors.email && <p>{errors.email.message}</p>}

          <FxButton
            className="w-full mt-5"
            variant="primary"
            size="md"
            radius="primary"
            type="submit"
          >
            <p className="font-medium text-white text-workspace_1">Continue</p>
          </FxButton>
        </form>

        <FxSeparator orientation="horizontal" gap="xl">
          <p className="text-text-color_2 bg-[var(--background)] font-medium pl-2 pr-2 text-workspace_1">
            Or
          </p>
        </FxSeparator>

        <>
          <FxButton
            className="w-full  flex justify-center items-center gap-2 group"
            variant="secondary"
            size="md"
            radius="primary"
          >
            <p className="text-workspace_1 font-medium text-text-color_2 group-hover:text-text-color_1">
              Sign up with Google
            </p>
            <GoogleIcon />
          </FxButton>
          <div className="flex justify-center items-center gap-3 mt-3">
            <FxButton
              className="w-full flex justify-center items-center gap-2 group"
              variant="secondary"
              size="md"
              radius="primary"
            >
              <p className="text-workspace_1 font-medium text-text-color_2 group-hover:text-text-color_1">
                Sign up with Github
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
                Sign up with Slack
              </p>
              <SlackIcon width={25} height={25} />
            </FxButton>
          </div>
        </>

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
