import * as React from "react"
import { useEffect, useState } from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import styled from "@emotion/styled"

import { Page } from "../components/Page"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
import { Display, Header2, Header1, Paragraph } from "../components/typography"
import { WindowsIcon, MacIcon, ArrowIcon, IosIcon, AndroidIcon } from "../icons/svgs"
import { colors, widths } from "../styles/variables"

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

const Device: React.FC = () => {
  const intl = useIntl()
  const [OS, setOS] = useState("")
  const [loading, toggleLoading] = useState(true)

  useEffect(() => {
    const userOS = window.navigator.platform.toLocaleLowerCase()

    // Not tested for ios, android, windows
    if (userOS.includes("mac")) {
      setOS("mac")
      toggleLoading(false)
    } else if (userOS.includes("iphone") || userOS.includes("ipad")) {
      setOS("ios")
      toggleLoading(false)
    } else if (userOS.includes("android")) {
      setOS("android")
      toggleLoading(false)
    } else {
      setOS("windows")
      toggleLoading(false)
    }
  })

  const renderIcon = () => {
    if (OS === "android") {
      return <AndroidIcon />
    }

    if (OS === "mac") {
      return <MacIcon />
    }

    if (OS === "ios") {
      return <IosIcon />
    }

    return <WindowsIcon />
  }

  const renderDeviceOS = () => {
    if (OS === "android") {
      return "Android"
    }

    if (OS === "mac") {
      return "Mac"
    }

    if (OS === "ios") {
      return "iPhone / iPad"
    }

    return "Windows"
  }

  return (
    <IndexLayout pageTitle={intl.formatMessage({ id: "devicepageTitle" })}>
      <Page showCTA={false}>
        <Container>
          {loading ? (
            <Display>Loading...</Display>
          ) : (
            <>
              <div style={{ marginBottom: 40 }}>
                <Display>{intl.formatMessage({ id: "devicepageTitle" })}</Display>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Header2>{intl.formatMessage({ id: "currentDeviceTitle" })}</Header2>
              </div>
              <PrimaryLink to={`/service#${OS}/`}>
                <div className="innerWrapper">
                  <div className="row">
                    <div style={{ paddingRight: 24 }}>{renderIcon()}</div>
                    <Header1>{renderDeviceOS()}</Header1>
                  </div>
                  <div className="row">
                    <ArrowIcon />
                  </div>
                </div>
              </PrimaryLink>
              <div style={{ marginBottom: 8 }}>
                <Header2>{intl.formatMessage({ id: "otherDeviceTitle" })}</Header2>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "otherDeviceParagraph" })}</Paragraph>
              </div>
              <LinkWrapper>
                {OS === "windows" ? null : (
                  <SecondaryLink to="/service#windows/">
                    <div className="innerWrapper">
                      <div className="row">
                        <div className="iconMargin">
                          <WindowsIcon />
                        </div>
                        <Header1>Windows</Header1>
                      </div>
                      <div className="arrow">
                        <ArrowIcon />
                      </div>
                    </div>
                  </SecondaryLink>
                )}
                {OS === "mac" ? null : (
                  <SecondaryLink to="/service#mac/">
                    <div className="innerWrapper">
                      <div className="row">
                        <div className="iconMargin">
                          <MacIcon />
                        </div>
                        <Header1>Mac</Header1>
                      </div>
                      <div className="arrow">
                        <ArrowIcon />
                      </div>
                    </div>
                  </SecondaryLink>
                )}
                {OS === "ios" ? null : (
                  <SecondaryLink to="/service#ios/">
                    <div className="innerWrapper">
                      <div className="row">
                        <div className="iconMargin">
                          <IosIcon />
                        </div>
                        <Header1>iPhone / iPad</Header1>
                      </div>
                      <div className="arrow">
                        <ArrowIcon />
                      </div>
                    </div>
                  </SecondaryLink>
                )}
                {OS === "android" ? null : (
                  <SecondaryLink to="/service#android/">
                    <div className="innerWrapper">
                      <div className="row">
                        <div className="iconMargin">
                          <MacIcon />
                        </div>
                        <Header1>Android</Header1>
                      </div>
                      <div className="arrow">
                        <ArrowIcon />
                      </div>
                    </div>
                  </SecondaryLink>
                )}
              </LinkWrapper>
            </>
          )}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default Device
