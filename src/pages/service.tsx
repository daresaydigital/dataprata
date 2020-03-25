import * as React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Page from "../components/Page"
import Container from "../components/Container"
import IndexLayout from "../layouts"

const ServicePage: React.FC = () => {
  const intl = useIntl()
  return (
    <IndexLayout>
      <Page step1Complete step2Complete>
        <Container>
          <h1>{intl.formatMessage({ id: "title" })}</h1>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ServicePage
