"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState<any>(null);

  // const getSession = async () => {
  //   try {
  //     const session = await getServerSession(authOptions);
  //     setSession(session);
  //     console.log("this is session data", session);
  //   } catch (error) {
  //     console.log("this is error from session", error);
  //   }
  // };
  // useEffect(() => {
  //   getSession();
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem-2.5rem)] w-full">
      <motion.div
        className=""
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
        transition={{ duration: 1, delay: 0 }}
      >
        <h1 className="text-4xl md:text-5xl md:font-semibold">ThangkaAI</h1>
      </motion.div>
      <motion.p
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
        transition={{ duration: 1, delay: 0.35 }}
        className="px-5 w-full  mt-5 sm:w-2/3 lg:w-2/5 text-center md:mt-3 text-gray-500 text-md md:text-xl"
      >
        An AI platform transforming text prompts into stunning visual art with
        modern creativity. Unleash your imagination effortlessly!
      </motion.p>
      <motion.div
        className="flex justify-center items-center gap-3 mt-5"
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
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link href={"/create"}>
          <Button className="">Start Creating</Button>
        </Link>
        {session && (
          <Link href={"/profile"}>
            <Button variant={"outline"}>Go to profile</Button>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
