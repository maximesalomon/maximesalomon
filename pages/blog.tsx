import React from "react";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import HeroPost from "../components/HeroPost";

// BLOG PAGE
const BlogPage: React.FunctionComponent = ({ allPosts }: any) => {
  const heroPost = allPosts[0];

  return (
    <Layout title="Blog">
      <Head>
        <title>Blog</title>
      </Head>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          slug={heroPost.slug}
        />
      )}
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
