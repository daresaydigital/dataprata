import * as React from "react"

import { Page } from "../components/Page"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
import { Header1 } from "../components/typography"

const AndroidPage: React.FC = () => {
  return (
    <IndexLayout>
      <Page step1Complete step2Complete>
        <Container>
          <Header1>Android services</Header1>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default AndroidPage
