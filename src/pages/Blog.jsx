// import "../blog.css";

// import { posts }
// from "../data/posts";

// export default function Blog() {

//   return (
    

//     <div className="app tool-page">

//       <header className="navbar">

//         <div className="logo">
//           ⚡ CyberTools
//         </div>

//         <nav>
//           <a href="/">
//             Home
//           </a>
//         </nav>

//       </header>

//      <section className="hero blog-hero">

//         <h1>
//           Blog
//         </h1>

//         <p>
//           Latest articles and guides
//         </p>

//       </section>

//       <section className="layout">

//         <div className="card blog-card">

//           {posts.map((post) => (

//             <div
//               key={post.slug}
//               className="blog-post"
//             >

//               <a
//                 href={`/blog/${post.slug}`}
//               >
//                 <h2>
//                   {post.title}
//                 </h2>
//               </a>

//               <p>
//                 {post.description}
//               </p>

//             </div>

//           ))}

//         </div>

//       </section>

//       <footer className="footer">
//         Built with ⚡ CyberTools
//       </footer>

//     </div>

//   );

// }




import "../blog.css";
import { posts } from "../data/posts";
import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>CyberTools Blog - Trending News & Articles</title>
        <meta
          name="description"
          content="Latest articles, technology updates, gaming guides and trending news from CyberTools."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="app tool-page">
        <header className="navbar">
          <div className="logo">⚡ CyberTools</div>

          <nav>
            <a href="/">Home</a>
          </nav>
        </header>

        <section className="hero blog-hero">
          <h1>Blog</h1>
          <p>Latest articles and guides</p>
        </section>

        <section className="layout">
          <div className="card blog-card">
            {posts.map((post) => (
              <div key={post.slug} className="blog-post">
                <a href={`/blog/${post.slug}`}>
                  <h2>{post.title}</h2>
                </a>
                <p>{post.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">Built with ⚡ CyberTools</footer>
      </div>
    </>
  );
}