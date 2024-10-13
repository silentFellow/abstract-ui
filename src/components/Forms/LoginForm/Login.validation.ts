import { z } from "zod";

export const getLoginValidation = (withEmail: boolean) => {
  const baseSchema = z.object({
    username: z.string().min(3, "minimum 3 characters").max(20, "maximum 20 characters"),
    password: z.string().min(6, "minimum 6 characters").max(20, "maximum 20 characters"),
  })

  if(withEmail) {
    return baseSchema.extend({
      username: z.string().min(3, "minimum 3 characters").max(20, "maximum 20 characters").or(z.string().email(("Invalid email"))),
      // username: z.string().email("invalid email").or(z.string().min(3, "minimum 3 characters").max(20, "maximum 20 characters"))
    })
  }

  return baseSchema
}
