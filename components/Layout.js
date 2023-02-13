import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? "MKT's Blog | " + title : "MKT's CV"}</title>
      </Head>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
