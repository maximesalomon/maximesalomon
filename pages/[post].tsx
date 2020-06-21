import Layout from "../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

// POST
const Post: React.FunctionComponent = ({ data, content }: any) => {
  return (
    <Layout title={data.title}>
      <div className="max-w-screen-md m-auto py-8 px-4">
        <h1 className="text-5xl leading-tight font-extrabold">{data.title}</h1>
        <p className="mt-4 italic">Published on {data.date} - Maxime Salomon</p>
        <article
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      post: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { post } }: any) => {
  const markdown = fs.readFileSync(path.join("posts", post + ".md"));
  const parsedMarkdown = matter(markdown);
  const content = marked(parsedMarkdown.content);

  return {
    props: {
      data: parsedMarkdown.data,
      content: content,
    },
  };
};

export default Post;
