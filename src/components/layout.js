import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">BONN</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            BONN
          </Link>
        )}
      </header>

      <main>{children}</main>

      <footer>
        © BONN 2022
      </footer>
    </div>
  )
}

export default Layout
