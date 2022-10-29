import md from "markdown-it";
import mdAnchor from "markdown-it-anchor";
import mdTOC from "markdown-it-toc-done-right";
import Link from "next/link";
import { useRouter } from "next/router";

const Blogpost = ({ content }) => {
  return (
    <section className="" id="blogpost__section">
      <div
        className="wrapper"
        dangerouslySetInnerHTML={{
          __html: md()
            .use(mdAnchor, {
              level: 2,
              permalink: mdAnchor.permalink.linkInsideHeader({
                symbol: `
      
      <span aria-hidden="true">#</span>
    `,
                placement: "before",
              }),
              permalinkBefore: true,
              permalinkSymbol: "#",
              tabIndex: false,
            })
            .use(mdTOC, { level: 2 })
            .render(content),
        }}
      ></div>
      <button type="button">
        <Link href="/blog">
          <a>Zu den Posts</a>
        </Link>
      </button>
    </section>
  );
};

export default Blogpost;
