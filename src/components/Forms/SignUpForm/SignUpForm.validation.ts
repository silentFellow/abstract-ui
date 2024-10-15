import { z } from "zod";

export const getSignUpValidation = (withEmail: boolean) => {
  const baseSchema = z.object({
    username: z.string().min(3, "minimum 3 characters").max(20, "maximum 20 characters"),
    password: z.string().min(6, "minimum 6 characters").max(20, "maximum 20 characters"),
    confirmPassword: z.string().min(6, "minimum 6 characters").max(20, "maximum 20 characters"),
  });

  if (withEmail) {
    return baseSchema.extend({
      email: z.string().email("invalid email"),
    });
  }

  return baseSchema.refine(data => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });
};
