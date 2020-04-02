import styled from "@emotion/styled"
import { IntlShape, useIntl } from "gatsby-plugin-intl"
import * as React from "react"
import { useEffect, useState } from "react"
import { Container } from "../components/Container"
import { Display, Header2, Paragraph } from "../components/typography"
import facetimeIcon from "../content/facetimeIcon.png"
import messengerIcon from "../content/messengerIcon.png"
import skypeIcon from "../content/skypeIcon.png"
import teamsIcon from "../content/teamsIcon.png"
import { AnalyticsContext, IndexLayout } from "../layouts"
import { colors } from "../styles/variables"
import { Crumb } from "../components/Crumbs"

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  background: ${colors.gray.light};
  border: 3px solid #eee;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;

  .serviceHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  }

  .actionWrapper {
    display: flex;
    flex-direction: column;
  }

  .link {
    text-decoration: none;

    color: ${colors.black};
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.2px;
    font-weight: 600;
  }

  .link.disabled {
    color: #ccc;
  }

  img {
    width: 40px;
    height: 40px;
  }
`

const renderServiceCard = (
  intl: IntlShape,
  name: string,
  icon: string,
  desc: string,
  cta: string,
  link: string,
  moreLink: string,
  disabled: boolean,
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
            {disabled ? (
              <span className="link disabled">Guide kommer snart</span>
            ) : (
              <a
                target={isExternalLink ? "_blank" : ""}
                rel={isExternalLink ? "noopener noreferrer" : ""}
                href={moreLink}
                className="link"
                onClick={() => trackEvent(`ReadMoreAbout${name}Click`)}
              >
                {intl.formatMessage({ id: "readMoreLink" })}
              </a>
            )}
          </>
        )}
      </AnalyticsContext.Consumer>
    </ServiceCard>
  )
}

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
    target: "/service",
  },
]

const ServicePage: React.FC = () => {
  const intl = useIntl()
  const [OS, setOS] = useState("windows")
  const [deviceFromHash, setDeviceFromHash] = useState("#pc")
  const [isMobile, setMobile] = useState(false)
  const [loading, toggleLoading] = useState(true)

  useEffect(() => {
    const device = window.location.hash.toLocaleLowerCase()

    // Not tested for ios, android, windows
    if (device.includes("mac") || device.includes("ios") || device.includes("iphone") || device.includes("ipad")) {
      setOS("apple")
      setDeviceFromHash(device)
      if (device.includes("ios")) {
        setMobile(true)
      }
    } else if (device.includes("linux") || device === null || device.includes("android")) {
      setOS("android")
      setDeviceFromHash("#android")
      setMobile(true)
    }
    toggleLoading(false)
  })

  const hideTeams =
    deviceFromHash.includes("android") ||
    deviceFromHash.includes("ios") ||
    deviceFromHash.includes("iphone") ||
    deviceFromHash.includes("ipad")
  const hideMessenger = deviceFromHash.includes("pc") || deviceFromHash.includes("mac")

  // window.console.log(hideTeams, hideMessenger, deviceFromHash, OS)

  return (
    <IndexLayout pageTitleID="servicepageTitle" crumbs={crumbs} showCTA={false}>
      <Container>
        {loading ? null : (
          <>
            <div style={{ marginBottom: 24 }}>
              <Display>{intl.formatMessage({ id: "servicepageTitle" })}</Display>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "servicepageParagraph" })}</Paragraph>
            </div>

            <div style={{ paddingBottom: 48 }}>
              {OS === "apple" &&
                renderServiceCard(
                  intl,
                  "FaceTime",
                  facetimeIcon,
                  "facetimeDescription",
                  "facetimeCTA",
                  "facetime:",
                  `/facetime${deviceFromHash}`,
                  false,
                )}
              {renderServiceCard(intl, "Skype", skypeIcon, "skypeDescription", "skypeCTA", "skype:", `/skype${deviceFromHash}`, false)}
              {renderServiceCard(
                intl,
                "Teams",
                teamsIcon,
                "teamsDescription",
                "teamsCTA",
                "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2f_%23%2fl%2fmeetup-join%2f&type=meetup-join&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
                `/teams${deviceFromHash}`,
                hideTeams,
              )}
              {renderServiceCard(
                intl,
                "Facebook Messenger",
                messengerIcon,
                "messengerDescription",
                "messengerCTA",
                isMobile ? "fb://messaging/new" : "https://facebook.com",
                `/messenger${deviceFromHash}`,
                hideMessenger,
              )}
            </div>
          </>
        )}
      </Container>
    </IndexLayout>
  )
}

export default ServicePage
