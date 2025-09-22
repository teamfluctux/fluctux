import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

interface UseReactFormPropsType<T extends z.ZodTypeAny> {
  ZOD_SCHEMA: T;
}

export const useReactForm = <T extends z.ZodTypeAny>({
  ZOD_SCHEMA,
}: UseReactFormPropsType<T>) => {
  type FormData = z.infer<T> extends object ? z.infer<T> : FieldValues;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ZOD_SCHEMA),
  });

  return {
    register,
    handleSubmit,
    setValue,
    errors,
  };
};
