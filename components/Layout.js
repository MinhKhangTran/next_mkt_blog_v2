import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? "MKT's Blog | " + title : "MKT's CV"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="Der Lebenslauf von Minh Khang Tran als Website. Viel Spaß beim Sichten :)" name="description" />
      </Head>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
