'use client';

import { type PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import ExternalLink from '@/components/ExternalLink';

const ROUTES = [
  { label: 'home', path: '/', type: 'internal' },
  { label: 'about', path: '/about', type: 'internal' },
  { label: 'resume', path: '/cv/2024.pdf', type: 'external' },
  // { label: 'blog', path: '/blog', type: 'internal' },
];

interface Props {
  type: string;
  href: string;
  className: string;
}

function NavItem({ type, children, ...props }: PropsWithChildren<Props>) {
  if (type === 'internal') {
    return (
      <Link {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <ExternalLink
        target="_blank"
        {...props}
      >
        {children}
      </ExternalLink>
    );
  }
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-3 p-3 group text-neutral-500 dark:text-neutral-400">
        {ROUTES.map(({ label, path, type }) => (
          <li key={path}>
            <NavItem
              type={type}
              href={path}
              className={clsx(
                'group-hover:transition-all hover:text-neutral-900 dark:hover:text-neutral-100',
                {
                  'text-neutral-900 dark:text-neutral-100': pathname === path,
                }
              )}
            >
              {label}
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
}
