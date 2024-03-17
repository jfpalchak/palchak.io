'use client';

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  // { label: 'projects', path: '/projects' },
  // { label: 'blog', path: '/blog' },
  // { label: 'resume', path: '/resume' },
];

function NavItem({ href, children}: PropsWithChildren<{ href: string }>) {
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

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-3 p-3 text-neutral-500">
        {NavLinks.map(({ label, path }) => (
          <NavItem key={path} href={path}>
            {label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}