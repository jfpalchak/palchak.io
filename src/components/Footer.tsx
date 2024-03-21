import Toggle from "@/components/Toggle";

export default function Footer() {
  return (
    <footer className="mt-28 px-3 pb-1">
      <div className="bottom-0 my-auto flex items-center justify-between text-sm text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Joey Palchak.</p>
        <Toggle />
      </div>
    </footer>
  );
}
