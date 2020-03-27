import * as React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import styled from "@emotion/styled"

import { Page } from "../components/Page"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
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
    <IndexLayout pageTitle={intl.formatMessage({ id: "homepageMetaTitle" })}>
      <Page>
        <Container>
          <div style={{ marginBottom: 16 }}>
            <Display>{intl.formatMessage({ id: "homepageTitle" })}</Display>
          </div>
          <div style={{ marginBottom: 24 }}>
            <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "homepageParagraph1" })}</Paragraph>
          </div>
          <div style={{ marginBottom: 24 }}>
            <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "homepageParagraph2" })}</Paragraph>
          </div>
          <StyledLink to="/device/">
            <Header2>{intl.formatMessage({ id: "homepageNavigate" })}</Header2>
          </StyledLink>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
