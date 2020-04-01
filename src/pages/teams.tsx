import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Container } from "../components/Container"
import { IndexLayout, AnalyticsContext } from "../layouts"
import { Display, Paragraph, TitleWithNumberCircle, Header1 } from "../components/typography"
import { colors } from "../styles/variables"
import { Crumb } from "../components/Crumbs"

import videoIcon from "../content/teamsPage/videoIcon.png"
import soundIcon from "../content/teamsPage/soundIcon.png"
import toggleVideoImg from "../content/teamsPage/toggleVideoImg.png"
import toggleMicImg from "../content/teamsPage/toggleMicImg.png"
import toggleChatImg from "../content/teamsPage/toggleChatImg.png"
import toggleParticipantsImg from "../content/teamsPage/toggleParticipantsImg.png"
import cancelCallImg from "../content/teamsPage/cancelCallImg.png"
import signInImg from "../content/teamsPage/signInImg.png"
import downloadTeamsImg from "../content/teamsPage/downloadTeamsImg.png"
import createTeamImg from "../content/teamsPage/createTeamImg.png"
import inviteMembersImg from "../content/teamsPage/inviteMembersImg.png"
import inviteMoreMembersImg from "../content/teamsPage/inviteMoreMembersImg.png"
import startCallImg from "../content/teamsPage/startCallImg.png"
import startCallImg2 from "../content/teamsPage/startCallImg2.png"
// PC images
import inviteMoreMembersPc from "../content/teamsPage/inviteMoreMembersPc.png"
import downloadTeamsPc from "../content/teamsPage/downloadTeamsPc.png"
import startCallImgPc from "../content/teamsPage/startCallImgPc.png"
import startCallImgPc2 from "../content/teamsPage/startCallImgPc2.png"

import teamsIcon from "../content/teamsIcon.png"

const startCallCards = [
  { id: "video", image: videoIcon },
  { id: "sound", image: soundIcon },
]

