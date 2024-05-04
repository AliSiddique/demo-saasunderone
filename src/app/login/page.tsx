import LoginForm from "@/components/forms/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const token = cookies().get("token");
  if (token) {
    redirect("/dashboard");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
}
