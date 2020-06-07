import React from "react";
import Layout from "../components/Layout";
import fs from "fs";
// import { parse } from "marked";
import matter from "gray-matter";
// import marked from "marked";
import path from "path";
// import Head from "next/head";
// import Link from "next/link";

// BLOG PAGE
const Blog: React.FunctionComponent = ({ posts }: any) => {
  console.log(posts)
  return (
    <Layout title="Blog">
      {/* <Head>
        <title>Blog</title>
      </Head>
      <h1 className="mt-8 text-3xl">Blog</h1>
      { posts.map((post: any) => {
        return (
          <div key={post.slug}className="mt-8">
            <Link href="/[post]" as={"/" + post.slug}>
            <a><h3 className="text-2xl text-blue-800">{post.title}</h3></a></Link>
            <p className="text-sm italic">{post.date}</p>
          </div>
          )
      }) } */}
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const posts = files.map(file => {
    const markdown = fs.readFileSync(path.join("posts", file));
    const parsedMarkdown = matter(markdown);
    return parsedMarkdown
  })
}
