import { useIntl } from "gatsby-plugin-intl"
import React, { FC } from "react"

import { Container } from "../components/Container"
import { Display, Header1, Header2, Paragraph } from "../components/typography"
import { AndroidIcon, ArrowIcon, IosIcon, MacIcon, WindowsIcon } from "../icons/svgs"
import { AnalyticsContext, IndexLayout } from "../layouts"
import { colors } from "../styles/variables"
import { Crumb } from "../components/Crumbs"
import { probeDeviceInformation, OS } from "../components/hooks/device-probe"
import { SecondaryLink, PrimaryLink, LinkWrapper } from "../styles/device.styles"

const deviceInfo = probeDeviceInformation()

const renderIcon = (platform: OS): JSX.Element => {
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

const renderDeviceOS = (platform: OS): string => {
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

const renderSecondaryLink = (platform: OS): JSX.Element => (
  <>
    <AnalyticsContext.Consumer>
      {({ trackEvent }) => (
        <SecondaryLink to={`/service/#${platform}`} onClick={() => trackEvent(`${platform}ServicePageClick`)}>
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

const Device: FC = () => {
  const intl = useIntl()

  return (
    <IndexLayout pageTitleID="devicepageTitle" crumbs={crumbs} showCTA={false}>
      <Container>
        <div style={{ marginBottom: 40 }}>
          <Display>{intl.formatMessage({ id: "devicepageTitle" })}</Display>
        </div>
        {deviceInfo.os !== "linux" && deviceInfo.os !== "unknown" && (
          <>
            <div style={{ marginBottom: 16 }}>
              <Header2>{intl.formatMessage({ id: "currentDeviceTitle" })}</Header2>
            </div>
            <AnalyticsContext.Consumer>
              {({ trackEvent }) => (
                <PrimaryLink to={`/service/#${deviceInfo.os}/`} onClick={() => trackEvent(`${deviceInfo.os}ServicePageClick`)}>
                  <div className="innerWrapper">
                    <div className="row">
                      <div style={{ paddingRight: 24 }}>{renderIcon(deviceInfo.os as OS)}</div>
                      <Header1>{renderDeviceOS(deviceInfo.os as OS)}</Header1>
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
          </>
        )}
        <LinkWrapper>
          {deviceInfo.os !== "windows" ? renderSecondaryLink("windows") : null}
          {deviceInfo.os !== "mac" ? renderSecondaryLink("mac") : null}
          {deviceInfo.os !== "ios" ? renderSecondaryLink("ios") : null}
          {deviceInfo.os !== "android" ? renderSecondaryLink("android") : null}
        </LinkWrapper>
      </Container>
    </IndexLayout>
  )
}

export default Device
