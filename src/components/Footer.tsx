import React from "react"

import { faFileContract, faHandsHelping } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import styled from "@emotion/styled"

import { colors, widths } from "../styles/variables"
import { InvisibleLinkStyle, Header2 } from "./typography"
import { GibonLogo } from "../icons/logos"

const StyledFooter = styled.div`
  background-color: ${colors.black};
  min-height: 250px;
  width: 100%;
`

const Container = styled.div`
  color: ${colors.gray.light};
  max-width: 900px;
  padding: 15px 0px 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  flex-direction: row;
  a {
    color: ${colors.gray.light};
  }

  @media (min-width: ${widths.md}px) {
    padding: 20px 0px 20px;
  }
`

const Col = styled.div`
  flex: 1;
  align-self: top;
  min-width: 128px;
  max-width: 150px;
  margin: 15px;

  @media (min-width: ${widths.md}px) {
    margin: 20px;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 88px;
`

const InnerRowContainer = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${colors.gray.dark};

  padding: 32px;
  border-radius: 8px;

  text-align: center;

  @media (min-width: ${widths.md}px) {
    width: 656px;
  }
`

const StyledLink = styled.a`
  justify-content: center;
  padding: 24px;
  background: ${colors.yellow};
  text-decoration: none;
  border-radius: 4px;

  font-weight: 600;
  color: ${colors.black} !important;

  margin-top: 24px;
`

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const LI = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`

const Strong = styled.strong`
  font-size: 18px;
  font-size: 110%;
  font-weight: normal;
`

const IconContainer = styled.span`
  width: 32px;
  display: inline-block;
  text-align: right;
  padding-right: 5px;
`

const TelLink = styled.span`
  margin-top: 16px;
`

interface Props {
  trackEvent: (name: string) => void
}
export const Footer: React.FC<Props> = ({ trackEvent }) => {
  const intl = useIntl()
  return (
    <StyledFooter>
      <Container>
        <Col>
          <UL>
            <LI>
              <Strong>{intl.formatMessage({ id: "footer-sponsors" })}</Strong>
            </LI>
            <Link onClick={() => trackEvent("GibonClick")} rel="noopener noreferrer" target="_blank" to="https://gibon.se">
              <LI>
                <GibonLogo />
              </LI>
            </Link>
          </UL>
        </Col>
        <Col>
          <UL>
            <LI>
              <Strong>{intl.formatMessage({ id: "footer-wantToKnowMore" })}</Strong>
            </LI>
            <LI onClick={() => trackEvent("AboutUsClick")}>
              <Link to="/about">{intl.formatMessage({ id: "footer-aboutUs" })}</Link>
            </LI>
          </UL>
        </Col>
        <Col>
          <UL>
            <LI onClick={() => trackEvent("LicenseClick")}>
              <Link css={InvisibleLinkStyle} to="https://github.com/daresaydigital/dataprata/blob/master/LICENSE" target="blank">
                <IconContainer>
                  <FontAwesomeIcon icon={faFileContract} />
                </IconContainer>
                License
              </Link>
            </LI>
            <LI onClick={() => trackEvent("GithubClick")}>
              <Link css={InvisibleLinkStyle} to="https://github.com/daresaydigital/dataprata/" target="blank">
                <IconContainer>
                  <FontAwesomeIcon icon={faGithub} />
                </IconContainer>
                Source
              </Link>
            </LI>
            <LI onClick={() => trackEvent("ContributeClick")}>
              <Link css={InvisibleLinkStyle} to="https://github.com/daresaydigital/dataprata/issues" target="blank">
                <IconContainer>
                  <FontAwesomeIcon icon={faHandsHelping} />
                </IconContainer>
                Contribute
              </Link>
            </LI>
          </UL>
        </Col>
      </Container>
      <Container>
        <Row>
          <InnerRowContainer>
            <Header2 color={colors.white}>Vill ditt företag eller organisation hjälpa till?</Header2>
            <StyledLink href="mailto:david.furendal@daresay.co?subject=Dataprata%20partner">Bli Dataprata partner nu!</StyledLink>
            <TelLink>
              Eller ring: <a href="tel:+46761344367">076 134 43 67</a>
            </TelLink>
          </InnerRowContainer>
        </Row>
      </Container>
    </StyledFooter>
  )
}
