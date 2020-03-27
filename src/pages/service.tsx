import * as React from "react"
import { useEffect, useState } from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Page } from "../components/Page"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
import { Display, Paragraph, Header2 } from "../components/typography"
import { colors } from "../styles/variables"

const ServicePage: React.FC = () => {
  const intl = useIntl()
  const [OS, setOS] = useState("")
  const [loading, toggleLoading] = useState(true)

  useEffect(() => {
    const device = window.location.hash.toLocaleLowerCase()

    if (device.includes("mac") || device.includes("ios")) {
      setOS("apple")
      toggleLoading(false)
    }

    if (device.includes("android")) {
      setOS("android")
      toggleLoading(false)
    }

    if (device.includes("windows")) {
      setOS("windows")
      toggleLoading(false)
    }
  })

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

    img {
      width: 40px;
      height: 40px;
    }
  `

  return (
    <IndexLayout pageTitle={intl.formatMessage({ id: "servicepageTitle" })}>
      <Page step1Complete step2Complete>
        <Container>
          {loading ? (
            <Display>Loading...</Display>
          ) : (
            <>
              <div style={{ marginBottom: 24 }}>
                <Display>{intl.formatMessage({ id: "servicepageTitle" })}</Display>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "servicepageParagraph" })}</Paragraph>
              </div>

              <div style={{ paddingBottom: 48 }}>
                {OS === "apple" && (
                  <ServiceCard>
                    <div className="serviceHeader">
                      <div style={{ marginRight: 16 }}>
                        <img src="../../facetimeIcon.png" alt="Facetime logo" />
                      </div>
                      <Header2>FaceTime</Header2>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimeDescription" })}</Paragraph>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <a href="facetime:14085551234" className="link">
                        {intl.formatMessage({ id: "facetimeCTA" })}
                      </a>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://support.apple.com/sv-se/HT204380" className="link">
                      {intl.formatMessage({ id: "readMoreLink" })}
                    </a>
                  </ServiceCard>
                )}

                <ServiceCard>
                  <div className="serviceHeader">
                    <div style={{ marginRight: 16 }}>
                      <img src="../../skypeIcon.png" alt="Skype logo" />
                    </div>
                    <Header2>Skype</Header2>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypeDescription" })}</Paragraph>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://web.skype.com/" className="link">
                      {intl.formatMessage({ id: "skypeCTA" })}
                    </a>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.skype.com/sv/features/" className="link">
                    {intl.formatMessage({ id: "readMoreLink" })}
                  </a>
                </ServiceCard>

                <ServiceCard>
                  <div className="serviceHeader">
                    <div style={{ marginRight: 16 }}>
                      <img src="../../teamsIcon.png" alt="Teams logo" />
                    </div>
                    <Header2>Microsoft Teams</Header2>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamsDescription" })}</Paragraph>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2f_%23%2fl%2fmeetup-join%2f&type=meetup-join&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                      className="link"
                    >
                      {intl.formatMessage({ id: "teamsCTA" })}
                    </a>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.office.com/sv-se/article/video-kom-ig%C3%A5ng-med-ditt-team-702a2977-e662-4038-bef5-bdf8ee47b17b"
                    className="link"
                  >
                    {intl.formatMessage({ id: "readMoreLink" })}
                  </a>
                </ServiceCard>

                <ServiceCard>
                  <div className="serviceHeader">
                    <div style={{ marginRight: 16 }}>
                      <img src="../../messengerIcon.png" alt="messenger logo" />
                    </div>
                    <Header2>Facebook Messenger</Header2>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "messengerDescription" })}</Paragraph>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.messenger.com/" className="link">
                      {intl.formatMessage({ id: "messengerCTA" })}
                    </a>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/help/messenger-app/1414800065460231?helpref=topq"
                    className="link"
                  >
                    {intl.formatMessage({ id: "readMoreLink" })}
                  </a>
                </ServiceCard>
              </div>
            </>
          )}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ServicePage
