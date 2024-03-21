"use client"
import { signOut } from 'next-auth/react'
import React from 'react'
import { useSession } from 'next-auth/react'

type Props = {}

export default function page({}: Props) {
    const {data: session} = useSession()
  return (
    <div>
        <button onClick={() => signOut()}>Sign out</button>
        {session && <p>Signed in as {session?.user?.email}</p>}
    </div>
  )
}