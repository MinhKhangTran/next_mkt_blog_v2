import Head from "next/head";
import Footer from "../components/footer";

import Navbar from "../components/navbar";

export default function Blog() {
  return (
    <main>
      <Head>
        <title>MKT&apos;s Blog | Alle Posts</title>
      </Head>
      <Navbar />
      <Footer />
    </main>
  );
}
