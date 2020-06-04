import React from "react";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

// BLOG PAGE
const BlogPage: React.FunctionComponent = ({ allPosts }: any) => {
  console.log(allPosts)
  return (
    <Layout title="Blog">
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className="mt-8 text-3xl">Blog</h1>
      { allPosts.map((post: any) => {
        return (
          <div className="mt-8">
            <h3 className="text-2xl text-blue-800"><a href={post.slug}>{post.title}</a></h3>
            <p className="text-sm italic">{post.date}</p>
          </div>
          )
      }) }
    </Layout>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
