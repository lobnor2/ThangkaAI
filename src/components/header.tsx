"use client";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full border-b-0 shadow-md h-16 flex justify-between items-center px-5">
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/logo.svg"}
          width={30}
          height={30}
          alt="logo"
          className=""
        />
        <h1 className="text-3xl font-normal hidden md:block md:ml-2">
          ThangkaAI
        </h1>
      </Link>
      {isDark ? (
        <Button onClick={() => setTheme("light")} variant={"outline"}>
          <Sun />
        </Button>
      ) : (
        <Button onClick={() => setTheme("dark")} variant={"outline"}>
          <Moon />
        </Button>
      )}
    </div>
  );
};

export default Header;
