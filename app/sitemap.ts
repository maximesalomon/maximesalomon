import type { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/posts';
import { getAbsoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: getAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.sortDate),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: getAbsoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: getAbsoluteUrl('/about'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: getAbsoluteUrl('/blog'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...posts,
  ];
}
