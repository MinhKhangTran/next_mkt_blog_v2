import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function PostPage({
  frontmatter: { title, date },
  content,
  slug,
}) {
  
  return (
    <main>
      <Head>
        <title>MKT&apos;s Blog | {title}</title>
      </Head>
      <Navbar />
      <section className="blog-text mt-2">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </section>
      <Footer />
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
