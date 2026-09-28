"use client";

import Link from "next/link";
import * as z from "zod";
import ROUTES from "@/constants/routes";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldLabel } from "@/components/ui/field";
import { Controller, DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodType<T, T>;
  formType: "SIGN_IN" | "SIGN_UP";
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  defaultValues: T;
}

const AuthForm = <T extends FieldValues>({ schema, defaultValues, formType, onSubmit }: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<FieldValues> = async () => {};

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-10 space-y-6">
      {Object.keys(defaultValues).map((field) => (
        <Controller
          key={field}
          name={field as Path<T>}
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="flex w-full flex-col gap-2.5">
              <FieldLabel className="paragraph-medium text-dark400_light700">
                {field.name === "email"
                  ? "Email Adress"
                  : `${field.name.charAt(0).toUpperCase()}${field.name.slice(1)}`}
              </FieldLabel>
              <Input
                {...field}
                required
                type={field.name === "password" ? "password" : "text"}
                className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-12 border"
              />
            </Field>
          )}
        />
      ))}
      <Field orientation={"vertical"}>
        <Button
          disabled={form.formState.isSubmitted}
          className={"primary-gradient paragraph-medium rounded-2 font-inter !text-light-900 min-h-12 w-full px-4"}
        >
          {form.formState.isSubmitted ? (buttonText === "Sign In" ? "Sign In..." : "Sign Up...") : buttonText}
        </Button>
        {formType === "SIGN_IN" ? (
          <p>
            Don&rsquo;t have an account?{" "}
            <Link href={ROUTES.SIGN_UP} className="paragraph-semibold primary-text-gradient">
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link href={ROUTES.SIGN_IN} className="paragraph-semibold primary-text-gradient">
              Sign In
            </Link>
          </p>
        )}
      </Field>
    </form>
  );
};

export default AuthForm;
