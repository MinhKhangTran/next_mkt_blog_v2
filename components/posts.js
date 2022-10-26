const Posts = ({ posts }) => {
  return (
    <section id="latestBlog" aria-label="latest Blog abschnitt">
      <div className="wrapper">
        <h2 className="">Die neusten Posts</h2>
        <div className="blogposts">
          {posts.map((post) => {
            return (
              <article key={post.frontmatter.title} className="blogpost">
                <h3>{post.frontmatter.title}</h3>
                <p className="date">{post.frontmatter.date}</p>
                <p>{post.frontmatter.excerpt}</p>
              </article>
            );
          })}
        </div>
        <button>
          <a href="/blog">Alle Posts</a>
        </button>
      </div>
    </section>
  );
};

export default Posts;
