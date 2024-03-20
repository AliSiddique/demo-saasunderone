"use client";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowRight, SearchIcon, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing-pages/light-saas/Navbar";
import LandingPageOne from "@/components/landing-pages/light-saas/LandingPageOne";
import LandingPageTwo from "@/components/landing-pages/dark-saas/LandingPageTwo";

export default function page() {

  return (
<LandingPageTwo/> 

);
}