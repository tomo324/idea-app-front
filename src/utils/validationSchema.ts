import { z } from "zod";

export const signupValidationSchema = z.object({
  email: z
    .string()
    .min(1, "email is required")
    .email("invalid email"),
  name: z
    .string()
    .min(1, "name is required")
    .max(20, "name must be less than 20 characters"),
  password: z
    .string()
    .min(6, "password must be at least 6 characters")
    .max(16, "password must be less than 16 characters"),
});
