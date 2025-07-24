'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/upcoming-adventures', label: 'Upcoming Adventures' },
  { href: '/design-your-adventure', label: 'Design Your Adventure' },
  { href: '/past-adventures', label: 'Past Adventures' },
  { href: '/coaching-support', label: 'Coaching & Support' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' }
];

// PUBLIC_INTERFACE
export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-100 fixed z-30 w-full top-0 left-0 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold italic text-sky-800 tracking-tight" aria-label="Home">
          ETA
        </Link>
        <ul className="flex flex-wrap gap-4 sm:gap-7 items-center text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? 'text-cyan-700 underline underline-offset-8 decoration-sky-300'
                    : 'text-gray-700 hover:text-cyan-800'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
