"use client";

import { Heading } from "@/components";
import { useReactForm } from "@fluctux/hooks";
import {
    FxButton,
    FxInput,
    FxSeparator,
    GoogleIcon,
    Label
} from "@fluctux/ui";
import { loginZodSchema } from "@fluctux/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";

export default function LoginPage() {
    const router = useRouter();
    const { register, handleSubmit, errors } = useReactForm({
        ZOD_SCHEMA: loginZodSchema,
    });

    const onSubmit = (data: z.infer<typeof loginZodSchema>) => {
        window.alert(data.email)
    };

    return (
        <div className=" w-full">
            <Heading text=" Login to Fluctux" />

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label className="mb-2">Email</Label>
                <FxInput
                    isError={errors.email && true}
                    className="w-full text-workspace_1 font-medium"
                    variant="primary"
                    size="md"
                    {...register("email")}
                    placeholder="youremail@gmail.com"
                    radius="primary"
                />
                {errors.email && <p>{errors.email.message}</p>}
                <div className="flex justify-between items-center gap-3 mb-2 mt-4">
                    <Label className=" ">Password</Label>

                    <Link href={"/"}>
                        <Label className="text-text-color_1 hover:!text-text-color_4 transition-colors !cursor-pointer ">
                            Forget Password?
                        </Label>
                    </Link>
                </div>
                <FxInput
                    isError={errors.password && true}
                    className="w-full text-workspace_1 font-medium tracking-widest "
                    type="password"
                    variant="primary"

                    {...register("password")}
                    placeholder="••••••••"
                    size="md"
                    radius="primary"
                />
                {errors.password && <p>{errors.password.message}</p>}

                <FxButton
                    type="submit"
                    className="w-full mt-5"
                    variant="primary"
                    size="md"
                    radius="primary"
                >
                    <p className="font-medium text-white text-workspace_1">Continue</p>
                </FxButton>
            </form>

            <p className="text-text-color_2 text-[14px] mt-8">
                By signing in, you agree to our{" "}
                <Link
                    href={""}
                    className="text-text-color_1 hover:!text-text-color_4 transition-colors"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href={""}
                    className="text-text-color_1 hover:!text-text-color_4 transition-colors"
                >
                    Privacy Policy.
                </Link>
            </p>
        </div>
    );
}
