'use client';

import { NAME } from "@/data/lifeApi";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="px-3 mb-6">
      <h1 className="text-3xl font-medium">
        {NAME} <span className="text-xl font-normal">{pathname !== '/' ? `/ about me` : ''}</span>
      </h1>
    </div>
  );
}