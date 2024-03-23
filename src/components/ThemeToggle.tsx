'use client';

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@/components/icons";

export default function Toggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="relative group hover:cursor-pointer"
      aria-label="Dark mode toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <SunIcon className="absolute -bottom-2.5 -right-0.5 h-5 w-5 transition-all duration-300 scale-100 rotate-0 dark:scale-0 dark:-rotate-90 hover:text-neutral-600" />
      <MoonIcon className="absolute -bottom-2.5 -right-0.5 h-5 w-5 transition-all duration-300 scale-0 rotate-90 dark:scale-100 dark:rotate-0 dark:hover:text-neutral-200" />
    </button>
  );
}