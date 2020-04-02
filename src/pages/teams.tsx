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
import downArrow from "../content/messengerPage/down.png"
// Mobile images
import iosInviteMembers from "../content/teamsPage/iosInviteMembers.png"
import androidInviteMembers from "../content/teamsPage/androidInviteMembers.png"
import iosSearch from "../content/teamsPage/iosSearch.png"
import androidSearch from "../content/teamsPage/androidSearch.png"
import iosSearch2 from "../content/teamsPage/iosSearch2.png"
import androidSearch2 from "../content/teamsPage/androidSearch2.png"
import iosProfile from "../content/teamsPage/iosProfile.png"
import androidProfile from "../content/teamsPage/androidProfile.png"

import chattIcon from "../content/teamsPage/chattIcon.png"
import mobileVideoIcon from "../content/teamsPage/mobileVideoIcon.png"
import mobileSoundIcon from "../content/teamsPage/mobileSoundIcon.png"
import activityIcon from "../content/teamsPage/mobileActivityIcon.png"

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

const mobileCards = [
  { id: "chatt", image: chattIcon, title: "Chatta", text: "Tryck här för att skicka meddelanden i text." },
  {
    id: "video",
    image: mobileVideoIcon,
    title: "Videosamtal",
    text: "Startar ett videosamtal med personen där ni kan se varandra samtidigt som ni pratar.",
  },
  {
    id: "sound",
    image: mobileSoundIcon,
    title: "Ljudsamtal",
    text: "Startar ett vanligt ljudsamtal med personen. Ungefär som att ringa ett vanligt telefonsamtal.",
  },
  {
    id: "activity",
    image: activityIcon,
    title: "Aktivitet",
    text: "Här kan du se personens aktivitet inuti teams, bland annat vad de skickat för meddelanden till teamet.",
  },
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
  img {
    max-width: 100%;
  }
`

const DownloadButton = styled.a`
  text-align: left;
  width: 100%;
  background: #ffe000;
  border-radius: 4px;
  padding: 16px;
  color: ${colors.black};
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  margin: 16px 0;
  img {
    align-self: flex-end;
    width: 18px;
    height: 18px;
  }
  span {
    flex: 1;
  }

  &:hover {
    background: #e0c500;
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

                {(os === "android" || os === "ios") && (
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Microsoft Teams är ett kommunikationsverktyg gjort för företag. Därför är andra program såsom{" "}
                      {os === "ios" && (
                        <>
                          <a href={`/facetime#${os}`}>FaceTime</a> eller{" "}
                        </>
                      )}
                      <a href={`/skype#${os}`}>Skype</a> rekommenderat om du vill videochatta med vänner och familj.
                    </Paragraph>
                  </StyledDiv>
                )}

                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph2" })}</Paragraph>
                </StyledDiv>

                {(os === "mac" || os === "pc") && (
                  <>
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

                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "teamspageParagraph16" })}</Paragraph>
                    </StyledDiv>
                  </>
                )}

                {(os === "ios" || os === "android") && (
                  <>
                    <div style={{ marginBottom: 16, marginTop: 16 }}>
                      <TitleWithNumberCircle number={1}>Ladda ner appen</TitleWithNumberCircle>
                    </div>
                    <StyledDiv>
                      {os === "ios" && (
                        <Paragraph color={colors.gray.dark}>Börja med att ladda ner Teams- appen till din iPhone eller iPad</Paragraph>
                      )}
                      {os === "android" && (
                        <Paragraph color={colors.gray.dark}>Börja med att ladda ner Teams- appen till din Android.</Paragraph>
                      )}
                    </StyledDiv>
                    <DownloadButton
                      href={
                        os === "ios"
                          ? "https://apps.apple.com/us/app/microsoft-teams/id1113153706"
                          : "https://play.google.com/store/apps/details?id=com.microsoft.teams&hl=en"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Ladda ner Messenger</span>
                      <img src={downArrow} alt="Download Icon" />
                    </DownloadButton>
                    <div style={{ marginBottom: 16, marginTop: 16 }}>
                      <TitleWithNumberCircle number={2}>Logga in</TitleWithNumberCircle>
                    </div>
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>
                        När du öppnar appen för första gången får du två alternativ att välja på. Tryck på “Logga in” om du har fått en
                        inbjudan till din e-post. Om du inte har fått en inbjudan så trycker du på “Registrera dig kostnadsfritt”. Du kommer
                        nu att begäras skriva in din e-post. Om du inte har någon e-post så går det att{" "}
                        <a href="https://signup.live.com/" target="_blank" rel="noopener noreferrer">
                          skapa en ny här
                        </a>
                      </Paragraph>
                    </StyledDiv>
                    <div style={{ marginBottom: 16, marginTop: 16 }}>
                      <TitleWithNumberCircle number={3}>Bjud in medlemmar</TitleWithNumberCircle>
                    </div>
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>
                        När du är inloggad på Teams så kan du söka efter andra som är med i teamet eller bjuda in nya personer
                      </Paragraph>
                    </StyledDiv>
                    {os === "ios" && (
                      <StyledDiv>
                        <img src={iosInviteMembers} alt="Invite members screenshot" />
                      </StyledDiv>
                    )}
                    {os === "android" && (
                      <StyledDiv>
                        <img src={androidInviteMembers} alt="Invite members screenshot" />
                      </StyledDiv>
                    )}
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>
                        Vill du bjuda in nya personer så trycker du på “Bjud in personer” och då kan du bjuda in personer via email eller
                        genom en delbar länk. Alla som du skickar länken till kan gå med i ditt team genom att klicka på länken.
                      </Paragraph>
                    </StyledDiv>

                    <div style={{ marginBottom: 16, marginTop: 16 }}>
                      <TitleWithNumberCircle number={4}>Starta ett samtal</TitleWithNumberCircle>
                    </div>

                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>Inne i appen hittar du sökfunktionen längst upp på skärmen.</Paragraph>
                    </StyledDiv>
                    {os === "ios" && (
                      <StyledDiv>
                        <img src={iosSearch} alt="Search screenshot" />
                      </StyledDiv>
                    )}
                    {os === "android" && (
                      <StyledDiv>
                        <img src={androidSearch} alt="Search screenshot" />
                      </StyledDiv>
                    )}
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>
                        Tryck på förstoringsglaset för att söka efter personer i teamet att prata med.
                      </Paragraph>
                    </StyledDiv>
                    {os === "ios" && (
                      <StyledDiv>
                        <img src={iosSearch2} alt="Search screenshot part 2" />
                      </StyledDiv>
                    )}
                    {os === "android" && (
                      <StyledDiv>
                        <img src={androidSearch2} alt="Search screenshot part 2" />
                      </StyledDiv>
                    )}
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>
                        Skriv in namnet på personen och tryck på namnet för att öppna deras profilsida.
                      </Paragraph>
                    </StyledDiv>
                    {os === "ios" && (
                      <StyledDiv>
                        <img src={iosProfile} alt="Search screenshot part 2" />
                      </StyledDiv>
                    )}
                    {os === "android" && (
                      <StyledDiv>
                        <img src={androidProfile} alt="Search screenshot part 2" />
                      </StyledDiv>
                    )}

                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>På profilsidan ser du ett antal ikoner som har olika funktioner.</Paragraph>
                    </StyledDiv>

                    {mobileCards.map((card) => {
                      if (os === "android" && card.id === "chatt") {
                        return null
                      }
                      return (
                        <Card key={card.id}>
                          <div className="cardHeader">
                            <div style={{ marginRight: 16 }}>
                              <img src={card.image} alt={`Teams ${card.id} icon`} />
                            </div>
                            <Header1>{card.title}</Header1>
                          </div>
                          <StyledDiv>
                            <Paragraph color={colors.gray.dark}>{card.text}</Paragraph>
                          </StyledDiv>
                        </Card>
                      )
                    })}

                    <div style={{ marginBottom: 16, marginTop: 16 }}>
                      <TitleWithNumberCircle number={5}>Under samtalet</TitleWithNumberCircle>
                    </div>

                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>
                        När du startar ett videosamtal så dyker ett nytt fönster upp med ett par knappar. Nedan finns förklaringar till vad
                        de viktigaste knapparna gör.
                      </Paragraph>
                    </StyledDiv>
                  </>
                )}

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
