"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import { useState } from "react";
import { ArrowBigDown } from "lucide-react";
import { Label } from "@/components/ui/label";

const tabs = [
  {
    icon: (
      <ArrowBigDown className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "AI",
    feature: "Now with Q&A",
    description: "Ask literally anything. Bird Will answer.",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <ArrowBigDown className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <ArrowBigDown className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Wikis",
    description: "Centralize your knowledge. Make it accessible.",
    more: (
      <div className="text-red-600 flex items-center">
        Learn more <ArrowBigDown className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },

  {
    icon: (
      <ArrowBigDown className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Projects",
    description: "Manage complex projects without the chaos",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn more <ArrowBigDown className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <ArrowBigDown className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Docs",
    description: "Simple, powerfulm beautiful. Next-gen notes & docs.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Learn more <ArrowBigDown className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/RunningDoodle.svg",
  },
];

const HeroSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center flex flex-col ">
      <div
        className="font-medium
          2xl:w-1/3
          md:w-2/3
          xl:w-1/2
          
          
          lg:px-0
          px-8
    

  text-5xl
            xl:text-6xl     
            flex
            justify-center
            xl:font-medium
            xl:pt-14
            text-center 
            pt-6
            "
      >
        Write, plan, share. With AI at your side.
      </div>

      <p
        className="
            text-2xl
            pt-4
            text-center
            w-2/3
            mx-auto
            "
      >
        Bird is the connected workspace where better, faster work happens.
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        <Link href="/">
          <Button className="py-1 ">
            <div className="flex items-center justify-center">
              <div className="text-lg">Get bird free</div>
              <div>
                <ArrowBigDown className="ml-2 " />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className="pt-10 xl:pt-20 items-center justify-center">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="flex items-center justify-center mx-auto w-60 xl:w-80"
        />
      </div>
      {isSmallScreen ? (
        <div className="px-8">
          <div className="grid grid-cols-4   md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  ">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`
              flex 
            p-1
              md:p-8
             
      
                cursor-pointer
        
                ${
                  activeTab.name === tab.name
                    ? "rounded-md md:rounded-xl  md:border items-center justify-center flex p-1 "
                    : "  rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                } `}
                onClick={() => setActiveTab(tab)}
              >
                <div className="flex flex-col   items-center md:justify-center mx-auto">
                  <div className="hidden md:flex text-4xl">{tab.icon}</div>
                  <Label className="font-medium text-sm  xl:text-lg mt-1">
                    {tab.name}
                  </Label>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Display content based on the active tab */}
          <div className="pt-6 md:py-10   lg:px-16 xl:px-0 md:px-16  w-full ">
            {activeTab && (
              <div className=" flex justify-center items-center flex-col  ">
                <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="logo"
                  className="
                w-full
             border
             p-20
             xl:p-40
             rounded-xl
          
             
                "
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex  xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`
                xl:flex 
                justify-center 
                space-x-4
                xl:pt-4
                sm:my-10
               
                xl:my-0
                w-60
                h-36
                ${
                  activeTab === tab
                    ? "border rounded-xl pt-2  "
                    : "shadow-md rounded-xl pt-2 m"
                }
              `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>

                  {/* Render feature tag only for "AI" tab */}
                  {tab.name === "AI" && (
                    <div className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full ml-2">
                      {tab.feature}
                    </div>
                  )}
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    {/* Only animate the description */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tab.description}
                    </motion.div>
                  </div>

                  {/* Conditional rendering for "Learn more" link */}
                  {activeTab === tab && (
                    <div className="text-sm mt-2">{tab.more}</div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Display content based on the active tab */}
      <div className="hidden md:flex py-10 px-8 md:px-0    lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className=" md:flex  items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="
                w-full
                p-20
                xl:p-40
                shadow-md
                rounded-xl
                bg-[#f6f5f4]
        "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
