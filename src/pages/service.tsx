import * as React from "react"
import { useEffect, useState } from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Page } from "../components/Page"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
import { Display, Paragraph, Header2 } from "../components/typography"
import { colors } from "../styles/variables"

const ServicePage: React.FC = () => {
  const [OS, setOS] = useState("")
  const [loading, toggleLoading] = useState(true)

  useEffect(() => {
    const device = window.location.hash.toLocaleLowerCase()

    if (device.includes("mac")) {
      setOS("apple")
      toggleLoading(false)
    }

    if (device.includes("ios")) {
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
    <IndexLayout>
      <Page step1Complete step2Complete>
        <Container>
          {loading ? (
            <Display>Loading...</Display>
          ) : (
            <>
              <div style={{ marginBottom: 24 }}>
                <Display>Välj vilken tjänst du vill använda för samtalet.</Display>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Paragraph color={colors.gray.dark}>
                  Klicka på den tjänst du vill använda dig av nedan för att få vidare instruktioner om hur du kommer igång.
                </Paragraph>
              </div>

              <div style={{ paddingBottom: 48 }}>
                <ServiceCard>
                  <div className="serviceHeader">
                    <div style={{ marginRight: 16 }}>
                      <img src="../../teamsIcon.png" alt="messenger icon" />
                    </div>
                    <Header2>Microsoft Teams</Header2>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <Paragraph color={colors.gray.dark}>
                      Med Teams kan du tillsammans med din anhöriga skapa en grupp som ni kan ringa videosamtal genom.
                    </Paragraph>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://google.com" className="link">
                      Starta teams -->
                    </a>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://google.com" className="link">
                    Läs mer -->
                  </a>
                </ServiceCard>
                {OS === "apple" && (
                  <ServiceCard>
                    <div className="serviceHeader">
                      <div style={{ marginRight: 16 }}>
                        <img src="../../facetimeIcon.png" alt="messenger icon" />
                      </div>
                      <Header2>FaceTime</Header2>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <Paragraph color={colors.gray.dark}>
                        Om den du vill kontakta också använder en iPhone eller iPad kan du snabbt och enkelt ringa upp dem med FaceTime.
                      </Paragraph>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <a target="_blank" rel="noopener noreferrer" href="https://google.com" className="link">
                        Starta FaceTime -->
                      </a>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://google.com" className="link">
                      Läs mer -->
                    </a>
                  </ServiceCard>
                )}

                <ServiceCard>
                  <div className="serviceHeader">
                    <div style={{ marginRight: 16 }}>
                      <img src="../../messengerIcon.png" alt="messenger icon" />
                    </div>
                    <Header2>Facebook Messenger</Header2>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <Paragraph color={colors.gray.dark}>
                      Om du redan använder Facebook kan du enkelt starta videosamtal via Messenger.
                    </Paragraph>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://google.com" className="link">
                      Starta Messenger -->
                    </a>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://google.com" className="link">
                    Läs mer -->
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
