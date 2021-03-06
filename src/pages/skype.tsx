import React, { FC } from "react"

import { useIntl } from "gatsby-plugin-intl"

import { colors } from "../styles/variables"
import { Container } from "../components/Container"
import { Crumb } from "../components/Crumbs"
import { deviceFromURIHash, useDeviceName } from "../components/hooks/device-probe"
import { Display, Paragraph, TitleWithNumberCircle, Header1 } from "../components/typography"
import { DownloadButton, Card } from "../components/styled-components"
import { IndexLayout, AnalyticsContext } from "../layouts"
import { StyledDiv } from "../styles/skype.styles"

import toggleVideoImg from "../content/skypePage/toggleVideo.png"
import toggleVideoImg2x from "../content/skypePage/toggleVideo@2x.png"
import toggleVideoImg3x from "../content/skypePage/toggleVideo@3x.png"

import toggleSoundImg from "../content/skypePage/toggleSound.png"
import toggleSoundImg2x from "../content/skypePage/toggleSound@2x.png"
import toggleSoundImg3x from "../content/skypePage/toggleSound@3x.png"

import cancelCallImg from "../content/skypePage/cancelCall.png"
import cancelCallImg2x from "../content/skypePage/cancelCall@2x.png"
import cancelCallImg3x from "../content/skypePage/cancelCall@3x.png"

import openChatImg from "../content/skypePage/openChat.png"
import openChatImg2x from "../content/skypePage/openChat@2x.png"
import openChatImg3x from "../content/skypePage/openChat@3x.png"

import macDownloadsImg from "../content/skypePage/downloadsScreenshot.png"
import macDownloadsImg2x from "../content/skypePage/downloadsScreenshot@2x.png"
import macDownloadsImg3x from "../content/skypePage/downloadsScreenshot@3x.png"

import pcDownloadsImg from "../content/skypePage/skypePcDownloads.png"
import pcDownloadsImg2x from "../content/skypePage/skypePcDownloads@2x.png"
import pcDownloadsImg3x from "../content/skypePage/skypePcDownloads@3x.png"

import installImg from "../content/skypePage/skypeInstallScreenshot.png"
import installImg2x from "../content/skypePage/skypeInstallScreenshot@2x.png"
import installImg3x from "../content/skypePage/skypeInstallScreenshot@3x.png"

import addContactsImg from "../content/skypePage/skypeAddContacts.png"
import addContactsImg2x from "../content/skypePage/skypeAddContacts@2x.png"
import addContactsImg3x from "../content/skypePage/skypeAddContacts@3x.png"

import newContactsImg from "../content/skypePage/skypeNewContact.png"
import newContactsImg2x from "../content/skypePage/skypeNewContact@2x.png"
import newContactsImg3x from "../content/skypePage/skypeNewContact@3x.png"

import makeACallImg from "../content/skypePage/skypeMakeACall.png"
import makeACallImg2x from "../content/skypePage/skypeMakeACall@2x.png"
import makeACallImg3x from "../content/skypePage/skypeMakeACall@3x.png"

import iosAddContacts from "../content/skypePage/iosAddContacts.png"
import iosAddContacts2x from "../content/skypePage/iosAddContacts@2x.png"
import iosAddContacts3x from "../content/skypePage/iosAddContacts@3x.png"

import androidAddContacts from "../content/skypePage/androidAddContacts.png"
import androidAddContacts2x from "../content/skypePage/androidAddContacts@2x.png"
import androidAddContacts3x from "../content/skypePage/androidAddContacts@3x.png"

import iosStartVideoCall from "../content/skypePage/iosStartVideoCall.png"
import iosStartVideoCall2x from "../content/skypePage/iosStartVideoCall@2x.png"
import iosStartVideoCall3x from "../content/skypePage/iosStartVideoCall@3x.png"

import androidMakeVideoCall from "../content/skypePage/androidMakeVideoCall.png"
import androidMakeVideoCall2x from "../content/skypePage/androidMakeVideoCall@2x.png"
import androidMakeVideoCall3x from "../content/skypePage/androidMakeVideoCall@3x.png"

import downArrow from "../content/messengerPage/down.png"

const cards = [
  { id: "toggleVideo", image: toggleVideoImg, image2x: toggleVideoImg2x, image3x: toggleVideoImg3x },
  { id: "toggleSound", image: toggleSoundImg, image2x: toggleSoundImg2x, image3x: toggleSoundImg3x },
  { id: "cancelCall", image: cancelCallImg, image2x: cancelCallImg2x, image3x: cancelCallImg3x },
  { id: "openChat", image: openChatImg, image2x: openChatImg2x, image3x: openChatImg3x },
]

