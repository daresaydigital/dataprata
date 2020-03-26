import * as React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import { Page } from "../components/Page"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
import { Header1 } from "../components/typography"

const Device: React.FC = () => {
  const intl = useIntl()
  return (
    <IndexLayout>
      <Page step1Complete>
        <Container>
          <Header1>{intl.formatMessage({ id: "title" })}</Header1>
          <Link to="/service/">{intl.formatMessage({ id: "goto-page" })} 2</Link>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default Device
