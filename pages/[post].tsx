import Layout from "../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

// POST
const Post: React.FunctionComponent = ({ data, content }: any) => {
  return (
    <Layout title={data.title}>
      <div className="py-8 px-4">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-sm italic">{data.date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
