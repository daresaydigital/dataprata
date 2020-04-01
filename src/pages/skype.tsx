import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Container } from "../components/Container"
import { IndexLayout, AnalyticsContext } from "../layouts"
import { Display, Paragraph, TitleWithNumberCircle, Header1 } from "../components/typography"
import { colors } from "../styles/variables"
import { Crumb } from "../components/Crumbs"

import toggleVideoImg from "../content/skypePage/toggleVideo.png"
import toggleSoundImg from "../content/skypePage/toggleSound.png"
import cancelCallImg from "../content/skypePage/cancelCall.png"
import openChatImg from "../content/skypePage/openChat.png"

import downloadsImg from "../content/skypePage/downloadsScreenshot.png"
import installImg from "../content/skypePage/skypeInstallScreenshot.png"
import addContactsImg from "../content/skypePage/skypeAddContacts.png"
import newContactsImg from "../content/skypePage/skypeNewContact.png"
import makeACallImg from "../content/skypePage/skypeMacACall.png"

const cards = [
  { id: "toggleVideo", image: toggleVideoImg },
  { id: "toggleSound", image: toggleSoundImg },
  { id: "cancelCall", image: cancelCallImg },
  { id: "openChat", image: openChatImg },
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
  {
    id: "skypePageCrumb",
    target: "/skype",
  },
]

const SkypePage: React.FC = () => {
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

  return (
    <IndexLayout pageTitleID="skypepageTitle" showCTA={false} crumbs={crumbs}>
      <Container>
        {!loading && (
          <AnalyticsContext.Consumer>
            {({ trackEvent }) => (
              <>
                <div style={{ marginBottom: 24 }}>
                  <Display>
                    {intl.formatMessage({ id: "skypepageTitle" })} {device}
                  </Display>
                </div>
                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph1" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <TitleWithNumberCircle number={1}>{intl.formatMessage({ id: "skypepageInstall" })}</TitleWithNumberCircle>
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>
                    {intl.formatMessage({ id: "skypepageParagraph2Part1" })}
                    <a href="..">TODO</a>
                    {intl.formatMessage({ id: "skypepageParagraph2Part2" })}
                  </Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph3" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={downloadsImg} alt="Screenshot of Downloads folder" />
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph4" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph5" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={installImg} alt="Screenshot of Skype install" />
                </StyledDiv>

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={2}>{intl.formatMessage({ id: "skypepageCreateAccount" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph6" })}</Paragraph>
                </StyledDiv>

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={3}>{intl.formatMessage({ id: "skypepageAddContacts" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph7" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={addContactsImg} alt="Screenshot of adding contacts" />
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph8" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={newContactsImg} alt="Screenshot of adding contacts" />
                </StyledDiv>

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={4}>{intl.formatMessage({ id: "skypepageMakeAVideoCall" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph9" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={makeACallImg} alt="Screenshot of adding contacts" />
                </StyledDiv>

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={5}>{intl.formatMessage({ id: "skypeDuringTheCall" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph10" })}</Paragraph>
                </StyledDiv>

                {cards.map((card) => (
                  <Card key={card.id}>
                    <div className="cardHeader">
                      <div style={{ marginRight: 16 }}>
                        <img src={card.image} alt={`Skype ${card.id} icon`} />
                      </div>
                      <Header1>{intl.formatMessage({ id: `skype${card.id}Title` })}</Header1>
                    </div>
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: `skype${card.id}Info` })}</Paragraph>
                    </StyledDiv>
                  </Card>
                ))}
              </>
            )}
          </AnalyticsContext.Consumer>
        )}
      </Container>
    </IndexLayout>
  )
}

export default SkypePage
