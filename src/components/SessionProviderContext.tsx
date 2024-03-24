"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
  children: React.ReactNode;
};

export default function SessionProviderContext({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
