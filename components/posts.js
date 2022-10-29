import Link from "next/link";
import { useRouter } from "next/router";

const Posts = ({ posts }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <section id="latestBlog" aria-label="latest Blog abschnitt">
      <div className="wrapper">
        <h2 className="">
          {router.pathname === "/" ? "Die neusten Posts" : "Alle Posts"}
        </h2>
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
