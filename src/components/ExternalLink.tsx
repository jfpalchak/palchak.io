import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface Props {
  href: string;
  className?: string;
}

export default function ExternalLink({ href, className, children, ...props }: PropsWithChildren<Props>) {
  return (
    <a
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
      className={clsx(className)}
      {...props}
    >
      {children}
    </a>
  );
}
