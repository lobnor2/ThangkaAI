"use client";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  console.log("current theme is => ", theme);
  const isDark = theme === "dark";

  return (
    <div className="border-b shadow-sm h-20 flex justify-center items-center">
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
