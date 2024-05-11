"use client";

import React, { useState, useEffect } from "react";
import ActionButtons from "./_components/action-button";
import { Menu } from "./_components/menu";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-between space-x-10   h-14
    sticky top-0 z-50 border-b border-gray-200
  `;

  return (
    <div className="mx-auto max-w-7xl">
    <div className={navbarClasses}>
      <div className="flex items-center justify-center ">
        <img src="/logo.png" alt="logo" className="h-8" />
        <Menu />
      </div>

      <ActionButtons />
    </div>
    </div>
  );
};

export default Navbar;
