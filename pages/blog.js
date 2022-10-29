import Layout from "../components/Layout";
import Posts from "../components/posts";
import { getPosts } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Alle Posts">
      <Posts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts(),
    },
  };
}
