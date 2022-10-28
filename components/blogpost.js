import md from "markdown-it";
import mdAnchor from "markdown-it-anchor";
import mdTOC from "markdown-it-toc-done-right";

const Blogpost = ({ content }) => {
  return (
    <section id="blogpost__section">
      <div
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
    </section>
  );
};

export default Blogpost;
