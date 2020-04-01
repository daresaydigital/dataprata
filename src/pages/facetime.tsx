import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Container } from "../components/Container"
import { IndexLayout, AnalyticsContext } from "../layouts"
import { Display, Paragraph, TitleWithNumberCircle, Header1 } from "../components/typography"
import { colors } from "../styles/variables"

import videoImg from "../content/facetimePage/facetimeVideo.png"
import audioImg from "../content/facetimePage/facetimeAudio.png"

import menuImg from "../content/facetimePage/facetimeMenu.png"
import cancelImg from "../content/facetimePage/facetimeCancel.png"
import soundOfImg from "../content/facetimePage/facetimeSoundOf.png"
import turnOfVideoImg from "../content/facetimePage/facetimeVideoOf.png"
import fullscreenImg from "../content/facetimePage/facetimeFullscreen.png"
import { Crumb } from "../components/Crumbs"

const cards = [
  { id: "menu", image: menuImg },
  { id: "cancel", image: cancelImg },
  { id: "soundOf", image: soundOfImg },
  { id: "turnOfVideo", image: turnOfVideoImg },
  { id: "fullscreen", image: fullscreenImg },
]

// TODO: This is now duplicated from service.tsx
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  background: ${colors.gray.light};
  border: 3px solid #eee;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;

  .cardHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .link {
    color: ${colors.black};
    letter-spacing: -0.2px;
    word-break: break-word;
  }
`

const StyledDiv = styled.div`
  margin-bottom: 16px;
  .link {
    color: ${colors.black};
    letter-spacing: -0.2px;
  }
`

const FacetimePage: React.FC = () => {
  const intl = useIntl()
  const [loading, setLoading] = React.useState(true)
  const [device, setDevice] = React.useState("mac")

  React.useEffect(() => {
    const deviceFromHash = window.location.hash.toLocaleLowerCase()
    let deviceTitle = "Mac"
    if (deviceFromHash.includes("ios")) {
      deviceTitle = `iPhone ${intl.formatMessage({ id: "or" })} iPad`
    }
    setDevice(deviceTitle)
    setLoading(false)
  })

  if (loading) {
    return null
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
      target: `/service${window.location.hash.toLocaleLowerCase()}`,
    },
    {
      id: "facetimePageCrumb",
      target: "/facetime",
    },
  ]

  return (
    <IndexLayout pageTitleID="facetimepageTitle" showCTA={false} crumbs={crumbs}>
      <Container>
        <AnalyticsContext.Consumer>
          {({ trackEvent }) => (
            <>
              <div style={{ marginBottom: 24 }}>
                <Display>
                  {intl.formatMessage({ id: "facetimepageTitle" })} {device}
                </Display>
              </div>
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph1" })}</Paragraph>
              </StyledDiv>

              <StyledDiv>
                <TitleWithNumberCircle number={1}>{intl.formatMessage({ id: "facetimepageStartFacetime" })}</TitleWithNumberCircle>
              </StyledDiv>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>
                  <a
                    href="facetime:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    onClick={() => trackEvent(`StartCallWithFacetime`)}
                  >
                    {intl.formatMessage({ id: "facetimeOpenLinkTitle" })}
                  </a>{" "}
                  {intl.formatMessage({ id: "facetimeOpenLinkText" })}
                </Paragraph>
              </StyledDiv>

              <Card>
                <div className="cardHeader">
                  <Header1>{intl.formatMessage({ id: "facetimepageWhatIsAppleIdTitle" })}</Header1>
                </div>
                <Paragraph color={colors.gray.dark}>
                  {intl.formatMessage({ id: "facetimepageWhatIsAppleIdParagraph" })}{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.apple.com/sv-se/HT204316"
                    className="link"
                    onClick={() => trackEvent(`ReadMoreAboutAppleIdClick`)}
                  >
                    https://support.apple.com/sv-se/HT204316
                  </a>
                </Paragraph>
              </Card>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph3" })}</Paragraph>
              </StyledDiv>

              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={2}>{intl.formatMessage({ id: "facetimepageStartCallSomeone" })}</TitleWithNumberCircle>
              </div>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph4" })}</Paragraph>
              </StyledDiv>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph5" })}</Paragraph>
              </StyledDiv>

              <StyledDiv>
                <img src={videoImg} alt="Facetime Video" />
              </StyledDiv>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph6" })}</Paragraph>
              </StyledDiv>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph7" })}</Paragraph>
              </StyledDiv>

              <StyledDiv>
                <img src={audioImg} alt="Facetime Audio" />
              </StyledDiv>

              <div style={{ marginBottom: 16, marginTop: 32 }}>
                <TitleWithNumberCircle number={3}>{intl.formatMessage({ id: "facetimepageDuringTheCall" })}</TitleWithNumberCircle>
              </div>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph8" })}</Paragraph>
              </StyledDiv>

              {cards.map((card) => (
                <Card key={card.id}>
                  <div className="cardHeader">
                    <div style={{ marginRight: 16 }}>
                      <img src={card.image} alt="Facetime Menu icon" />
                    </div>
                    <Header1>{intl.formatMessage({ id: `facetime${card.id}Title` })}</Header1>
                  </div>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: `facetime${card.id}Info` })}</Paragraph>
                  </StyledDiv>
                </Card>
              ))}
            </>
          )}
        </AnalyticsContext.Consumer>
      </Container>
    </IndexLayout>
  )
}

export default FacetimePage
