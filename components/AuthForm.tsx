"use client";
import CustomInput from "@/components/CustomInput";
import PlaidLink from "@/components/PlaidLink";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { createNewUser, signInUser } from "@/lib/actions/user.actions";
import { authFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Sign up with Appwrite & create plaid token

      if (type === "sign-up") {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          email: data.email,
          password: data.password,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
        };

        const newUser = await createNewUser(userData);
        setUser(newUser);
      }

      if (type === "sign-in") {
        const response = await signInUser({
          email: data.email,
          password: data.password,
        });

        if (response) router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="subtleTech logo"
            width={34}
            height={34}
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            SubtleTech
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to continue"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <CustomInput
                          label="First Name"
                          placeholder="Enter your first name"
                          field={field}
                        />
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <CustomInput
                          label="Last Name"
                          placeholder="Enter your last name"
                          field={field}
                        />
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address1"
                    render={({ field }) => (
                      <CustomInput
                        label="Address"
                        placeholder="Enter your specific address"
                        field={field}
                      />
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <CustomInput
                        label="City"
                        placeholder="Enter your city"
                        field={field}
                      />
                    )}
                  />

                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <CustomInput
                          label="State"
                          placeholder="ex: NY"
                          field={field}
                        />
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <CustomInput
                          label="Postal Code"
                          placeholder="ex: 11101"
                          field={field}
                        />
                      )}
                    />
                  </div>

                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <CustomInput
                          label="Date of Birth"
                          placeholder="yyyy-mm-dd"
                          field={field}
                        />
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ssn"
                      render={({ field }) => (
                        <CustomInput
                          label="SSN"
                          placeholder="ex: 1234"
                          field={field}
                        />
                      )}
                    />
                  </div>
                </>
              )}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <CustomInput
                    label="Email"
                    placeholder="Enter your email"
                    field={field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <CustomInput
                    label="Password"
                    placeholder="Enter your password"
                    field={field}
                  />
                )}
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" /> &nbsp; Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign Up" : "Log In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
