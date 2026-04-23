import Link from 'next/link';

import { type Post } from '@/lib/posts';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="mt-8">
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-2xl font-semibold text-blue-800">{post.title}</h3>
      </Link>
      <p className="text-sm italic">{post.date}</p>
    </div>
  );
}
