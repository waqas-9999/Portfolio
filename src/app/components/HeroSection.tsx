"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import Waqas from "../../../public/waqas2.png";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function HeroSection() {
  const name = "Hi, I'm Waqas.";
  const words = ["Web Developer", "Graphic Designer", "Frontend Developer", "App Developer"];
  
  return (
    <div className="h-auto container md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="w-full mt-32 justify-between flex flex-col md:flex-row">
        {/* Image container */}
        <div className="w-full mt-32 ml:0 md:ml-0 lg:ml-24 md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <Image
            src={Waqas}
            alt="Profile Pic"
            width={500} // Set your desired width
            height={500} // Set your desired height
            className="rounded-full"
          />
        </div>

        {/* Text container */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-4 flex flex-col items-center text-center">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto"
            >
              <TextGenerateEffect words={name} />
              I&#39;m a <FlipWords words={words} /> <br />
              <Highlight className="text-black text-3xl dark:text-white">
                Let&apos;s build something amazing!
              </Highlight>
            </motion.h1>
            <div className="mt-4">
              <Link href="/">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Explore more
                </Button>
              </Link>
            </div>
          </HeroHighlight>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
