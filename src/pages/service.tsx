import React, { FC } from "react"
import { IntlShape, useIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby"

import { Container } from "../components/Container"
import { Display, Header2, Paragraph } from "../components/typography"
import facetimeIcon from "../content/facetimeIcon.png"
import messengerIcon from "../content/messengerIcon.png"
import skypeIcon from "../content/skypeIcon.png"
import teamsIcon from "../content/teamsIcon.png"
import { AnalyticsContext, IndexLayout } from "../layouts"
import { colors } from "../styles/variables"
import { Crumb } from "../components/Crumbs"
import { deviceFromURIHash } from "../components/hooks/device-probe"
import { ServiceCard } from "../styles/service.styles"

const renderServiceCard = (
  intl: IntlShape,
  name: string,
  icon: string,
  desc: string,
  cta: string,
  link: string,
  moreLink: string,
): JSX.Element => {
  // TODO: This feels like totally the wrong way to solve this,
  // maybe extract to component, or pass in <a> as child?
  const isExternalLink = moreLink.startsWith("http")

  return (
    <ServiceCard>
      <AnalyticsContext.Consumer>
        {({ trackEvent }) => (
          <>
            <div className="serviceHeader">
              <div style={{ marginRight: 16 }}>
                <img src={icon} alt={`${name} icon`} />
              </div>
              <Header2>{name}</Header2>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: desc })}</Paragraph>
            </div>
            <div style={{ marginBottom: 16 }}>
              <a href={link} className="link" onClick={() => trackEvent(`StartCallWith${name}`)}>
                {intl.formatMessage({ id: cta })}
              </a>
            </div>
            <Link
              target={isExternalLink ? "_blank" : ""}
              rel={isExternalLink ? "noopener noreferrer" : ""}
              to={moreLink}
              className="link"
              onClick={() => trackEvent(`ReadMoreAbout${name}Click`)}
            >
              {intl.formatMessage({ id: "readMoreLink" })}
            </Link>
          </>
        )}
      </AnalyticsContext.Consumer>
    </ServiceCard>
  )
}

const ServicePage: FC = () => {
  const intl = useIntl()
  const deviceInfo = deviceFromURIHash()

  const crumbs: Crumb[] = [
    {
      id: "homepageCrumb",
      target: "/",
    },
    {
      id: "devicePageCrumb",
      target: "/device",
    },
    {
      id: "servicePageCrumb",
      target: `/service/#${deviceInfo.os}`,
    },
  ]

  return (
    <IndexLayout pageTitleID="servicepageTitle" crumbs={crumbs} showCTA={false}>
      <Container>
        <div style={{ marginBottom: 24 }}>
          <Display>{intl.formatMessage({ id: "servicepageTitle" })}</Display>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "servicepageParagraph" })}</Paragraph>
        </div>

        <div style={{ paddingBottom: 48 }}>
          {(deviceInfo.os === "ios" || deviceInfo.os === "mac") &&
            renderServiceCard(
              intl,
              "FaceTime",
              facetimeIcon,
              "facetimeDescription",
              "facetimeCTA",
              "facetime:",
              `/facetime/#${deviceInfo.os}`,
            )}
          {renderServiceCard(intl, "Skype", skypeIcon, "skypeDescription", "skypeCTA", "skype:", `/skype/#${deviceInfo.os}`)}
          {renderServiceCard(
            intl,
            "Teams",
            teamsIcon,
            "teamsDescription",
            "teamsCTA",
            "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2f_%23%2fl%2fmeetup-join%2f&type=meetup-join&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
            `/teams/#${deviceInfo.os}`,
          )}
          {renderServiceCard(
            intl,
            "Facebook Messenger",
            messengerIcon,
            "messengerDescription",
            "messengerCTA",
            deviceInfo.mobile === "yes" ? "fb://messaging/new" : "https://messenger.com",
            `/messenger/#${deviceInfo.os}`,
          )}
        </div>
      </Container>
    </IndexLayout>
  )
}

export default ServicePage
