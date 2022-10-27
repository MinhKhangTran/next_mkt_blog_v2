import Head from "next/head";
import Footer from "../components/footer";

import Navbar from "../components/navbar";

export default function Impressum() {
  return (
    <main>
      <Head>
        <title>MKT&apos;s Blog | Impressum</title>
      </Head>
      <Navbar />
      <Footer />
    </main>
  );
}
