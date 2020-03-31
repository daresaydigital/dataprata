import styled from "@emotion/styled"
import { Link, useIntl } from "gatsby-plugin-intl"
import * as React from "react"
import { useContext } from "react"
import { Container } from "../components/Container"
import { Page } from "../components/Page"
import { Caption, Display, Header1, Header2, Paragraph } from "../components/typography"
import { FeedbackIcon } from "../icons/svgs"
import { AnalyticsContext, IndexLayout, Crumb } from "../layouts"
import { colors, widths } from "../styles/variables"

const StyledLink = styled(Link)`
  padding: 24px;
  background: ${colors.yellow};
  text-decoration: none;
  border-radius: 4px;
`

const ContactCard = styled.div`
  margin-top: 40px;
  padding: 32px;
  background-color: #ffd000;
  background-image: linear-gradient(-90deg, #fff543, #ffd000);

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  @media (min-width: ${widths.md}px) {
    flex-direction: row;
  }

  .leftCol {
    text-align: center;
    @media (min-width: ${widths.md}px) {
      min-width: 380px;
      text-align: left;
    }
  }

  .rightCol {
    margin-top: 32px;
    @media (min-width: ${widths.md}px) {
      margin-top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`
const crumbs: Crumb[] = []

const IndexPage: React.FC = () => {
  const intl = useIntl()
  const analyticsContext = useContext(AnalyticsContext)
  return (
    <IndexLayout pageTitleID="homepageMetaTitle" crumbs={crumbs}>
      <Page>
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

              <Header1>073 151 90 83</Header1>
            </div>
            <div className="rightCol">
              <FeedbackIcon />
            </div>
          </ContactCard>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
