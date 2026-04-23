import Image from 'next/image';
import type { Metadata } from 'next';

import { BlogSection } from '@/components/blog-section';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Home',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="px-4 pb-12 pt-4 md:pt-12">
      <div className="md:flex">
        <div>
          <Image
            alt="Maxime Salomon"
            className="h-64 w-64 rounded-[8px] object-cover"
            height={256}
            priority
            src="/assets/maxime-salomon.jpg"
            width={256}
          />
        </div>
        <div className="md:ml-24">
          <p className="pt-4">33</p>
          <p className="pt-2">Aix-en-Provence, France 🇫🇷</p>
          <p className="pt-2">Learning &amp; Building</p>
          <p className="pt-2">
            Looking for a new AI / SaaS Growth Lead opportunity
          </p>
          <p className="pt-2">
            Previously - Presti AI, Croissant, Axeptio, PriceHubble, Shotgun,
            CM.com, Algolia
          </p>
          <p className="pt-2">
            <a
              className="hover:underline"
              href="https://twitter.com/maximesalomon"
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>{' '}
            |{' '}
            <a
              className="hover:underline"
              href="https://github.com/maximesalomon"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>{' '}
            |{' '}
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/maximesalomon"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
      <BlogSection posts={latestPosts} />
    </div>
  );
}
