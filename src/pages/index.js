import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/All.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <body class="body">
      <Helmet>
        <title>ENT Summer Camp</title>
      </Helmet>
      <h1 class="title">{title}</h1>
      <header class="links">
        <Link to="/blog">Blogovi</Link>
        &nbsp;
        &nbsp;
        <Link to="https://www.keycloak.org/">Prijava</Link>
      </header>
      <hr></hr>

      <p>{description}</p>
      <img alt="Ericsson Nikola Tesla" src={data.image.publicURL} />
      
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
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "Ericsson-nikola-tesla.png" }) {
      publicURL
    }
  }
`