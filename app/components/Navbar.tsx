import Link from 'next/link';

const navItems = {
  '/about': {
    name: 'about',
  },
  '/notes': {
    name: 'notes',
  },
  '/essays': {
    name: 'essays',
  },
  '/projects': {
    name: 'projects',
  },
};

export function Navbar() {
  return (
    <aside className="ml-4 mb-16 tracking-tight text-customSubtext">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-col items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:underline hover:text-customHeading flex align-middle relative py-0.5 px-2 mb-2"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}