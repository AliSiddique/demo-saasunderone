import { Button } from "@/components/ui/button";
import { PlaneIcon } from "lucide-react";
import Link from "next/link";

export default function CTATwo() {
  return (
    <div className="relative isolate overflow-hidden ">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start your free trial today.
            <br />
          </h2>
     
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="outline">
              Get started
            </Button>
            <Link href="#pricing">
              <Button variant="default" className="flex items-center gap-2">
                <PlaneIcon />
                Start free trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
