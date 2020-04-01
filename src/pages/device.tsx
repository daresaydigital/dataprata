import styled from "@emotion/styled"
import { Link, useIntl } from "gatsby-plugin-intl"
import * as React from "react"
import { useEffect, useState } from "react"
import { Container } from "../components/Container"
import { Display, Header1, Header2, Paragraph } from "../components/typography"
import { AndroidIcon, ArrowIcon, IosIcon, MacIcon, WindowsIcon } from "../icons/svgs"
import { AnalyticsContext, IndexLayout } from "../layouts"
import { colors, widths } from "../styles/variables"
import { Crumb } from "../components/Crumbs"

const PrimaryLink = styled(Link)`
  align-self: stretch;
  padding: 32px;
  margin-bottom: 40px;

  background: rgba(255, 224, 0, 0.16);
  border: 3px solid ${colors.yellow};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    transform: translateY(-2px);
    background: rgba(255, 224, 0, 0);
  }

  &:focus {
    transition: all 0.2s ease;
    transform: translateY(-2px);
    background: rgba(255, 224, 0, 0);
  }

  .innerWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .row {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-bottom: 64px;
`

const SecondaryLink = styled(Link)`
  display: flex;
  justify-content: center;

  text-decoration: none;
  background: ${colors.gray.light};
  border: 3px solid #eee;
  width: 100%;
  margin-bottom: 16px;
  padding: 32px;
  border-radius: 8px;

  transition: all 0.2s ease;

  @media (min-width: ${widths.md}px) {
    padding: 0;
    max-width: 210px;
    height: 240px;
  }

  &:hover {
    transform: translateY(-2px);
    border: 3px solid #ddd;
    transition: all 0.2s ease;
  }

  &:focus {
    transform: translateY(-2px);
    border: 3px solid #ddd;
    transition: all 0.2s ease;
  }

  .innerWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (min-width: ${widths.md}px) {
      flex-direction: column;
      justify-content: center;
    }

    .row {
      display: flex;
      align-items: center;
      flex-direction: row;
      @media (min-width: ${widths.md}px) {
        flex-direction: column;
        justify-content: center;
      }
    }

    .iconMargin {
      margin-right: 24px;
      margin-bottom: 0;
      @media (min-width: ${widths.md}px) {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }

    .arrow {
      display: block;
      @media (min-width: ${widths.md}px) {
        display: none;
      }
    }
  }
`

const renderIcon = (platform: string): JSX.Element => {
  switch (platform) {
    case "android":
      return <AndroidIcon />
    case "mac":
      return <MacIcon />
    case "ios":
      return <IosIcon />
    default:
      return <WindowsIcon />
  }
}

const renderDeviceOS = (platform: string): string => {
  switch (platform) {
    case "android":
      return "Android"
    case "mac":
      return "Mac"
    case "ios":
      return "iPhone / iPad"
    default:
      return "Windows"
  }
}

const renderSecondaryLink = (platform: string): JSX.Element => (
  <>
    <AnalyticsContext.Consumer>
      {({ trackEvent }) => (
        <SecondaryLink to={`/service#${platform}/`} onClick={() => trackEvent(`${platform}ServicePageClick`)}>
          <div className="innerWrapper">
            <div className="row">
              <div className="iconMargin">{renderIcon(platform)}</div>
              <Header1>{renderDeviceOS(platform)}</Header1>
            </div>
            <div className="arrow">
              <ArrowIcon />
            </div>
          </div>
        </SecondaryLink>
      )}
    </AnalyticsContext.Consumer>
  </>
)
const crumbs: Crumb[] = [
  {
    id: "homepageCrumb",
    target: "/",
  },
  {
    id: "devicePageCrumb",
    target: "/device",
  },
]

const Device: React.FC = () => {
  const intl = useIntl()
  const [OS, setOS] = useState("windows")
  const [loading, toggleLoading] = useState(true)

  useEffect(() => {
    const userOS = window.navigator.platform.toLocaleLowerCase()

    // Not tested for ios, android, windows
    if (userOS.includes("mac")) {
      setOS("mac")
    } else if (userOS.includes("iphone") || userOS.includes("ipad")) {
      setOS("ios")
    } else if (userOS.includes("linux") || userOS === null || userOS.includes("android")) {
      setOS("android")
    }
    toggleLoading(false)
  })

  return (
    <IndexLayout pageTitleID="devicepageTitle" crumbs={crumbs} showCTA={false}>
      <Container>
        {loading ? null : (
          <>
            <div style={{ marginBottom: 40 }}>
              <Display>{intl.formatMessage({ id: "devicepageTitle" })}</Display>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Header2>{intl.formatMessage({ id: "currentDeviceTitle" })}</Header2>
            </div>
            <AnalyticsContext.Consumer>
              {({ trackEvent }) => (
                <PrimaryLink to={`/service#${OS}/`} onClick={() => trackEvent(`${OS}ServicePageClick`)}>
                  <div className="innerWrapper">
                    <div className="row">
                      <div style={{ paddingRight: 24 }}>{renderIcon(OS)}</div>
                      <Header1>{renderDeviceOS(OS)}</Header1>
                    </div>
                    <div className="row">
                      <ArrowIcon />
                    </div>
                  </div>
                </PrimaryLink>
              )}
            </AnalyticsContext.Consumer>
            <div style={{ marginBottom: 8 }}>
              <Header2>{intl.formatMessage({ id: "otherDeviceTitle" })}</Header2>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "otherDeviceParagraph" })}</Paragraph>
            </div>
            <LinkWrapper>
              {OS !== "windows" ? renderSecondaryLink("windows") : null}
              {OS !== "mac" ? renderSecondaryLink("mac") : null}
              {OS !== "ios" ? renderSecondaryLink("ios") : null}
              {OS !== "android" ? renderSecondaryLink("android") : null}
            </LinkWrapper>
          </>
        )}
      </Container>
    </IndexLayout>
  )
}

export default Device
