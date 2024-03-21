'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

type Props = {
  session: Session | null;
  children: React.ReactNode;
};

export default function SessionProviderContext({ session, children }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}