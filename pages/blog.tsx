import React from "react";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Link from "next/link";

// BLOG PAGE
const BlogPage: React.FunctionComponent = ({ posts }: any) => {
  return (
    <Layout title="Blog">
      <Head>
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
      }) }
    </Layout>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
  ]);

  return {
    props: { posts },
  };
}
