import { PropsWithChildren } from 'react';

export default function Heading({ children, subtitle }: PropsWithChildren<{ subtitle?: string }>) {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-medium">
        {children}
        {subtitle && (
          <span className="text-xl font-normal">
            {` ${subtitle}`}
          </span>
        )}
      </h1>
    </div>
  );
}
