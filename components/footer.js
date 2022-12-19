import Link from "next/link";

const Footer = () => {
  

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
          <p>
            Gemacht mit ♥ und{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            von Minh Khang Tran im Jahre 2022.
          </p>
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
