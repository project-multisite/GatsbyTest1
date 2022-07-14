import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <body class="body">
      <Helmet>
      <title>Blogovi</title>
      </Helmet>
      <h1 class="title">Ericsson Nikola Tesla Summer Camp</h1>
      <header class="links">
        <Link to="/">Početna</Link>
      <hr></hr>
      </header>

      {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
          <p>{post.excerpt}</p>
        </article>
      ))}

      <footer class="footer">
        <hr></hr>
        <br></br>
        Ericsson Nikola Tesla Summer Camp 2022 &copy;
        <br></br>
        e-Environment Multisite architecture
      </footer>
    </body>
  )
}

export const pageQuery = graphql`
query MyQuery {
  blog: allMarkdownRemark {
    posts: nodes {
      fields {
        slug
      }
      frontmatter {
        date(fromNow: true)
        title
        author
      }
      excerpt
      id
    }
  }
}
`