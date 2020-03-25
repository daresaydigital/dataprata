import * as React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import styled from "@emotion/styled"

import Page from "../components/Page"
import Container from "../components/Container"
import IndexLayout from "../layouts"
import { Display, Paragraph, Header2 } from "../components/typography"
import { colors } from "../styles/variables"

const StyledLink = styled(Link)`
  padding: 24px;
  background: ${colors.yellow};
  text-decoration: none;
  border-radius: 4px;
`

const IndexPage: React.FC = () => {
  const intl = useIntl()
  return (
    <IndexLayout>
      <Page>
        <Container>
          <div style={{ marginBottom: 16 }}>
            <Display text={intl.formatMessage({ id: "homepageTitle" })} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <Paragraph color={colors.gray.dark} text={intl.formatMessage({ id: "homepageParagraph1" })} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <Paragraph color={colors.gray.dark} text={intl.formatMessage({ id: "homepageParagraph2" })} />
          </div>
          <StyledLink to="/devicePage/">
            <Header2 text={intl.formatMessage({ id: "homepageNavigate" })} />
          </StyledLink>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
