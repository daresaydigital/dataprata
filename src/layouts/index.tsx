import * as React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "modern-normalize"
import "../styles/normalize"

import Header from "../components/Header"
import LayoutRoot from "../components/LayoutRoot"
import LayoutMain from "../components/LayoutMain"
import Sidebar from "../components/Sidebar"

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: data.site.siteMetadata.description },
            { name: "keywords", content: data.site.siteMetadata.keywords },
          ]}
        >
          <link href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap" rel="stylesheet" />
        </Helmet>
        {/* <Header title={data.site.siteMetadata.title} /> */}
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
