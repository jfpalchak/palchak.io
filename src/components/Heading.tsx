import { type PropsWithChildren } from 'react';

export default function Heading({ children, subtitle }: PropsWithChildren<{ subtitle?: string }>) {
  return (
    <h1 className="text-3xl font-medium">
      {children}
      {subtitle && (
        <span className="text-xl font-normal">
          {` ${subtitle}`}
        </span>
      )}
    </h1>
  );
}
