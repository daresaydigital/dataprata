import { faFileContract, faHandsHelping } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import styled from "@emotion/styled"

import { colors } from "../styles/variables"
import { InvisibleLinkStyle } from "./typography"

const StyledFooter = styled.div`
  background-color: ${colors.black};
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
`

const Container = styled.div`
  color: ${colors.white};
  max-width: 800px;
  padding: 30px 0px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  flex-direction: row;
`

const Col = styled.div`
  flex: 1;
  align-self: top;
  min-width: 180px;
  max-width: 180px;
  margin: 20px;
`

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const LI = styled.li`
  font-size: 75%;
  margin-bottom: 10px;
`

const Strong = styled.strong`
  font-size: 110%;
`

export const Footer: React.FC = () => {
  const intl = useIntl()
  return (
    <StyledFooter>
      <Container>
        <Col>
          <UL>
            <LI>
              <Strong>{intl.formatMessage({ id: "footer-sponsors" })}</Strong>
            </LI>
            <LI>Gibon</LI>
          </UL>
        </Col>
        <Col>
          <UL>
            <LI>
              <Strong>{intl.formatMessage({ id: "footer-wantToKnowMore" })}</Strong>
            </LI>
            <LI>{intl.formatMessage({ id: "footer-aboutUs" })}</LI>
            <LI>{intl.formatMessage({ id: "footer-support" })}</LI>
          </UL>
        </Col>
        <Col>
          <UL>
            <LI>
              <a css={InvisibleLinkStyle} href="https://github.com/daresaydigital/dataprata/blob/master/LICENSE" target="blank">
                <FontAwesomeIcon icon={faFileContract} /> License
              </a>
            </LI>
            <LI>
              <a css={InvisibleLinkStyle} href="https://github.com/daresaydigital/dataprata/" target="blank">
                <FontAwesomeIcon icon={faGithub} /> Source
              </a>
            </LI>
            <LI>
              <a css={InvisibleLinkStyle} href="https://github.com/daresaydigital/dataprata/issues" target="blank">
                <FontAwesomeIcon icon={faHandsHelping} /> Contribute
              </a>
            </LI>
          </UL>
        </Col>
      </Container>
    </StyledFooter>
  )
}
