'use client';

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavItem({ href, children}: PropsWithChildren<{ href: string }>) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link 
        href={href}
        className={`transition-all ${isActive ? 'text-neutral-900' : 'hover:text-neutral-900'}`}
      >
        {children}
      </Link>
    </li>
  );
}
