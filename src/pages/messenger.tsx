import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Container } from "../components/Container"
import { IndexLayout, AnalyticsContext } from "../layouts"
import { Display, Paragraph, Header1, TitleWithNumberCircle } from "../components/typography"
import { colors, widths } from "../styles/variables"
import { Crumb } from "../components/Crumbs"

import warningIcon from "../content/messengerPage/warningIcon.png"
import warningIcon2x from "../content/messengerPage/warningIcon@2x.png"
import warningIcon3x from "../content/messengerPage/warningIcon@3x.png"

import soundIcon from "../content/messengerPage/soundIcon.png"
import soundIcon2x from "../content/messengerPage/soundIcon@2x.png"
import soundIcon3x from "../content/messengerPage/soundIcon@3x.png"

import videoIcon from "../content/messengerPage/videoIcon.png"
import videoIcon2x from "../content/messengerPage/videoIcon@2x.png"
import videoIcon3x from "../content/messengerPage/videoIcon@3x.png"

import chattIcon from "../content/messengerPage/chattIcon.png"
import chattIcon2x from "../content/messengerPage/chattIcon@2x.png"
import chattIcon3x from "../content/messengerPage/chattIcon@3x.png"

import cancelIcon from "../content/messengerPage/cancelIcon.png"
import cancelIcon2x from "../content/messengerPage/cancelIcon@2x.png"
import cancelIcon3x from "../content/messengerPage/cancelIcon@3x.png"

import soundOffIcon from "../content/messengerPage/soundOffIcon.png"
import soundOffIcon2x from "../content/messengerPage/soundOffIcon@2x.png"
import soundOffIcon3x from "../content/messengerPage/soundOffIcon@3x.png"

import addParticipantsIcon from "../content/messengerPage/addParticipantsIcon.png"
import addParticipantsIcon2x from "../content/messengerPage/addParticipantsIcon@2x.png"
import addParticipantsIcon3x from "../content/messengerPage/addParticipantsIcon@3x.png"

import iosSearchChat from "../content/messengerPage/iosSearchChat.png"
import iosSearchChat2x from "../content/messengerPage/iosSearchChat@2x.png"
import iosSearchChat3x from "../content/messengerPage/iosSearchChat@3x.png"

import androidSearchChat from "../content/messengerPage/androidSearchChat.png"
import androidSearchChat2x from "../content/messengerPage/androidSearchChat@2x.png"
import androidSearchChat3x from "../content/messengerPage/androidSearchChat@3x.png"

import iosStartCall from "../content/messengerPage/iosStartCall.png"
import iosStartCall2x from "../content/messengerPage/iosStartCall@2x.png"
import iosStartCall3x from "../content/messengerPage/iosStartCall@3x.png"

import androidStartCall from "../content/messengerPage/androidStartCall.png"
import androidStartCall2x from "../content/messengerPage/androidStartCall@2x.png"
import androidStartCall3x from "../content/messengerPage/androidStartCall@3x.png"

import downArrow from "../content/messengerPage/down.png"
import downArrow2x from "../content/messengerPage/down@2x.png"
import downArrow3x from "../content/messengerPage/down@3x.png"

import searchFacebookMessenger from "../content/messengerPage/searchFacebookMessenger.png"
import searchFacebookMessenger2x from "../content/messengerPage/searchFacebookMessenger@2x.png"
import searchFacebookMessenger3x from "../content/messengerPage/searchFacebookMessenger@3x.png"

import messengerProfile from "../content/messengerPage/messengerProfile.png"
import messengerProfile2x from "../content/messengerPage/messengerProfile@2x.png"
import messengerProfile3x from "../content/messengerPage/messengerProfile@3x.png"

import chatWindow from "../content/messengerPage/chatWindow.png"
import chatWindow2x from "../content/messengerPage/chatWindow@2x.png"
import chatWindow3x from "../content/messengerPage/chatWindow@3x.png"

