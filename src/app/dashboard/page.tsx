"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

type Props = {}

export default function Page({}: Props) {
    const {data: session} = useSession()
  return (
    <div>
        {/* <button onClick={() => signOut()}>Sign out</button>
        {session && <p>Signed in as {session?.user?.email}</p>} */}
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main className='bg-black'>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">{/* Your content */}</div>
          </main>
        </div>
    </div>
  )
}