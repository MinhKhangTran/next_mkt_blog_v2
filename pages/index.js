import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main>
      <Head>
        <title>MKT&apos;s Blog</title>
      </Head>
      <Navbar />
      <Hero />
    </main>
  );
}
