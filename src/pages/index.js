import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/All.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  const programs = data.allAposProgram.nodes

  return (
    <body class="body">
      <div>
        {programs.map(item => {
          return (
            <section className="mb-6" key={item.id}>
              <h2 className="text-xl">{item.title}</h2>
              <ul>
                {/*
                  The following pattern is a conditional, checking if we 
                  have a `cost` value. We'll continue to use this in other places.
                */}
                {item.cost &&
                  <li>Price: ${item.cost}</li>
                }
                {item.ageGroup &&
                  <li>Ages: {ageGroupToRange(item.ageGroup)}</li>
                }
                <li>
                  Dates: {formatDate(item.startDate)} to {formatDate(item.endDate)}
                </li>
              </ul>
              {item.description && <p className="mt-3">{item.description}</p>}
            </section>
          )
        })}
      </div>
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
    allAposProgram {
      nodes {
        ageGroup
        id
        title
        cost
        description
        startDate
        endDate
      }
    }
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

function formatDate(date) {
  const obj = new Date(date)
  return obj.toLocaleDateString()
}

function ageGroupToRange(group) {
  return group.split("to")
    .map(n => parseInt(n))
    .join(" - ")
}