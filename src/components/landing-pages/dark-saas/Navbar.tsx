"use client";
import React from "react";
import { FloatingNav } from "../../ui/floating-navbar";
import { HomeIcon, MessageCircle, User2Icon } from "lucide-react";
export default function NavbarTwo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <User2Icon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
