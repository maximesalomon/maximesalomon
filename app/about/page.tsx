import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Maxime Salomon.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="px-4 py-4">
      <h1>About</h1>
      <p>Maxime Salomon 👨‍💻</p>
      <p>33</p>
      <p>Aix-en-Provence, France 🇫🇷</p>
      <p>Learning &amp; Building</p>
      <p>Looking for a new AI / SaaS Growth Lead opportunity</p>
      <p>
        Previously - Presti AI, Croissant, Axeptio, PriceHubble, Shotgun,
        CM.com, Algolia
      </p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </div>
  );
}
