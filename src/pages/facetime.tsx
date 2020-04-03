import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Container } from "../components/Container"
import { IndexLayout, AnalyticsContext } from "../layouts"
import { Display, Paragraph, TitleWithNumberCircle, Header1, Header2 } from "../components/typography"
import { colors, widths } from "../styles/variables"

import vidImg from "../content/facetimePage/facetimeVideo.png"
import vidImg2x from "../content/facetimePage/faceTimeVideo@2x.png"
import vidImg3x from "../content/facetimePage/faceTimeVideo@3x.png"
import audioImg from "../content/facetimePage/facetimeAudio.png"
import audioImg2x from "../content/facetimePage/facetimeAudio@2x.png"
import audioImg3x from "../content/facetimePage/facetimeAudio@3x.png"

import menuImg from "../content/facetimePage/facetimeMenu.png"
import menuImg2x from "../content/facetimePage/facetimeMenu@2x.png"
import menuImg3x from "../content/facetimePage/facetimeMenu@3x.png"
import cancelImg from "../content/facetimePage/facetimeCancel.png"
import cancelImg2x from "../content/facetimePage/facetimeCancel@2x.png"
import cancelImg3x from "../content/facetimePage/facetimeCancel@3x.png"
import soundOfImg from "../content/facetimePage/facetimeSoundOf.png"
import soundOfImg2x from "../content/facetimePage/facetimeSoundOf@2x.png"
import soundOfImg3x from "../content/facetimePage/facetimeSoundOf@3x.png"
import turnOfVideoImg from "../content/facetimePage/facetimeVideoOf.png"
import turnOfVideoImg2x from "../content/facetimePage/facetimeVideoOf@2x.png"
import turnOfVideoImg3x from "../content/facetimePage/facetimeVideoOf@3x.png"
import fullscreenImg from "../content/facetimePage/facetimeFullscreen.png"
import fullscreenImg2x from "../content/facetimePage/facetimeFullscreen@2x.png"
import fullscreenImg3x from "../content/facetimePage/facetimeFullscreen@3x.png"
import { Crumb } from "../components/Crumbs"

const cards = [
  { id: "menu", image: menuImg, image2x: menuImg2x, image3x: menuImg3x },
  { id: "cancel", image: cancelImg, image2x: cancelImg2x, image3x: cancelImg3x },
  { id: "soundOf", image: soundOfImg, image2x: soundOfImg2x, image3x: soundOfImg3x },
  { id: "turnOfVideo", image: turnOfVideoImg, image2x: turnOfVideoImg2x, image3x: turnOfVideoImg3x },
  { id: "fullscreen", image: fullscreenImg, image2x: fullscreenImg2x, image3x: fullscreenImg3x },
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

const TipCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  background: rgba(255, 224, 0, 0.16);
  border: 3px solid ${colors.yellow};
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

  .inputWrapper {
    margin-top: 24px;

    @media (min-width: ${widths.md}px) {
      width: 256px;
    }
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    max-width: 420px;
    padding: 12px;
    border: 0;
    border-radius: 6px;
    border: 1px solid ${colors.yellow};
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .btn {
    display: flex;
    justify-content: center;

    background: ${colors.yellow};
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);

    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: ${colors.black};

    margin-top: 24px;
    padding: 16px;
    text-decoration: none;
    border-radius: 4px;
  }

  .btn:focus {
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.8);
  }
`

const StyledDiv = styled.div`
  margin-bottom: 16px;
  .link {
    color: ${colors.black};
    letter-spacing: -0.2px;
  }

  img {
    max-width: 100%;
  }
`

const FacetimePage: React.FC = () => {
  const intl = useIntl()
  const [loading, setLoading] = React.useState(true)
  const [device, setDevice] = React.useState("mac")

  const [renderSms, toggleSms] = React.useState(false)

  const [userNumber, setUserNumber] = React.useState("")
  const [recievingNumber, setRecievingNumber] = React.useState("")

  React.useEffect(() => {
    const deviceFromHash = window.location.hash.toLocaleLowerCase()
    let deviceTitle = "Mac"
    if (deviceFromHash.includes("ios")) {
      deviceTitle = `iPhone ${intl.formatMessage({ id: "or" })} iPad`
    }

    if (deviceFromHash.includes("ios") || deviceFromHash.includes("mac")) {
      toggleSms(true)
    }
    setDevice(deviceTitle)
    setLoading(false)
  })

  const renderUrl = () => `sms:${recievingNumber}&body=Tryck på den här länken när du vill ringa mig på FaceTime!  facetime://${userNumber}`

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
              {renderSms && (
                <TipCard>
                  <div className="cardHeader">
                    <Header1>{intl.formatMessage({ id: "facetimepageSmsTitle" })}</Header1>
                  </div>
                  <Paragraph color={colors.black}>{intl.formatMessage({ id: "facetimepageSmsBody" })}</Paragraph>
                  <div className="inputWrapper">
                    <div className="col">
                      <Header2>{intl.formatMessage({ id: "facetimepageSmsUser" })}</Header2>
                      <div style={{ marginTop: 8 }}>
                        <input
                          value={userNumber}
                          onChange={(e) => setUserNumber(e.target.value)}
                          type="number"
                          placeholder={intl.formatMessage({ id: "facetimepageSmsUser" })}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div style={{ marginTop: 16 }}>
                        <Header2>{intl.formatMessage({ id: "facetimepageSmsReciever" })}</Header2>
                      </div>
                      <div style={{ marginTop: 8 }}>
                        <input
                          value={recievingNumber}
                          onChange={(e) => setRecievingNumber(e.target.value)}
                          type="number"
                          placeholder={intl.formatMessage({ id: "facetimepageSmsReciever" })}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <a href={renderUrl()} className="btn" onClick={() => trackEvent(`GenerateSMSLink`)}>
                        {intl.formatMessage({ id: "facetimepageSmsCTA" })}
                      </a>
                    </div>
                  </div>
                </TipCard>
              )}

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
                <img srcSet={`${vidImg}, ${vidImg2x} 2x, ${vidImg3x} 3x`} alt="Facetime Video" />
              </StyledDiv>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph6" })}</Paragraph>
              </StyledDiv>

              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "facetimepageParagraph7" })}</Paragraph>
              </StyledDiv>

              <StyledDiv>
                <img srcSet={`${audioImg}, ${audioImg2x} 2x, ${audioImg3x} 3x`} alt="Facetime Audio" />
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
                      <img srcSet={`${card.image}, ${card.image2x} 2x, ${card.image3x} 3x`} alt="Facetime Menu icon" />
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
