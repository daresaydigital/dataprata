import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Container } from "../components/Container"
import { IndexLayout, AnalyticsContext } from "../layouts"
import { Display, Paragraph, Header1, TitleWithNumberCircle } from "../components/typography"
import { colors } from "../styles/variables"
import { Crumb } from "../components/Crumbs"

import warningIcon from "../content/messengerPage/warningIcon.png"
import soundIcon from "../content/messengerPage/soundIcon.png"
import videoIcon from "../content/messengerPage/videoIcon.png"
import chattIcon from "../content/messengerPage/chattIcon.png"
import cancelIcon from "../content/messengerPage/cancelIcon.png"
import soundOffIcon from "../content/messengerPage/soundOffIcon.png"
import addParticipantsIcon from "../content/messengerPage/addParticipantsIcon.png"
import iosSearchChat from "../content/messengerPage/iosSearchChat.png"
import androidSearchChat from "../content/messengerPage/androidSearchChat.png"
import iosStartCall from "../content/messengerPage/iosStartCall.png"
import androidStartCall from "../content/messengerPage/androidStartCall.png"
import downArrow from "../content/messengerPage/down.png"

const beforeCallCards = [
  {
    id: "sound",
    image: soundIcon,
    title: "Ljudsamtal",
    text: "Startar ett vanligt ljudsamtal med personen. Ungefär som att ringa ett vanligt telefonsamtal.",
  },
  {
    id: "video",
    image: videoIcon,
    title: "Videosamtal",
    text: "Startar ett videosamtal med personen där ni kan se varandra samtidigt som ni pratar.",
  },
  {
    id: "chatt",
    image: chattIcon,
    title: "Chatta",
    text: "Här kan du skicka meddelanden i text. Tryck på chattfältet och skriv meddelanden med tangentbordet.",
    wide: true,
  },
]

const duringCallCards = [
  { id: "cancel", image: cancelIcon, title: "Avsluta", text: "Lägger på samtalet" },
  { id: "soundOff", image: soundOffIcon, title: "Ljud av", text: "Stänger av ditt ljud så att personen du pratar med inte kan höra dig" },
  {
    id: "addParticipants",
    image: addParticipantsIcon,
    title: "Lägg till deltagare",
    text: "Tryck här för att lägga till fler deltagare till samtalet.",
  },
]

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

