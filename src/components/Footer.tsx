export default function Footer() {
  return (
    <footer className="mt-28 px-3">
      <div className="flex justify-end text-sm text-neutral-400 bottom-0 my-auto">
        <p>&copy; {new Date().getFullYear()} Joey Palchak.</p>
      </div>
    </footer>
  );
}