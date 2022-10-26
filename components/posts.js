const Posts = ({ posts }) => {
  return (
    <section id="latestBlog" aria-label="latest Blog abschnitt">
      <div className="wrapper">
        <span className="drehtitel">Die neusten Posts</span>
        <div className="blogposts">
          {posts.map((post) => {
            return (
              <article key={post.frontmatter.title} className="blogpost">
                <h2>{post.frontmatter.title}</h2>
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