const ToggleButton = styled.a`
  text-align: left;
  width: 100%;
  background: #f2f2f2;
  border-radius: 4px;
  padding: 16px;
  color: ${colors.black};
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0;

  &.active {
    background: #515151;
    color: #fff;
  }
`

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

  img.wide {
    width: 128px;
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

const MessengerPage: React.FC = () => {
  const intl = useIntl()
  const [loading, setLoading] = React.useState(true)
  const [os, setOs] = React.useState("pc")
  const [deviceTitle, setDeviceTitle] = React.useState("Pc")
  const [toggleAccount, setToggleAccount] = React.useState<"haveaccount" | "noaccount" | undefined>(undefined)

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

  let downloadMessengerUrl = "https://www.messenger.com/"
  if (os === "ios") {
    downloadMessengerUrl = "https://apps.apple.com/us/app/messenger/id454638411"
  }
  if (os === "android") {
    downloadMessengerUrl = "https://play.google.com/store/apps/details?id=com.facebook.orca&hl=en"
  }

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
      id: "messengerpageCrumb",
      target: "/messenger",
    },
  ]

  return (
    <IndexLayout pageTitleID="messengerpageTitle" showCTA={false} crumbs={crumbs}>
      <Container className={os}>
        <AnalyticsContext.Consumer>
          {({ trackEvent }) => (
            <>
              <div style={{ marginBottom: 24 }}>
                <Display>
                  {intl.formatMessage({ id: "messengerpageTitle" })} {deviceTitle}
                </Display>
              </div>
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>
                  Med Messenger kan du ringa video- och ljudsamtal samt chatta med dina kontakter. Kom ihåg att om något går snett så är det
                  bara att gå tillbaka och försöka på nytt.
                </Paragraph>
              </StyledDiv>
              <Card>
                <div className="cardHeader">
                  <div style={{ marginRight: 16 }}>
                    <img src={warningIcon} alt="Important" />
                  </div>
                  <Header1>Viktigt!</Header1>
                </div>
                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>
                    För att Messenger ska fungera så krävs det att du har ett Facebook-konto. Om du föredrar att inte skapa ett
                    Facebook-konto så rekommenderar vi att du använder{" "}
                    {os === "ios" && (
                      <>
                        <a href="/facetime#ios">FaceTime</a> eller
                      </>
                    )}{" "}
                    <a href={`/skype#${os}`}>Skype</a> istället.
                  </Paragraph>
                </StyledDiv>
              </Card>
              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={1}>Ladda ner appen</TitleWithNumberCircle>
              </div>
              <StyledDiv>
                {os === "ios" && (
                  <Paragraph color={colors.gray.dark}>Börja med att ladda ner Messenger- appen till din iPhone eller iPad.</Paragraph>
                )}
                {os === "android" && (
                  <Paragraph color={colors.gray.dark}>Börja med att ladda ner Messenger- appen till din Android.</Paragraph>
                )}
              </StyledDiv>

              <DownloadButton href={downloadMessengerUrl} target="_blank" rel="noopener noreferrer">
                <span>Ladda ner Messenger</span>
                <img src={downArrow} alt="Download Icon" />
              </DownloadButton>

              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={2}>Logga in</TitleWithNumberCircle>
              </div>
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>
                  Messenger är skapat av Facebook och kräver därför att du har ett Facebook-konto för att använda tjänsten. Om du inte har
                  ett konto så kan du skapa ett nytt. Tryck på det alternativet som stämmer överens för dig så ges instruktioner för hur du
                  går vidare.
                </Paragraph>
              </StyledDiv>

              <ToggleButton
                href="#"
                className={toggleAccount && toggleAccount === "noaccount" ? "active" : "in-active"}
                onClick={(e: any) => {
                  e.preventDefault()
                  trackEvent("NoFacebookAccountClick")
                  setToggleAccount("noaccount")
                }}
              >
                Jag har inget Facebook-konto
              </ToggleButton>
              <ToggleButton
                href="#"
                className={toggleAccount && toggleAccount === "haveaccount" ? "active" : "in-active"}
                onClick={(e: any) => {
                  e.preventDefault()
                  trackEvent("HaveFacebookAccountClick")
                  setToggleAccount("haveaccount")
                }}
              >
                Jag har redan ett Facebook-konto
              </ToggleButton>
              {toggleAccount && toggleAccount === "noaccount" && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      För att skapa ett konto så öppnar du Messenger appen och trycker på Skapa nytt konto. Du kommer då att hänvisas till
                      Facebook för att skapa ett konto där. Fyll i den begörda informationen och gå tillbaka till Messenger appen när ditt
                      konto har skapats.
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <Paragraph>Gå vidare till steg 3 när du är inloggad i Messenger.</Paragraph>
                  </StyledDiv>
                </>
              )}
              {toggleAccount && toggleAccount === "haveaccount" && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Om du har ett befintligt konto på Facebook så är det bara att logga in med det direkt i Messenger. Om du har prolem
                      med att logga in så kan du trycka på “Glömt lösenordet?” för att få instruktioner om hur du kan återställa ditt
                      lösenord.
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <Paragraph>Gå vidare till steg 3 när du är inloggad i Messenger.</Paragraph>
                  </StyledDiv>
                </>
              )}

              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={3}>Hitta den du vill prata med</TitleWithNumberCircle>
              </div>
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>
                  När du är inloggad på Messenger så kan du söka efter vänner och bekanta att prata med. Längst upp i mitten hittar du
                  sökfältet.
                </Paragraph>
              </StyledDiv>
              {os === "ios" && (
                <StyledDiv>
                  <img src={iosSearchChat} alt="Search Chat" />
                </StyledDiv>
              )}
              {os === "android" && (
                <StyledDiv>
                  <img src={androidSearchChat} alt="Search Chat" />
                </StyledDiv>
              )}
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>
                  Tryck i sökfältet och skriv in namnet på personen du vill kontakta. Om du hittar personen du vill kontakta så trycker du
                  på deras profilbild eller namn för att gå till deras profil, annars är det bara att göra en ny sökning.
                </Paragraph>
              </StyledDiv>
              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={4}>Starta ett samtal</TitleWithNumberCircle>
              </div>
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>
                  Väl inne på personens profil så finns ett flertal alternativ. Nedan finns förklaringar för de viktigaste funktionerna.
                </Paragraph>
              </StyledDiv>
              {os === "ios" && (
                <StyledDiv>
                  <img src={iosStartCall} alt="Start Call" />
                </StyledDiv>
              )}
              {os === "android" && (
                <StyledDiv>
                  <img src={androidStartCall} alt="Start Call" />
                </StyledDiv>
              )}
              {beforeCallCards.map((card) => (
                <Card key={card.id}>
                  <div className="cardHeader">
                    <div style={{ marginRight: 16 }}>
                      <img className={card.wide ? "wide" : ""} src={card.image} alt={`Teams ${card.id} icon`} />
                    </div>
                    <Header1>{card.title}</Header1>
                  </div>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{card.text}</Paragraph>
                  </StyledDiv>
                </Card>
              ))}
              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={5}>Under samtalet</TitleWithNumberCircle>
              </div>
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>
                  När du startar ett videosamtal så dyker ett nytt fönster upp med ett par knappar. Nedan finns förklaringar till vad de
                  viktigaste knapparna gör.
                </Paragraph>
              </StyledDiv>
              {duringCallCards.map((card) => (
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
              ))}
            </>
          )}
        </AnalyticsContext.Consumer>
      </Container>
    </IndexLayout>
  )
}

export default MessengerPage
