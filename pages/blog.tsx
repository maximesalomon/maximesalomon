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
