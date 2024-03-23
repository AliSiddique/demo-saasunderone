"use client"
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Card } from '@/components/ui/card-hover'
import React, { FormEvent } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSession } from 'next-auth/react'


type Props = {}

export default function page({}: Props) {
  const {data:session} = useSession();
    const [isLoading, setIsLoading] = React.useState(false);
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        try {
          const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await res.json();
          const stripePromise = await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
          );
          if (stripePromise)
            await stripePromise.redirectToCheckout({ sessionId: data.id });
          setIsLoading(false);
        } catch (error: any) {
          setIsLoading(false);
          console.error('An unexpected error happened occurred:', error);
          toast.error('An unexpected error happened occurred:', error);
        }
      }
  return (
    <div className='mx-auto max-w-5xl px-4'>
      <Label>Email</Label>
      <Input disabled value={session?.user?.email as string} placeholder='Email' type='email' className='text-gray-800' />
        <Card className='bg-white border-gray-300 px-0 mt-5'>
            <CardHeader>Billing</CardHeader>
           
           <CardContent>
            <div className="flex flex-col space-y-4">
                    <p className="text-sm text-muted-foreground">
                    Update your billing information. Manage your subscription and
                    billing preferences.
                    </p>
                </div>

              </CardContent>
              <CardFooter>
                <div className="flex justify-end">
                    <Button onClick={(e) => handleSubmit(e)} variant={'default'} className="">Portal</Button>
                </div>
                </CardFooter>
        </Card>
    </div>
  )
}