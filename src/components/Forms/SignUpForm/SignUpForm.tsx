'use client';

import { useState, useEffect } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { getSignUpValidation } from "./SignUpForm.validation";
import type { SignUpProps, SignUpStyles } from "./SignUpForm.types";
import { cn } from "@/lib/utils";

const SignupForm = ({
  styles,
  signinRedirect,
  credentialsState,
  placeholder,
  withEmail = false
}: SignUpProps) => {
  const [style, setStyle] = useState<SignUpStyles>({})
  const validation = getSignUpValidation(withEmail);

  useEffect(() => {
    setStyle({
      container: cn("p-6 bg-[#f5f5f5] dark:bg-[rgb(33,33,33)] w-[calc(100vw-3rem)] sm:w-[30rem] max-h-[39rem] rounded-xl shadow-xl", styles?.container || ""),
      input: cn("no-focus", styles?.input || ""),
      button: cn("", styles?.button || ""),
      text: cn("", styles?.text || ""),
      linkText: cn("text-[rgb(33,33,33)] dark:text-[#f5f5f5]", styles?.linkText || ""),
      message: cn("text-red-500", styles?.message || "")
    })

  }, [styles])

  const form = useForm({
    resolver: zodResolver(validation),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: ""
    }
  })

  if(!credentialsState) return null;

  const onSubmit = (values: z.infer<typeof validation>) => credentialsState(values);

  return (
    <section className={`${style.container} ${style.text}`}>
      <h3 className="font-extrabold uppercase my-3 text-center">sign-up</h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Username</FormLabel>
                <FormControl className={style.input}>
                  <Input
                    placeholder={placeholder?.username || "Enter username..."}
                    {...field}
                  />
                </FormControl>
                <FormMessage className={style.message} />
              </FormItem>
            )}
          />

          {withEmail && (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl className={style.input}>
                    <Input
                      type="email"
                      placeholder={placeholder?.email || "Enter email..."}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className={style.message} />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Password</FormLabel>
                <FormControl className={style.input}>
                  <Input
                    placeholder={placeholder?.password || "Enter password..."}
                    {...field}
                  />
                </FormControl>
                <FormMessage className={style.message} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl className={style.input}>
                  <Input
                    placeholder={placeholder?.confirmPassword || "Enter confirm password..."}
                    {...field}
                  />
                </FormControl>
                <FormMessage className={style.message} />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className={style.button}
          >
            Login
          </Button>
        </form>
      </Form>

      {signinRedirect && (
        <div className="my-3 flex flex-col sm:flex-row justify-start items-center whitespace-nowrap text-xs">
          <Label className="font-bold">Did not have a account? </Label>
          <Button
            asChild
            variant="link"
            onClick={() => window.location.href = signinRedirect || "/sign-in"}
          >
            <span className={style.linkText}>sign-in</span>
          </Button>
        </div>
      )}

    </section>
  )
}

export default SignupForm;
