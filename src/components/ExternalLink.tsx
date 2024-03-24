import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface Props {
  href: string;
  className?: string;
  target?: string;
}

export default function ExternalLink({
  href,
  className,
  target = '_self',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={clsx(className)}
      {...rest}
    >
      {children}
    </a>
  );
}
