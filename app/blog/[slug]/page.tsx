import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { RichContent } from '@/components/rich-content';
import { findPostBySlug, formatDisplayDate, getAllPosts } from '@/lib/posts';
import { getAbsoluteUrl } from '@/lib/site';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: getAbsoluteUrl(`/blog/${post.slug}`),
      type: 'article',
      publishedTime: new Date(post.sortDate).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="px-4 py-10 sm:px-6 sm:py-14">
      <header className="mx-auto max-w-4xl border-b border-black/10 pb-8 sm:pb-10">
        <h1 className="max-w-[18ch] text-balance text-[clamp(2.9rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[#231912]">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-[#5f4a3d]">
          <time
            dateTime={new Date(post.sortDate).toISOString()}
            className="rounded-full bg-[#f3e7dc] px-3 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-[#8f6e5d]"
          >
            Published {formatDisplayDate(post.date)}
          </time>
          <span aria-hidden="true" className="text-[#9d311d]/50">
            •
          </span>
          <span>By {post.author}</span>
        </div>
      </header>
      <div className="mx-auto mt-10 max-w-[68ch] article-content sm:mt-12">
          <RichContent content={post.content} />
      </div>
    </article>
  );
}
