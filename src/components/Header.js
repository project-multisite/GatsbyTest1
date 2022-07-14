import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Header() {
  const data = useStaticQuery(graphql`
    query MainNav {
      allSitePage(
        filter: { path: { nin: ["/dev-404-page/", "/"] } }
        sort: { fields: [path], order: ASC }
      ) {
        edges {
          node {
            pluginCreator {
              name
              pluginFilepath
            }
          }
        }
      }
    }
  `)
  let nav = []
  if (
    data &&
    data.allSitePage &&
    data.allSitePage.edges &&
    data.allSitePage.edges.length
  ) {
    nav = data.allSitePage.edges
      .map(e => ({
        name: e.node.pluginCreator.name,
        pluginFilepath: e.node.pluginCreator.pluginFilepath,
      }))
      // Only include top level items.
      .filter(node => {
        return node.pluginFilepath && node.pluginFilepath.split("/").length === 2
      })
  }

  const linkClasses = "text-blue-500 hover:text-blue-800"

  return (
    <header className="rl-header container mx-auto mb-6 mt-8 max-w-3xl flex">
      <nav className="nav flex-grow flex items-center justify-end">
        <ul className="flex">
          {nav.map(item => {
            return (
              <li className="ml-6" key={item.pluginFilepath}>
                <Link className={linkClasses} to={item.pluginFilepath}>
                  {item.name}
                </Link>
              </li>
            )
          })}
          <li className="ml-6">
            <Link className={linkClasses} to="/programs">
              Programs
            </Link>
          </li>
          <li className="ml-6">
            <Link className={linkClasses} to="/staff">
              Staff
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
