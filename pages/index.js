import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Posts from "../components/posts";
import { getPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <main>
      <Head>
        <title>MKT&apos;s Blog</title>
      </Head>
      <Navbar />
      <Hero />
      <Posts posts={posts} />
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}
