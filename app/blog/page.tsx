import type { Metadata } from 'next';

import { BlogSection } from '@/components/blog-section';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing by Maxime Salomon.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="px-4 pb-12 pt-0 md:pt-4">
      <BlogSection className="mt-0" posts={posts} />
    </div>
  );
}