const SkypePage: FC = () => {
  const intl = useIntl()
  const deviceInfo = deviceFromURIHash()
  const deviceTitle = useDeviceName(deviceInfo)

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
      target: `/service/#${deviceInfo.os}`,
    },
    {
      id: "skypePageCrumb",
      target: `/skype/#${deviceInfo.os}`,
    },
  ]

  return (
    <IndexLayout pageTitleID="skypepageTitle" showCTA={false} crumbs={crumbs}>
      <Container>
        <AnalyticsContext.Consumer>
          {({ trackEvent }) => (
            <>
              <div style={{ marginBottom: 24 }}>
                <Display>
                  {intl.formatMessage({ id: "skypepageTitle" })} {deviceTitle}
                </Display>
              </div>
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph1" })}</Paragraph>
              </StyledDiv>

              <StyledDiv>
                <TitleWithNumberCircle number={1}>{intl.formatMessage({ id: "skypepageInstall" })}</TitleWithNumberCircle>
              </StyledDiv>

              {deviceInfo.os === "ios" && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>Börja med att ladda ner Skype appen till din iPhone eller iPad.</Paragraph>
                  </StyledDiv>
                  <DownloadButton
                    href="https://itunes.apple.com/app/apple-store/id304878510?pt=30244&ct=scom&mt=8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Ladda ner Skype</span>
                    <img src={downArrow} alt="Download Icon" />
                  </DownloadButton>
                </>
              )}

              {deviceInfo.os === "android" && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>Börja med att ladda ner Skype appen till din Android.</Paragraph>
                  </StyledDiv>
                  <DownloadButton href="https://go.skype.com/skype.download.android" target="_blank" rel="noopener noreferrer">
                    <span>Ladda ner Skype</span>
                    <img src={downArrow} alt="Download Icon" />
                  </DownloadButton>
                </>
              )}

              {deviceInfo.os === "mac" && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      {intl.formatMessage({ id: "skypepageParagraph2Part1" })}{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={intl.formatMessage({ id: "skypeMacDownloadLinkUrl" })}
                        onClick={() => trackEvent(`DowloadSkypeForMac`)}
                      >
                        {intl.formatMessage({ id: "skypeDownloadLinkText" })}
                      </a>{" "}
                      {intl.formatMessage({ id: "skypepageParagraph2Part2" })}
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph3" })}</Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    <img
                      srcSet={`${macDownloadsImg}, ${macDownloadsImg2x} 2x, ${macDownloadsImg3x} 3x`}
                      width="640px"
                      height="217px"
                      alt="Screenshot of Downloads folder"
                    />
                  </StyledDiv>

                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph4" })}</Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph5" })}</Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    <img
                      srcSet={`${installImg}, ${installImg2x} 2x, ${installImg3x} 3x`}
                      width="640px"
                      height="333px"
                      alt="Screenshot of Skype install"
                    />
                  </StyledDiv>
                </>
              )}

              {deviceInfo.os === "windows" && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      {intl.formatMessage({ id: "skypepageParagraph2Part1" })}{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={intl.formatMessage({ id: "skypePcDownloadLinkUrl" })}
                        onClick={() => trackEvent(`DowloadSkypeForPc`)}
                      >
                        {intl.formatMessage({ id: "skypeDownloadLinkText" })}
                      </a>{" "}
                      {intl.formatMessage({ id: "skypepageParagraph2Part2" })}
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraphPcDownloadDone" })}</Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    <img
                      srcSet={`${pcDownloadsImg}, ${pcDownloadsImg2x} 2x, ${pcDownloadsImg3x} 3x`}
                      alt="Screenshot of Downloads folder"
                    />
                  </StyledDiv>

                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraphPcDownloadDone2" })}</Paragraph>
                  </StyledDiv>
                </>
              )}

              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={2}>{intl.formatMessage({ id: "skypepageCreateAccount" })}</TitleWithNumberCircle>
              </div>

              {(deviceInfo.os === "mac" || deviceInfo.os === "windows") && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph6" })}</Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph6b" })}</Paragraph>
                  </StyledDiv>
                </>
              )}

              {(deviceInfo.os === "ios" || deviceInfo.os === "android") && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Om du inte har ett konto, öppna Skype och skapa ett konto med antingen ditt telefonnummer eller din mailadress
                    </Paragraph>
                  </StyledDiv>
                </>
              )}

              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={3}>{intl.formatMessage({ id: "skypepageAddContacts" })}</TitleWithNumberCircle>
              </div>

              {(deviceInfo.os === "mac" || deviceInfo.os === "windows") && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph7" })}</Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    <img srcSet={`${addContactsImg}, ${addContactsImg2x} 2x, ${addContactsImg3x} 3x`} alt="Screenshot of adding contacts" />
                  </StyledDiv>

                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph8" })}</Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    <img srcSet={`${newContactsImg}, ${newContactsImg2x} 2x, ${newContactsImg3x} 3x`} alt="Screenshot of adding contacts" />
                  </StyledDiv>
                </>
              )}

              {(deviceInfo.os === "ios" || deviceInfo.os === "android") && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      För att lägga till kontakter, klicka på “Kontakter”-ikonen längst ner till höger för att komma till dina kontakter.
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Klicka sedan på Ikonen nere i högra hörnet och sök efter den du vill ringa antingen via personens Skype namn,
                      mailadress eller telefonnummer.
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    {deviceInfo.os === "ios" && (
                      <img
                        srcSet={`${iosAddContacts}, ${iosAddContacts2x} 2x, ${iosAddContacts3x} 3x`}
                        width="257px"
                        height="460px"
                        alt="Screenshot of adding contacts"
                      />
                    )}
                    {deviceInfo.os === "android" && (
                      <img
                        srcSet={`${androidAddContacts}, ${androidAddContacts2x} 2x, ${androidAddContacts3x} 3x`}
                        alt="Screenshot of adding contacts"
                      />
                    )}
                  </StyledDiv>
                </>
              )}

              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={4}>{intl.formatMessage({ id: "skypepageMakeAVideoCall" })}</TitleWithNumberCircle>
              </div>

              {(deviceInfo.os === "mac" || deviceInfo.os === "windows") && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph9" })}</Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    <img srcSet={`${makeACallImg}, ${makeACallImg2x} 2x, ${makeACallImg3x} 3x`} alt="Screenshot of making a call" />
                  </StyledDiv>
                </>
              )}

              {(deviceInfo.os === "ios" || deviceInfo.os === "android") && (
                <>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Från kontakter, välj den du vill ta kontakt med och klicka på personens namn.
                    </Paragraph>
                  </StyledDiv>
                  <StyledDiv>
                    <Paragraph color={colors.gray.dark}>
                      Efter du klickat på den du vill videochatta med, tryck på videokameran uppe i högra hörnet för att starta samtalet.
                    </Paragraph>
                  </StyledDiv>

                  <StyledDiv>
                    {deviceInfo.os === "ios" && (
                      <img
                        srcSet={`${iosStartVideoCall}, ${iosStartVideoCall2x} 2x, ${iosStartVideoCall3x} 3x`}
                        width="257px"
                        height="457px"
                        alt="Screenshot of making a call"
                      />
                    )}
                    {deviceInfo.os === "android" && (
                      <img
                        srcSet={`${androidMakeVideoCall}, ${androidMakeVideoCall2x} 2x, ${androidMakeVideoCall3x} 3x`}
                        alt="Screenshot of making a call"
                      />
                    )}
                  </StyledDiv>
                </>
              )}

              <div style={{ marginBottom: 16, marginTop: 16 }}>
                <TitleWithNumberCircle number={5}>{intl.formatMessage({ id: "skypeDuringTheCall" })}</TitleWithNumberCircle>
              </div>
              <StyledDiv>
                <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "skypepageParagraph10" })}</Paragraph>
              </StyledDiv>

              {cards.map((card) => {
                if ((deviceInfo.os === "ios" || deviceInfo.os === "android") && card.id === "openChat") {
                  return null
                }
                return (
                  <Card key={card.id}>
                    <div className="cardHeader">
                      <div style={{ marginRight: 16 }}>
                        <img srcSet={`${card.image}, ${card.image2x} 2x, ${card.image3x} 3x`} alt={`Skype ${card.id} icon`} />
                      </div>
                      <Header1>{intl.formatMessage({ id: `skype${card.id}Title` })}</Header1>
                    </div>
                    <StyledDiv>
                      <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: `skype${card.id}Info` })}</Paragraph>
                    </StyledDiv>
                  </Card>
                )
              })}
            </>
          )}
        </AnalyticsContext.Consumer>
      </Container>
    </IndexLayout>
  )
}

export default SkypePage
