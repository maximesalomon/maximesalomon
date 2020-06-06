import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { useRouter } from 'next/router'

// ARTICLE PAGE
const ArticlePage: React.FunctionComponent = ({ posts }: any) => {
  const router = useRouter()
  const slug = router.query.post;
  const filteredPost = posts.filter((post: any) => post.slug === slug)
  const post = filteredPost[0]

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
  return {
    paths: [
      { params: { post: 'from-marketing-to-growth-engineering-part-1' } },
      { params: { post: 'from-marketing-to-growth-engineering-part-2' } },
    ],
    fallback: false,
  };
}

export const getStaticProps = async () => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
  ]);

  return {
    props: { posts },
  };
}
