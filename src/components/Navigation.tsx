'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
// import NavItem from "./NavItem";

const NavLinks = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  // { label: 'projects', path: '/projects' },
  // { label: 'blog', path: '/blog' },
  // { label: 'resume', path: '/resume' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-3 p-3 text-neutral-500">
        {NavLinks.map(({ label, path }) => (
          <li key={path}>
            <Link 
              href={path}
              className={`transition-all ${pathname === path ? '' : 'hover:'}text-neutral-900`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}