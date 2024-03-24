import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LogoCloud from "./LogoCloud";
import BentoGridSection from "./BentoGrid";
import Footer from "./Footer";
import CTA from "./CTA";

type Props = {};

export default function LandingPageOne({}: Props) {
  return (
    <div>
      <div className="relative inset-0 z-0 h-screen w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Navbar />
        <Hero />
      </div>
      <LogoCloud />
      <BentoGridSection />
      <CTA />
      <Footer />
    </div>
  );
}
