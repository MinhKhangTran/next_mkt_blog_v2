import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <p className="back-to-top">
        <a href="#top" id="skip-to-top" title="Nach oben springen">
          <span aria-hidden="true">
            ▲<span className="text">Nach oben</span>
          </span>
          <span className="visually-hidden">Nach oben</span>
        </a>
      </p>
      <footer>
        <div className="wrapper">
          <p>Made with ♥ and Next.js. © 2020-{date} Minh Khang Tran.</p>
          <div className="unnoetige__links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutzerklaerung">Datenschutzerklärung</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
