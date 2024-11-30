"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const { data: session, status } = useSession();
  useEffect(() => {
    if (status != "loading") {
      setInitialLoading(false);
    }
  }, [status, session]);
  return (
    <div className="fixed bg-white top-0 w-full border-b-0 shadow-md h-16 flex justify-between items-center px-5">
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
      <div className="flex items-center gap-4">
        {isDark ? (
          <Button onClick={() => setTheme("light")}>
            <Sun />
          </Button>
        ) : (
          <Button onClick={() => setTheme("dark")}>
            <Moon />
          </Button>
        )}
        {initialLoading && status === "loading" ? (
          <Skeleton className="w-[40px] h-[40px] rounded-full" />
        ) : !session ? (
          <Button onClick={() => signIn("google")}>Login</Button>
        ) : (
          <Avatar>
            <AvatarImage src={session.user?.image || ""} />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
};

export default Header;
