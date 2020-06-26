import React, { useContext } from "react"

import styled from "@emotion/styled"
import { useIntl } from "gatsby-plugin-intl"

import { StyledLink, ContactCard } from "../styles/index.styles"
import { Container } from "../components/Container"
import { Caption, Display, Header1, Header2, Paragraph } from "../components/typography"
import { FeedbackIcon } from "../icons/svgs"
import { AnalyticsContext, IndexLayout } from "../layouts"
import { colors } from "../styles/variables"
import { Crumb } from "../components/Crumbs"

const StyledPhone = styled.a`
  color: ${colors.black};
`
const crumbs: Crumb[] = []

const IndexPage: React.FC = () => {
  const intl = useIntl()
  const analyticsContext = useContext(AnalyticsContext)
  return (
    <IndexLayout pageTitleID="homepageMetaTitle" crumbs={crumbs}>
      <Container>
        <div style={{ marginBottom: 16 }}>
          <Header1 color={colors.gray.dark}>{intl.formatMessage({ id: "hashtag" })}</Header1>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Display>{intl.formatMessage({ id: "homepageTitle" })}</Display>
        </div>
        <div style={{ marginBottom: 24 }}>
          <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "homepageParagraph1" })}</Paragraph>
        </div>
        <div style={{ marginBottom: 24 }}>
          <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "homepageParagraph2" })}</Paragraph>
        </div>
        <StyledLink to="/device/" onClick={() => analyticsContext.trackEvent("GetStartedClick")}>
          <Header2>{intl.formatMessage({ id: "homepageCTA" })}</Header2>
        </StyledLink>
        <ContactCard>
          <div className="leftCol">
            <div style={{ marginBottom: 8 }}>
              <Header1>{intl.formatMessage({ id: "feedback-title" })}</Header1>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Caption color={colors.gray.dark}>{intl.formatMessage({ id: "feedback-text" })}</Caption>
            </div>

            <Header1>
              <StyledPhone href="tel:+46731519083">073 151 90 83</StyledPhone>
            </Header1>
          </div>
          <div className="rightCol">
            <FeedbackIcon />
          </div>
        </ContactCard>
      </Container>
    </IndexLayout>
  )
}

export default IndexPage