const beforeCallCards = [
  {
    id: "video",
    image: videoIcon,
    image2x: videoIcon2x,
    image3x: videoIcon3x,
    title: "Videosamtal",
    text: "Startar ett videosamtal med personen där ni kan se varandra samtidigt som ni pratar.",
  },
  {
    id: "sound",
    image: soundIcon,
    image2x: soundIcon2x,
    image3x: soundIcon3x,
    title: "Ljudsamtal",
    text: "Startar ett vanligt ljudsamtal med personen. Ungefär som att ringa ett vanligt telefonsamtal.",
  },
  {
    id: "chatt",
    image: chattIcon,
    image2x: chattIcon2x,
    image3x: chattIcon3x,
    title: "Chatta",
    text: "Här kan du skicka meddelanden i text. Tryck på chattfältet och skriv meddelanden med tangentbordet.",
    wide: true,
  },
]

const duringCallCards = [
  { id: "cancel", image: cancelIcon, image2x: cancelIcon2x, image3x: cancelIcon3x, title: "Avsluta", text: "Lägger på samtalet" },
  {
    id: "soundOff",
    image: soundOffIcon,
    image2x: soundOffIcon2x,
    image3x: soundOffIcon3x,
    title: "Ljud av",
    text: "Stänger av ditt ljud så att personen du pratar med inte kan höra dig",
  },
  {
    id: "addParticipants",
    image: addParticipantsIcon,
    image2x: addParticipantsIcon2x,
    image3x: addParticipantsIcon3x,
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

const ToggleWrapper = styled(StyledDiv)`
  width: 100%;
  padding: 16px 0;
`

const ToggleButton = styled.a`
  text-align: left;
  background: #f2f2f2;
  border-radius: 4px;
  padding: 16px;
  color: ${colors.black};
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 8px 8px 0;
  width: 100%;
  float: left;

  &.active {
    background: #515151;
    color: #fff;
  }

  @media (min-width: ${widths.md}px) {
    width: auto;
  }
`

const AccountToggler: React.FC<{
  toggleAccount: "haveaccount" | "noaccount" | undefined
  trackEvent: (what: string) => void
  setToggleAccount: React.Dispatch<React.SetStateAction<"noaccount" | "haveaccount" | undefined>>
  os: "mac" | "pc" | "ios" | "android"
}> = ({ toggleAccount, setToggleAccount, trackEvent, os }) => (
  <>
    <ToggleWrapper>
      <ToggleButton
        href="#"
        className={toggleAccount && toggleAccount === "noaccount" ? "active" : "in-active"}
        onClick={(e) => {
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
        onClick={(e) => {
          e.preventDefault()
          trackEvent("HaveFacebookAccountClick")
          setToggleAccount("haveaccount")
        }}
      >
        Jag har redan ett Facebook-konto
      </ToggleButton>
    </ToggleWrapper>
    {toggleAccount && toggleAccount === "noaccount" && (
      <>
        <StyledDiv>
          <Header1>Skapa ett konto</Header1>
        </StyledDiv>
        {(os === "mac" || os === "pc") && (
          <>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>
                Gå till{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sv-se.facebook.com/"
                  onClick={() => trackEvent("CreateAccountGoingToFacebook")}
                >
                  https://sv-se.facebook.com/
                </a>{" "}
                och fyll i de uppgifter som efterfrågas. När du har fyllt i alla uppgifter trycker du på “Gå med” för att skapa ditt konto.
              </Paragraph>
            </StyledDiv>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>
                Du kommer nu att få en bekräftelsekod till det mobilnummer eller den e-postadress som du angav. Fyll i bekräftelsekoden i
                rutan och tryck sedan på “Fortsätt”.
              </Paragraph>
            </StyledDiv>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>
                Därefter har du möjlighet att fylla i extra information om dig själv så att andra personer på Facebook kan veta mer om dig,
                men detta krävs inte för att använda Messenger och är något du kan göra senare.
              </Paragraph>
            </StyledDiv>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>Nu när du har skapat ett konto och är inloggad kan du gå vidare till steg 2</Paragraph>
            </StyledDiv>
          </>
        )}
        {(os === "ios" || os === "android") && (
          <>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>
                För att skapa ett konto så öppnar du Messenger appen och trycker på Skapa nytt konto. Du kommer då att hänvisas till
                Facebook för att skapa ett konto där. Fyll i den begörda informationen och gå tillbaka till Messenger appen när ditt konto
                har skapats.
              </Paragraph>
            </StyledDiv>
            <StyledDiv>
              <Paragraph>Gå vidare till steg 3 när du är inloggad i Messenger.</Paragraph>
            </StyledDiv>
          </>
        )}
      </>
    )}
    {toggleAccount && toggleAccount === "haveaccount" && (
      <>
        <StyledDiv>
          <Header1>Logga in</Header1>
        </StyledDiv>
        {(os === "mac" || os === "pc") && (
          <>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>
                Gå till{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sv-se.facebook.com/"
                  onClick={() => trackEvent("LoginGoingToFacebook")}
                >
                  https://sv-se.facebook.com/
                </a>{" "}
                och logga in på ditt Facebook-konto.
              </Paragraph>
            </StyledDiv>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>
                Om du inte kommer ihåg dina inloggningsuppgifter så kan du trycka på “Glömt kontot” och därefter fylla i den e-post eller
                telefonnummer som är kopplat till ditt konto. Därefter skickas instruktioner för hur du kan återställa ditt lösenord
              </Paragraph>
            </StyledDiv>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>När du är inloggad kan du gå vidare till steg 2.</Paragraph>
            </StyledDiv>
          </>
        )}
        {(os === "ios" || os === "android") && (
          <>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>
                Om du har ett befintligt konto på Facebook så är det bara att logga in med det direkt i Messenger. Om du har prolem med att
                logga in så kan du trycka på “Glömt lösenordet?” för att få instruktioner om hur du kan återställa ditt lösenord.
              </Paragraph>
            </StyledDiv>
            <StyledDiv>
              <Paragraph>Gå vidare till steg 3 när du är inloggad i Messenger.</Paragraph>
            </StyledDiv>
          </>
        )}
      </>
    )}
  </>
)

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
                    <img srcSet={`${warningIcon}, ${warningIcon2x} 2x, ${warningIcon3x} 3x`} alt="Important" />
                  </div>
                  <Header1>Viktigt!</Header1>
                </div>
                <StyledDiv>
                  <Paragraph color={colors.gray.dark}>
                    För att Messenger ska fungera så krävs det att du har ett Facebook-konto. Om du föredrar att inte skapa ett
                    Facebook-konto så rekommenderar vi att du använder{" "}
                    {os === "ios" ||
                      (os === "mac" && (
                        <>
                          <a href={`/facetime#${os}`}>FaceTime</a> eller
                        </>
                      ))}{" "}
                    <a href={`/skype#${os}`}>Skype</a> istället.
                  </Paragraph>
                </StyledDiv>
              </Card>

              {(os === "mac" || os === "pc") && (
                <>
                  <div style={{ marginBottom: 16, marginTop: 16 }}>
                    <TitleWithNumberCircle number={1}>Logga in på Facebook</TitleWithNumberCircle>
                  </div>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Messenger är en tjänst skapad av Facebook och kräver därför att du har ett Facebook-konto för att använda det. Om du
                      inte har ett konto så kan du skapa ett nytt. Tryck på det alternativet som stämmer överens för dig så ges
                      instruktioner för hur du går vidare.
                    </Paragraph>
                  </StyledDiv>
                  <AccountToggler toggleAccount={toggleAccount} trackEvent={trackEvent} setToggleAccount={setToggleAccount} os={os} />

                  <div style={{ marginBottom: 16, marginTop: 16 }}>
                    <TitleWithNumberCircle number={2}>Hitta den du vill prata med</TitleWithNumberCircle>
                  </div>

                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      När du är inloggad på Facebook så kan du söka på facebook efter vänner och bekanta att prata med. Längst upp till
                      vänster hittar du sökfältet.
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <img
                      srcSet={`${searchFacebookMessenger}, ${searchFacebookMessenger2x} 2x, ${searchFacebookMessenger3x} 3x`}
                      width="350px"
                      height="92px"
                      alt="Search Messenger"
                    />
                  </StyledDiv>

                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Klicka i sökfältet och skriv in namnet på personen du vill kontakta, tryck sedan på enter. Nu dyker resultaten från
                      din sökning upp. Om du hittar personen du vill kontakta så trycker du på deras profilbild eller namn för att gå till
                      deras profil, annars är det bara att göra en ny sökning. Tryck därefter på Messenger-ikonen för att få fram ett
                      chattfönster med personen. Messenger-ikonen är ikonen som bilden nedan pekar på.
                    </Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    <img
                      srcSet={`${messengerProfile}, ${messengerProfile2x} 2x, ${messengerProfile3x} 3x`}
                      width="640px"
                      height="301px"
                      alt="Messenger Profile Screenshot"
                    />
                  </StyledDiv>

                  <div style={{ marginBottom: 16, marginTop: 16 }}>
                    <TitleWithNumberCircle number={3}>Chattfönstret</TitleWithNumberCircle>
                  </div>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Chattfönstret erbjuder ett antal olika alternativ för hur du kan kommunicera med personen. Nedan finns förklaringar
                      för de viktigaste funktionerna, men var inte rädd att testa på de andra knapparna.
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <img
                      srcSet={`${chatWindow}, ${chatWindow2x} 2x, ${chatWindow3x} 3x`}
                      width="360px"
                      height="487px"
                      alt="Messenger Chat Window"
                    />
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
                      <Paragraph color={colors.gray.dark}>Börja med att ladda ner Messenger- appen till din iPhone eller iPad.</Paragraph>
                    )}
                    {os === "android" && (
                      <Paragraph color={colors.gray.dark}>Börja med att ladda ner Messenger- appen till din Android.</Paragraph>
                    )}
                  </StyledDiv>

                  <DownloadButton href={downloadMessengerUrl} target="_blank" rel="noopener noreferrer">
                    <span>Ladda ner Messenger</span>
                    <img srcSet={`${downArrow}, ${downArrow2x} 2x, ${downArrow3x} 3x`} alt="Download Icon" />
                  </DownloadButton>

                  <div style={{ marginBottom: 16, marginTop: 16 }}>
                    <TitleWithNumberCircle number={2}>Logga in</TitleWithNumberCircle>
                  </div>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Messenger är skapat av Facebook och kräver därför att du har ett Facebook-konto för att använda tjänsten. Om du inte
                      har ett konto så kan du skapa ett nytt. Tryck på det alternativet som stämmer överens för dig så ges instruktioner för
                      hur du går vidare.
                    </Paragraph>
                  </StyledDiv>

                  <AccountToggler toggleAccount={toggleAccount} trackEvent={trackEvent} setToggleAccount={setToggleAccount} os={os} />

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
                      <img srcSet={`${iosSearchChat}, ${iosSearchChat2x} 2x, ${iosSearchChat3x} 3x`} alt="Search Chat" />
                    </StyledDiv>
                  )}
                  {os === "android" && (
                    <StyledDiv>
                      <img srcSet={`${androidSearchChat}, ${androidSearchChat2x} 2x, ${androidSearchChat3x} 3x`} alt="Search Chat" />
                    </StyledDiv>
                  )}
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Tryck i sökfältet och skriv in namnet på personen du vill kontakta. Om du hittar personen du vill kontakta så trycker
                      du på deras profilbild eller namn för att gå till deras profil, annars är det bara att göra en ny sökning.
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
                      <img srcSet={`${iosStartCall}, ${iosStartCall2x} 2x, ${iosStartCall3x} 3x`} alt="Start Call" />
                    </StyledDiv>
                  )}
                  {os === "android" && (
                    <StyledDiv>
                      <img srcSet={`${androidStartCall}, ${androidStartCall2x} 2x, ${androidStartCall3x} 3x`} alt="Start Call" />
                    </StyledDiv>
                  )}
                </>
              )}

              {beforeCallCards.map((card) => (
                <Card key={card.id}>
                  <div className="cardHeader">
                    <div style={{ marginRight: 16 }}>
                      <img
                        className={card.wide ? "wide" : ""}
                        srcSet={`${card.image}, ${card.image2x} 2x, ${card.image3x} 3x`}
                        alt={`Teams ${card.id} icon`}
                      />
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
                      <img srcSet={`${card.image}, ${card.image2x} 2x, ${card.image3x} 3x`} alt={`Teams ${card.id} icon`} />
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
