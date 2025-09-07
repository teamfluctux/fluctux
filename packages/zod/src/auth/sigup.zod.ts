import {z} from "zod"

export const signupZodSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .optional(),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });