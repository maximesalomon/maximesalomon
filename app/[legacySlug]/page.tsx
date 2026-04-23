import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { LegacyRedirect } from '@/components/legacy-redirect';
import { findPostBySlug, getPostSlugs } from '@/lib/posts';

type LegacyPageProps = {
  params: Promise<{
    legacySlug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((legacySlug) => ({
    legacySlug,
  }));
}

export async function generateMetadata({
  params,
}: LegacyPageProps): Promise<Metadata> {
  const { legacySlug } = await params;
  const post = findPostBySlug(legacySlug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} (Moved)`,
    description: `Legacy URL for ${post.title}.`,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LegacySlugPage({ params }: LegacyPageProps) {
  const { legacySlug } = await params;
  const post = findPostBySlug(legacySlug);

  if (!post) {
    notFound();
  }

  return <LegacyRedirect href={`/blog/${post.slug}`} />;
}
