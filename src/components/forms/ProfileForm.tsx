"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Card } from "@/components/ui/card-hover";
import React, { FormEvent } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { Loader } from "lucide-react";

type Props = {
  isPro: boolean;
};

export default function ProfileForm({ isPro }: Props) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleCheckout(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const stripePromise = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
      );
      if (stripePromise)
        await stripePromise.redirectToCheckout({ sessionId: data.id });
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.error("An unexpected error happened occurred:", error);
      toast.error("An unexpected error happened occurred:", error);
    }
  }
  async function handlePortal(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      window.location.href = data.url;
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.error("An unexpected error happened occurred:", error);
      toast.error("An unexpected error happened occurred:", error);
    }
  }
  return (
    <div className="mx-auto max-w-5xl px-4">
      <Label>Email</Label>
      <Input
        disabled
        value={session?.user?.email as string}
        placeholder="Email"
        type="email"
        className="text-gray-800 dark:text-white"
      />
      <Card className="bg-white dark:bg-black border-gray-300 px-0 mt-5">
        <CardHeader>Billing</CardHeader>

        <CardContent>
          <div className="flex flex-col space-y-4">
            <p className="text-sm text-muted-foreground">
              Update your billing information. Manage your subscription and
              billing preferences. You are currently on the{" "}
              {isPro ? "Pro" : "Free"} plan.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end">
            {isPro ? (
              <Button
                onClick={(e) => handlePortal(e)}
                variant={"default"}
                className=""
              >
                {isLoading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
                Portal
              </Button>
            ) : (
              <Button
                onClick={(e) => handleCheckout(e)}
                variant={"default"}
              >
                                {isLoading && <Loader className="w-6 h-6 mr-2 animate-spin" />}

                Subscribe
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
