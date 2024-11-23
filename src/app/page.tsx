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
      <h1 className="text-7xl font-semibold">ThankaAI</h1>
      <p className="w-1/2 text-center mt-3 text-gray-500 text-xl">
        An AI platform transforming text prompts into stunning visual art with
        modern creativity. Unleash your imagination effortlessly!
      </p>
    </motion.div>
  );
}
