"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { getLoginValidation } from "./Login.validation";
import { providersTOSvg } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { LoginProps, LoginStyles, LoginSocial } from "./LoginForm.types";

const LoginForm = ({ styles, authOptions }: LoginProps) => {
  const [style, setStyle] = useState<LoginStyles>({});
  const validation = getLoginValidation(authOptions.withEmail || false);

  useEffect(() => {
    setStyle({
      container: cn(
        "p-6 bg-[#f5f5f5] dark:bg-[rgb(33,33,33)] w-[calc(100vw-3rem)] sm:w-[30rem] max-h-[39rem] overflow-auto rounded-xl shadow-xl",
        styles?.container || "",
      ),
      input: cn("no-focus", styles?.input || ""),
      button: cn("", styles?.button || ""),
      providerButton: {
        icon: cn("h-8 w-8", styles?.providerButton?.icon || ""),
        withText: cn(
          "flex-1 w-full center p-6 gap-3 bg-white hover:bg-white text-[rgb(33,33,33)] dark:bg-gray-700 dark:hover:bg-gray-700 dark:text-[#f5f5f5] hover:opacity-70",
          styles?.providerButton?.withText || "",
        ),
        withoutText: cn(
          "w-fit h-fit rounded-full p-1 bg-white hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-700 hover:opacity-70",
          styles?.providerButton?.withoutText || "",
        ),
      },
      text: cn("", styles?.text || ""),
      linkText: cn("text-[rgb(33,33,33)] dark:text-[#f5f5f5]", styles?.linkText || ""),
      message: cn("text-red-500", styles?.message || ""),
    });
  }, [styles]);

  const form = useForm({
    resolver: zodResolver(validation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  if (!authOptions.credentialsState && authOptions.social?.length === 0) return null;
  if (!authOptions.credentialsState) {
    return (
      <section className={`${style.container} ${style.text}`}>
        <div className="full flex flex-col gap-2 overflow-y-auto">
          {authOptions.social?.map((options: LoginSocial) => (
            <Button
              key={options.provider}
              onClick={options.trigger}
              className={style.providerButton?.withText}
            >
              <img
                src={providersTOSvg[options.provider]}
                alt={options.provider}
                className={style.providerButton?.icon}
              />
              <p className="text-sm font-bold capitalize">{options.provider}</p>
            </Button>
          ))}
        </div>
      </section>
    );
  }

  const onSubmit = (values: z.infer<typeof validation>) => {
    if (authOptions.credentialsState) {
      authOptions.credentialsState(values);
    } else {
      throw new Error("credentialsState is not provided");
    }
  };

  return (
    <section className={`${style.container} ${style.text}`}>
      <h3 className="font-extrabold uppercase my-3 text-center">Sign-in</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Username</FormLabel>
                <FormControl className={style.input}>
                  <Input
                    placeholder={
                      authOptions.credentialsPlaceholder?.username ||
                      (authOptions.withEmail ? "Enter username or email..." : "Enter username...")
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage className={style.message} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Password</FormLabel>
                <FormControl className={style.input}>
                  <Input
                    placeholder={
                      authOptions.credentialsPlaceholder?.password || "Enter password..."
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage className={style.message} />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-1">
            {authOptions.forgetPasswordTrigger && (
              <div className="flex flex-col sm:flex-row justify-start items-center whitespace-nowrap text-xs">
                <Label className="font-bold">Forget password? </Label>
                <Button
                  asChild
                  variant="link"
                  type="button"
                  onClick={authOptions.forgetPasswordTrigger}
                >
                  <span className={style.linkText}>reset password</span>
                </Button>
              </div>
            )}

            <Button type="submit" className={style.button}>
              Login
            </Button>
          </div>
        </form>
      </Form>

      {authOptions.signupRedirect && (
        <div className="my-3 flex flex-col sm:flex-row justify-start items-center whitespace-nowrap text-xs">
          <Label className="font-bold">Did not have a account? </Label>
          <Button
            asChild
            variant="link"
            onClick={() => {
              if (authOptions.signupRedirect) {
                window.location.href = authOptions.signupRedirect || "/sign-up";
              } else {
                console.log("redirect to signup page not provided");
              }
            }}
          >
            <span className={style.linkText}>Sign-up</span>
          </Button>
        </div>
      )}

      {authOptions.social && authOptions.social?.length > 0 && (
        <>
          <h3 className="my-6 font-extrabold text-center">OR</h3>

          <div className="full flex flex-col gap-2">
            {authOptions.social.length <= 5 ? (
              <div className="full flex gap-2 flex-wrap">
                {authOptions.social?.map((options: LoginSocial) => (
                  <Button
                    key={options.provider}
                    onClick={options.trigger}
                    className={style.providerButton?.withText}
                  >
                    <img
                      src={providersTOSvg[options.provider]}
                      alt={options.provider}
                      className={style.providerButton?.icon}
                    />
                    <p className="text-sm font-bold capitalize">{options.provider}</p>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="full center flex-wrap gap-3">
                {authOptions.social?.map((options: LoginSocial) => (
                  <Button
                    key={options.provider}
                    onClick={options.trigger}
                    className={style.providerButton?.withoutText}
                  >
                    <img
                      src={providersTOSvg[options.provider]}
                      alt={options.provider}
                      className={style.providerButton?.icon}
                    />
                  </Button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default LoginForm;
