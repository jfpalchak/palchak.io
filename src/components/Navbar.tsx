import Link from "next/link";

const NavLinks = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'projects', path: '/projects' },
  { label: 'resume', path: '/resume' },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-3 py-4">
        {NavLinks.map(({ label, path }) => (
          <li key={path}>
            <Link 
              href={path}
              className="transition-all hover:text-neutral-600"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}