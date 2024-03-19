"use client";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowRight, SearchIcon, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function page() {

  return (
    <div className="flex flex-col w-full">
      <div className="w-full top-0 h-16 fixed grid items-center z-[100] bg-surface border-b border-border">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full relative px-4">
          <div className="flex items-center gap-4 ">
            <Link href={"/"} className="flex items-center gap-1 text-primary">
              <img src="/logo.png" className="h-10" />
            </Link>
          </div>
          <div className="sm:flex hidden items-center gap-4">
            <Link href={"/#pricing"}>
              <Button variant="ghost" className={""}>
                Pricing
              </Button>
            </Link>
            <Link href={"/#features"}>
              <Button variant="ghost" className={""}>
                Features
              </Button>
            </Link>
            <Link href={"/blog"}>
              <Button variant="ghost" className={""}>
                Blog
              </Button>
            </Link>
            {true ? (
              <Link
                href={"/dashboard"}
                className=" bg-container rounded-full flex items-center gap-2"
              >
                <div
                  className="w-8 h-8 grid bg-cover place-items-center  bg-accent text-white rounded-full border-border border"
                  // style={{
                  //   backgroundImage: `url(${session.data.user.image})`,
                  // }}
                ></div>
              </Link>
            ) : (
              <Link href={"/auth/sign-in"}>
                <Button
                  className={cn({ })}
                  variant="gradient"
                >
                  Get started
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="h-16 w-full" />
    </div>
  );
}