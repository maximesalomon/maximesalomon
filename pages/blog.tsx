import React from "react";
import Layout from "../components/Layout";
import fs from "fs";
// import { parse } from "marked";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import Link from "next/link";

// BLOG
const Blog: React.FunctionComponent = ({ posts }: any) => {
  return (
    <Layout title="Blog">
      <h1 className="mt-8 text-3xl">Blog</h1>
      { posts.map((post: any) => {
        return (
          <div key={post.data.slug} className="mt-8">
            <Link href="/[post]" as={"/" + post.data.slug}>
            <a><h3 className="text-2xl text-blue-800">{post.data.title}</h3></a></Link>
            <p className="text-sm italic">{post.data.date}</p>
          </div>
          )
      }) }
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const posts = files.map(file => {
    const markdown = fs.readFileSync(path.join("posts", file));
    const parsedMarkdown = matter(markdown);
    const content = marked(parsedMarkdown.content);
    return {
      data: parsedMarkdown.data,
      content: content
    }
  })
  return {
    props: {
      posts
    },
  };
}
