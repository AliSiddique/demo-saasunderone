"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Github, Loader } from "lucide-react";
import { Icons } from "../ui/Icons";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export default function LoginForm() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState("");

  async function onSubmit() {
    setLoading(true);
    // Do something with the form values.
    const result: any | undefined = await signIn("email", {
      email: email,
      redirect: false,
    });
    if (result.ok) {
      // Handle sign-in error
      toast.success("Email sent for sign-in");
      setLoading(false);
    } else {
      // Handle successful sign-in
      setLoading(false);
      toast.error("Error sending email in");
    }
  }
  return (
    <div className="w-full lg:grid h-full lg:grid-cols-2 ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button onClick={onSubmit} type="submit" className="w-full">
              {loading ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
              )}{" "}
              Send Link
            </Button>
            <Button
              onClick={() => signIn("google")}
              variant="outline"
              className="w-full"
            >
              {loading ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.google className="mr-2 h-4 w-4" />
              )}{" "}
              Google
            </Button>
            <Button
              onClick={() => signIn("github")}
              variant="outline"
              className="w-full"
            >
              {loading ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.google className="mr-2 h-4 w-4" />
              )}{" "}
              GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            By signing up, you agree to our{" "}
            <Link href="#" className="underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/login-image.jpg"
          alt="Image"
          width="500"
          height="500"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
