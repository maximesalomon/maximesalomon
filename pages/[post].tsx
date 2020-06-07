import Layout from "../components/Layout";
import fs from "fs";
import { getAllPosts } from "../lib/api";
import { useRouter } from "next/router";

// ARTICLE PAGE
const ArticlePage: React.FunctionComponent = ({ posts }: any) => {
  const router = useRouter();
  const slug = router.query.post;
  const filteredPost = posts.filter((post: any) => post.slug === slug);
  const post = filteredPost[0];

  return (
    <Layout title="Blog">
      <div className="py-8 px-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm italic">{post.date}</p>
      </div>
    </Layout>
  );
};

export default ArticlePage;

// TODO https://www.youtube.com/watch?v=pY0vWYLDDco

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  console.log('files', files);
  const paths = files.map((filename) => ({
    params: {
      post: filename.replace(".md", ""),
    },
  }));
  console.log('paths :', paths)

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async () => {
  const posts = getAllPosts(["title", "date", "slug"]);

  return {
    props: { posts },
  };
};
