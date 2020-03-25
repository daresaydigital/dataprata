import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"

import { Page } from "../components/Page"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
import { Header1 } from "../components/typography"

const ServicePage: React.FC = () => {
  const intl = useIntl()
  return (
    <IndexLayout>
      <Page step1Complete step2Complete>
        <Container>
          <Header1>{intl.formatMessage({ id: "title" })}</Header1>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ServicePage
