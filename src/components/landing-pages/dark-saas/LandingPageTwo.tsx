import React from "react";
import NavbarTwo from "./Navbar";
import { FeaturesTwo } from "./Features";
import CTATwo from "./CTA";
import Footer from "./Footer";
import LogoCloud from "../light-saas/LogoCloud";
import HeroTwo from "./Hero";
import { FAQTwo } from "./FAQ";

type Props = {};

export default function LandingPageTwo({}: Props) {
  return (
    <div
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
      }}
    >
      <NavbarTwo />
      <HeroTwo />
      <LogoCloud />
      <FeaturesTwo />
      <FAQTwo />
      <CTATwo />
      <Footer />
    </div>
  );
}
