import * as React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Page from "../components/Page"
import Container from "../components/Container"
import IndexLayout from "../layouts"

const IndexPage: React.FC = () => {
  const intl = useIntl()
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>{intl.formatMessage({ id: "title" })}</h1>
          <Link to="/page-2/">{intl.formatMessage({ id: "goto-page" })} 2</Link>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
