"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import KPICards from '@/components/ui/KPI'
import DashboardChart from '@/components/ui/Chart'

type Props = {}

export default function Page({}: Props) {
    const {data: session} = useSession()
  return (
    <div>
        <div className="py-3">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main >
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-2">
            {session && <p className='text-xl font-bold leading-tight tracking-tight text-gray-900'>Welcome {session?.user?.email}</p>}
            <KPICards />
            <DashboardChart />
            </div>
          </main>
        </div>
    </div>
  )
}