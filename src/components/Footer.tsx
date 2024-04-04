import Toggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer>
      <div className="my-auto px-3 pb-3 flex items-center justify-between text-sm text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Joey Palchak.</p>
        <Toggle />
      </div>
    </footer>
  );
}
