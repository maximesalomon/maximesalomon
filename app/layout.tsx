import type { Metadata, Viewport } from 'next';
import Link from 'next/link';

import './globals.css';

import { getAbsoluteUrl, getSiteUrl, siteConfig } from '@/lib/site';

export const dynamic = 'error';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.title,
    template: '%s | Maxime Salomon',
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: getSiteUrl(),
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: getAbsoluteUrl('/assets/maxime-salomon.jpg'),
        width: 800,
        height: 800,
        alt: 'Portrait of Maxime Salomon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [getAbsoluteUrl('/assets/maxime-salomon.jpg')],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <div className="site-frame">
            <div className="site-scroll">
              <div className="site-content">
                <header className="site-header">
                  <nav className="site-nav flex justify-between px-4">
                    <div>
                      <Link href="/" className="text-2xl font-semibold">
                        Bonjour 👋 I&apos;m Maxime
                      </Link>
                    </div>
                    <div>
                      <Link href="/blog">Blog</Link>
                    </div>
                  </nav>
                </header>
                <main>{children}</main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
