'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const ROUTES = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  // { label: 'blog', path: '/blog' },
  // { label: 'resume', path: '/resume' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-3 p-3 text-neutral-500 dark:text-neutral-400">
        {ROUTES.map(({ label, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={clsx(
                'transition-all hover:text-neutral-900 dark:hover:text-neutral-100',
                {
                  'text-neutral-900 dark:text-neutral-100': pathname === path,
                }
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
