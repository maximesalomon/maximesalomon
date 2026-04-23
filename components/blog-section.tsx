import Link from 'next/link';

import { formatDisplayDate, type Post } from '@/lib/posts';

type BlogSectionProps = {
  className?: string;
  posts: Post[];
};

export function BlogSection({ className, posts }: BlogSectionProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={['mt-16', className].filter(Boolean).join(' ')}>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-black">
              {formatDisplayDate(post.date)}
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-black">
              <Link
                href={`/blog/${post.slug}`}
                className="transition hover:opacity-80"
              >
                {post.title}
              </Link>
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-black">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
