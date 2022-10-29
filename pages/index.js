import Head from "next/head";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Layout from "../components/Layout";

import Posts from "../components/posts";
import { getPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}
