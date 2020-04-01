import styled from "@emotion/styled"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFileContract, faHandsHelping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { GibonLogo } from "../icons/logos"
import { colors, widths } from "../styles/variables"
import { InvisibleLinkStyle } from "./typography"

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
    padding: 30px 0px 20px;
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
            <LI onClick={() => trackEvent("GibonClick")}>
              <GibonLogo />
            </LI>
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
              <a css={InvisibleLinkStyle} href="https://github.com/daresaydigital/dataprata/blob/master/LICENSE" target="blank">
                <IconContainer>
                  <FontAwesomeIcon icon={faFileContract} />
                </IconContainer>
                License
              </a>
            </LI>
            <LI onClick={() => trackEvent("GithubClick")}>
              <a css={InvisibleLinkStyle} href="https://github.com/daresaydigital/dataprata/" target="blank">
                <IconContainer>
                  <FontAwesomeIcon icon={faGithub} />
                </IconContainer>
                Source
              </a>
            </LI>
            <LI onClick={() => trackEvent("ContributeClick")}>
              <a css={InvisibleLinkStyle} href="https://github.com/daresaydigital/dataprata/issues" target="blank">
                <IconContainer>
                  <FontAwesomeIcon icon={faHandsHelping} />
                </IconContainer>
                Contribute
              </a>
            </LI>
          </UL>
        </Col>
      </Container>
    </StyledFooter>
  )
}
