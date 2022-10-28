import md from "markdown-it";
import mdAnchor from "markdown-it-anchor";
import mdTOC from "markdown-it-toc-done-right";
import { useRouter } from "next/router";

const Blogpost = ({ content }) => {
  const router = useRouter();
  return (
    <section className="" id="blogpost__section">
      <div
        className="wrapper"
        dangerouslySetInnerHTML={{
          __html: md()
            .use(mdAnchor, {
              level: 2,
              permalink: true,
              permalinkBefore: true,
              permalinkSymbol: "#",
            })
            .use(mdTOC, { level: 2 })
            .render(content),
        }}
      ></div>
      <button type="button" onClick={() => router.back()}>
        Zurück zu den Posts
      </button>
    </section>
  );
};

export default Blogpost;
