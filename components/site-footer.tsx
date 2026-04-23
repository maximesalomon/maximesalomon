import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-[#5f4a3d] md:flex-row md:items-center md:justify-between">
        <p>Static Next.js export on Vercel.</p>
        <ul className="flex flex-wrap items-center gap-4">
          {siteConfig.social.map((item) => (
            <li key={item.href}>
              <a
                className="transition hover:text-[#9d311d]"
                href={item.href}
                rel="noreferrer"
                target="_blank"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
