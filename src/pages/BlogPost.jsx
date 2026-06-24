import "../blog.css";

import {
  useParams
} from "react-router-dom";

import {
  posts
} from "../data/posts";

export default function BlogPost() {

  const { slug } = useParams();

  const post =
    posts.find(
      p => p.slug === slug
    );

  if (!post) {

    return (

      <div className="app">

        <h1>
          Article Not Found
        </h1>

      </div>

    );

  }

  return (

    <div className="app tool-page">

      <header className="navbar">

        <div className="logo">
          ⚡ CyberTools
        </div>

        <nav>
          <a href="/">
            Home
          </a>
        </nav>

      </header>

      <section className="hero blog-hero">

        <h1>
          {post.title}
        </h1>

        <p>
          {post.description}
        </p>

      </section>

      <section className="layout">

        <article className="blog-content">

          <div className="blog-meta">

            June 24, 2026 • 5 min read

          </div>

          <div className="blog-text">

            {post.content.map(
              (section, index) => (

                <div
                  key={index}
                  className="blog-section"
                >

                  <h2>
                    {section.heading}
                  </h2>

                  <p>
                    {section.text}
                  </p>

                </div>

              )
            )}

          </div>

        </article>

      </section>

      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>

  );

}