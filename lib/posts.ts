import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { z } from 'zod';

const postsDirectory = path.join(process.cwd(), 'posts');

const postFrontmatterSchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1),
  author: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/),
});

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export type Post = PostFrontmatter & {
  content: string;
  excerpt: string;
  sortDate: number;
};

function normalizeMarkdownContent(content: string) {
  return content.replace(/<style[\s\S]*?<\/style>/gi, '').trim();
}

function stripOrdinalSuffixes(value: string) {
  return value.replace(/\b(\d+)(st|nd|rd|th)\b/gi, '$1');
}

function parseSortDate(dateValue: string) {
  const parsed = Date.parse(stripOrdinalSuffixes(dateValue));

  if (Number.isNaN(parsed)) {
    throw new Error(`Unable to parse post date: "${dateValue}"`);
  }

  return parsed;
}

function buildExcerpt(content: string) {
  const excerpt = content
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return excerpt.length > 180 ? `${excerpt.slice(0, 177).trim()}...` : excerpt;
}

export function parsePostFile(fileName: string, source: string): Post {
  const { data, content } = matter(source);
  const frontmatter = postFrontmatterSchema.parse(data);
  const normalizedContent = normalizeMarkdownContent(content);

  return {
    ...frontmatter,
    content: normalizedContent,
    excerpt: buildExcerpt(normalizedContent),
    sortDate: parseSortDate(frontmatter.date),
  };
}

function readPostFile(fileName: string) {
  return fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => parsePostFile(fileName, readPostFile(fileName)))
    .sort((left, right) => right.sortDate - left.sortDate);
}

export function getPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug: string) {
  const post = findPostBySlug(slug);

  if (!post) {
    throw new Error(`Post not found for slug "${slug}"`);
  }

  return post;
}

export function findPostBySlug(slug: string) {
  return getAllPosts().find((entry) => entry.slug === slug);
}

export function formatDisplayDate(dateValue: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(parseSortDate(dateValue));
}
