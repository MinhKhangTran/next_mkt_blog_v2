import Link from "next/link";
import { useRouter } from "next/router";

const Posts = ({ posts }) => {
  const router = useRouter();

  return (
    <section id="latestBlog" className={router.pathname !== "/" && "latestBlogPage"} aria-label="latest Blog abschnitt">
      <div className="wrapper">
        {router.pathname === "/" ? (
          <h2>Die neusten Posts</h2>
        ) : (
          <h1 className="no__padding">Alle Posts</h1>
        )}

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
        {router.pathname === "/" && (
          <Link href="/blog">
            <a className="link">Alle Posts</a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Posts;
