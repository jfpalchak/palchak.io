import type { PropsWithChildren, ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'a'>;

export default function ExternalLink({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <a
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
