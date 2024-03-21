'use client';

import { useState } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";

export default function Toggle() {
  const [theme, setTheme] = useState(true);

  return (
    <div 
      className="hover:cursor-pointer"
      onClick={() => setTheme((state) => !state)}
    >
      {theme 
        ? <SunIcon className="h-5 w-5" />
        : <MoonIcon className="h-4 w-5" />
      }
    </div>
  );
}