import Link from 'next/link';

import { siteConfig } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-[#f7f0e8]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.08em] text-[#231912] transition hover:text-[#9d311d]"
        >
          Bonjour 👋 I&apos;m Maxime
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm font-medium text-[#4f3c31]">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-[#9d311d]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
