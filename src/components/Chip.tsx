interface Props {
  children: React.ReactNode;
};

export default function Chip({ children }: Props) {
  return (
    <button className="items-center whitespace-nowrap rounded-full bg-neutral-600/10 px-3 py-1 text-xs text-neutral-900 dark:bg-neutral-400/10 dark:text-neutral-300">
      {children}
    </button>
  );
}
