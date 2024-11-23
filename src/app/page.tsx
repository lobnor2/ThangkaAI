"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center h-[calc(100vh-4rem-2.5rem)] w-full"
      initial={{
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl md:font-semibold">ThangkaAI</h1>
      <p className="px-5 w-full  mt-5 sm:w-2/3 lg:w-2/5 text-center md:mt-3 text-gray-500 text-md md:text-xl">
        An AI platform transforming text prompts into stunning visual art with
        modern creativity. Unleash your imagination effortlessly!
      </p>
    </motion.div>
  );
}
