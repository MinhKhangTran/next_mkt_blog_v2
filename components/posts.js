const Posts = ({ posts }) => {
  return (
    <section id="latestBlog" aria-label="latest Blog abschnitt">
      <div class="wrapper">
        <span class="drehtitel">Die neusten Posts</span>
        <div class="blogposts">
          {posts.map((post) => {
            return (
              <article key={post.frontmatter.title} classt="blogpost">
                <h2>{post.frontmatter.title}</h2>
                <p class="date">{post.frontmatter.date}</p>
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
