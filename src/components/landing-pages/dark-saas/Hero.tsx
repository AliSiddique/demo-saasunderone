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
            Search for any UK company <br />{" "}
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
            Capitalshouse is a simple and intuitive company finder that helps
            you search for any business <br className="hidden md:block" />
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

            {/* <Button variant='secondary'>Learn more</Button> */}
          </motion.div>
        </div>
        {/* <div className='flex flex-col items-center justify-center gap-20'>
          <div className='flex flex-col items-center gap-5'>
            <div className='flex items-center justify-center'>
              {Users.map((user, index) => {
                return (
                  <Image
                    key={index}
                    src={user.image}
                    alt='User'
                    height={40}
                    width={40}
                    objectFit='cover'
                    className='-m-[5px] rounded-full border border-white'
                  />
                );
              })}
            </div>
            <p className='text-sm text-gray-600'>
              Trusted by over{' '}
              <span className='text-base font-semibold text-primary'>
                1,000+
              </span>{' '}
              businesses worldwide
            </p>
          </div>
        </div> */}
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