const duringCallCards = [
  { id: "toggleVideo", image: toggleVideoImg },
  { id: "toggleMic", image: toggleMicImg },
  { id: "toggleChat", image: toggleChatImg },
  { id: "toggleParticipants", image: toggleParticipantsImg },
  { id: "cencelCall", image: cancelCallImg },
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

const TeamsPage: React.FC = () => {
  const intl = useIntl()
  const [loading, setLoading] = React.useState(true)
  const [os, setOs] = React.useState("pc")
  const [deviceTitle, setDeviceTitle] = React.useState("Pc")

  React.useEffect(() => {
    const deviceFromHash = window.location.hash.toLocaleLowerCase()
    if (deviceFromHash.includes("mac")) {
      setDeviceTitle("Mac")
      setOs("mac")
    } else if (deviceFromHash.includes("ios")) {
      setDeviceTitle(`iPhone ${intl.formatMessage({ id: "or" })} iPad`)
      setOs("ios")
    } else if (deviceFromHash.includes("linux") || deviceFromHash === null || deviceFromHash.includes("android")) {
      setOs("android")
      setDeviceTitle("Android")
    }
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
      id: "teamsPageCrumb",
      target: "/teams",
    },
  ]

  return (
    <IndexLayout pageTitleID="teamspageTitle" showCTA={false} crumbs={crumbs}>
      <Container className={os}>
        {!loading && (
          <AnalyticsContext.Consumer>
            {({ trackEvent }) => (
              <>
                <div style={{ marginBottom: 24 }}>
                  <Display>
                    {intl.formatMessage({ id: "teamspageTitle" })} {deviceTitle}
                  </Display>
                </div>

                {os === "mac" && (
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      {intl.formatMessage({ id: "teamspageParagraph1" })} <a href="/facetime#mac">FaceTime</a>{" "}
                      {intl.formatMessage({ id: "or" })} <a href="/skype#mac">Skype</a>{" "}
                      {intl.formatMessage({ id: "teamspageParagraph1Part2" })}
                    </Paragraph>
                  </StyledDiv>
                )}

                {os === "pc" && (
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      {intl.formatMessage({ id: "teamspageParagraph1" })} <a href="/skype#pc">Skype</a>{" "}
                      {intl.formatMessage({ id: "teamspageParagraph1Part2" })}
                    </Paragraph>
                  </StyledDiv>
                )}

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph2" })}</Paragraph>
                </StyledDiv>

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={1}>{intl.formatMessage({ id: "teamspageCreateAccount" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>
                    {intl.formatMessage({ id: "teamspageParagraph3" })}{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      onClick={() => trackEvent(`CreateMicrosoftAccountClick`)}
                      href="https://teams.microsoft.com"
                    >
                      {intl.formatMessage({ id: "teamsPageParagraph3LinkText" })}
                    </a>{" "}
                    {intl.formatMessage({ id: "teamspageParagraph3Part2" })}
                  </Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={signInImg} alt="Screenshot of signing in to Microsoft Teams" />
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph4" })}</Paragraph>
                </StyledDiv>

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={2}>{intl.formatMessage({ id: "teamspageDownloadTeams" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph5" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>
                    {intl.formatMessage({ id: "teamspageParagraph6" })}{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      onClick={() => trackEvent(`DownloadTeamsLinkClick`)}
                      href="https://products.office.com/sv-se/microsoft-teams/download-app#desktopAppDownloadregion"
                    >
                      {intl.formatMessage({ id: "teamspageParagraph6LinkText" })}
                    </a>{" "}
                    {intl.formatMessage({ id: "teamspageParagraph6Part2" })}
                  </Paragraph>
                </StyledDiv>

                {os === "mac" && (
                  <StyledDiv>
                    <img src={downloadTeamsImg} alt="Donwload teams" />
                  </StyledDiv>
                )}
                {os === "pc" && (
                  <StyledDiv>
                    <img src={downloadTeamsPc} alt="Donwload teams" />
                  </StyledDiv>
                )}

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>
                    {os === "mac" && intl.formatMessage({ id: "teamspageParagraph7" })}
                    {os === "pc" && intl.formatMessage({ id: "teamspageParagraph7Pc" })}
                  </Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph8" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={teamsIcon} alt="Microsoft Teams Icon" />
                </StyledDiv>

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={3}>{intl.formatMessage({ id: "teamspageCreateATeam" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>
                    {intl.formatMessage({ id: "teamspageParagraph9" })}{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      onClick={() => trackEvent(`CreateTeamsLinkClick`)}
                      href="https://go.microsoft.com/fwlink/p/?linkid=2123761&lm=deeplink&lmsrc=homePageWeb&cmpid=FreemiumSignUpFooter"
                    >
                      {intl.formatMessage({ id: "teamspageParagraph6LinkText" })}
                    </a>{" "}
                    {intl.formatMessage({ id: "teamspageParagraph9Part2" })}
                  </Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={createTeamImg} alt="Create a Team Screenshot" />
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph10" })}</Paragraph>
                </StyledDiv>

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={4}>{intl.formatMessage({ id: "teamspageInviteMembers" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph11" })}</Paragraph>
                </StyledDiv>

                <StyledDiv>
                  <img src={inviteMembersImg} alt="Invite members screenshot" />
                </StyledDiv>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph12" })}</Paragraph>
                </StyledDiv>

                {os === "mac" && (
                  <StyledDiv>
                    <img src={inviteMoreMembersImg} alt="Invite members screenshot" />
                  </StyledDiv>
                )}
                {os === "pc" && (
                  <StyledDiv>
                    <img src={inviteMoreMembersPc} alt="Invite members screenshot" />
                  </StyledDiv>
                )}

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={5}>{intl.formatMessage({ id: "teamspageStartACall" })}</TitleWithNumberCircle>
                </div>

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph13" })}</Paragraph>
                </StyledDiv>

                {os === "mac" && (
                  <StyledDiv>
                    <img src={startCallImg} alt="Start a call screenshot" />
                  </StyledDiv>
                )}
                {os === "pc" && (
                  <StyledDiv>
                    <img src={startCallImgPc} alt="Start a call screenshot" />
                  </StyledDiv>
                )}

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph14" })}</Paragraph>
                </StyledDiv>

                {os === "mac" && (
                  <StyledDiv>
                    <img src={startCallImg2} alt="Start a call screenshot" />
                  </StyledDiv>
                )}
                {os === "pc" && (
                  <StyledDiv>
                    <img src={startCallImgPc2} alt="Start a call screenshot" />
                  </StyledDiv>
                )}

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph15" })}</Paragraph>
                </StyledDiv>

                {startCallCards.map((card) => (
                  <Card key={card.id}>
                    <div className="cardHeader">
                      <div style={{ marginRight: 16 }}>
                        <img src={card.image} alt={`Teams ${card.id} icon`} />
                      </div>
                      <Header1>{intl.formatMessage({ id: `teams${card.id}Title` })}</Header1>
                    </div>
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: `teams${card.id}Info` })}</Paragraph>
                    </StyledDiv>
                  </Card>
                ))}

                <div style={{ marginBottom: 16, marginTop: 16 }}>
                  <TitleWithNumberCircle number={6}>{intl.formatMessage({ id: "teamspageDuringTheCall" })}</TitleWithNumberCircle>
                </div>

                {duringCallCards.map((card) => (
                  <Card key={card.id}>
                    <div className="cardHeader">
                      <div style={{ marginRight: 16 }}>
                        <img src={card.image} alt={`Teams ${card.id} icon`} />
                      </div>
                      <Header1>{intl.formatMessage({ id: `teams${card.id}Title` })}</Header1>
                    </div>
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: `teams${card.id}Info` })}</Paragraph>
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

export default TeamsPage
