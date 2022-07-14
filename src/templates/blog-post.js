import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <body class="body">
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>

      <h1 class="title">{post.frontmatter.title}</h1>
      <header class="links">
        <Link to="/blog">Blogovi</Link>
        <hr></hr>
      </header>

      <small>{post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`