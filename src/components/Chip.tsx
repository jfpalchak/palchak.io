import { PropsWithChildren } from 'react';

export default function Chip({ children }: PropsWithChildren) {
  return (
    <button className="items-center whitespace-nowrap rounded-full bg-gray-600/10 px-3 py-1 text-xs text-gray-900">
      {children}
    </button>
  );
}
