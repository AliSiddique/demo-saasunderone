"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaneIcon } from "lucide-react";
import Link from "next/link";
export const FADE_UP_ANIMATION = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
const HeroTwo = () => {
  return (
    <>
      <motion.div
        className="flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-14 text-center lg:mb-0 text-white"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <motion.h1
            className="flex flex-col text-4xl font-semibold sm:gap-3 sm:text-5xl xl:text-6xl/none"
            variants={FADE_UP_ANIMATION}
          >
            Monitor your business <br />{" "}
            <span className="relative text-white">
              with{" "}
              <span>
                ease
                {/* <Box className="absolute top-0 md:block hidden md:right-[20px] lg:right-[40px]" /> */}
              </span>
            </span>
          </motion.h1>
          <motion.p
            className="max-w-xs text-sm text-white sm:max-w-full sm:text-base"
            variants={FADE_UP_ANIMATION}
          >
            Start a free trial today and start your jounrey <br className="hidden md:block" />
            with ease and speed.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-6"
            variants={FADE_UP_ANIMATION}
          >
            <Link href="#pricing">
              <Button variant="default" className="flex items-center gap-2">
                <PlaneIcon />
                Start free trial
              </Button>
            </Link>
            <Link href="#pricing">
              <Button variant="outline" className="flex items-center gap-2">
                Learn more
              </Button>
            </Link>

          </motion.div>
        </div>

      </motion.div>
    </>
  );
};

export default HeroTwo;

const Users = [
  {
    image: "/images/users/1.png",
  },
  {
    image: "/images/users/2.png",
  },
  {
    image: "/images/users/3.png",
  },
  {
    image: "/images/users/4.png",
  },
  {
    image: "/images/users/5.png",
  },
];
