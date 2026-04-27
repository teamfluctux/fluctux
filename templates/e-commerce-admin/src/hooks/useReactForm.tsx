// MSG_WARNING: Move to packages/hooks
import { z } from "zod/v4";
import { type FieldValues, useForm } from "react-hook-form";

interface UseReactFormPropsType<T extends z.ZodTypeAny> {
  ZOD_SCHEMA: T;
}

export const useReactForm = <T extends z.ZodTypeAny>({
  ZOD_SCHEMA: _,
}: UseReactFormPropsType<T>) => {
  type FormData = z.infer<T> extends object ? z.infer<T> : FieldValues;

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<FormData>();

  return {
    register,
    handleSubmit,
    setValue,
  };
};
