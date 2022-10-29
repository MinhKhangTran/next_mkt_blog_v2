import md from "markdown-it";
import mdAnchor from "markdown-it-anchor";
import mdTOC from "markdown-it-toc-done-right";
import mdAttrs from "markdown-it-attrs";
import Link from "next/link";

const Blogpost = ({ content }) => {
  return (
    <section className="" id="blogpost__section">
      <div
        className="post__wrapper"
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
            .use(mdAttrs, {
              // optional, these are default options
              leftDelimiter: "{",
              rightDelimiter: "}",
              allowedAttributes: [], // empty array = all attributes are allowed
            })
            .render(content),
        }}
      ></div>

      <div className="post__wrapper">
        <button type="button">
          <Link href="/blog">
            <a>Zu den Posts</a>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Blogpost;
