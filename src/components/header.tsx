import { useTheme } from "../components/theme-provider";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="border border-red-500">
      <Button onClick={() => setTheme("dark")}>
        <Moon />
      </Button>
      <Button onClick={() => setTheme("light")}>
        <Sun />
      </Button>
    </div>
  );
};

export default Header;
