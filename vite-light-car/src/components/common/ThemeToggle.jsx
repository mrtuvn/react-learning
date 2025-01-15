import React, { useEffect } from "react";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../contexts/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <div className="relative">
      <div>
        <div
          className="rounded-full border-gray-400 p-1"
          variant="outline"
          size="icon"
        >
          {theme === "light" && (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          )}
          {theme === "dark" && (
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          )}
          <span className="sr-only">Toggle theme</span>
        </div>
      </div>
      <div className="bottom-0 right-0 top-4 flex min-h-[90px] flex-col border-gray-500 bg-blue-200 p-2 text-white">
        <div
          className="cursor-pointer hover:underline"
          onClick={() => setTheme("light")}
        >
          Light
        </div>
        <div
          className="cursor-pointer hover:underline"
          onClick={() => setTheme("dark")}
        >
          Dark
        </div>
        <div
          className="cursor-pointer hover:underline"
          onClick={() => setTheme("system")}
        >
          System
        </div>
      </div>
    </div>
  );
}
