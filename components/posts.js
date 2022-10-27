import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <section id="latestBlog" aria-label="latest Blog abschnitt">
      <div className="wrapper">
        <h2 className="">Die neusten Posts</h2>
        <div className="blogposts">
          {posts.map((post) => {
            return (
              <article key={post.frontmatter.title} className="blogpost">
                <Link href={`/blog/${post.slug}`}>
                  <a className="heading-2">{post.frontmatter.title}</a>
                </Link>
                <p className="date">{post.frontmatter.date}</p>
                <p>{post.frontmatter.excerpt}</p>
              </article>
            );
          })}
        </div>
        <Link href="/blog">
          <a className="link">Alle Posts</a>
        </Link>
      </div>
    </section>
  );
};

export default Posts;
