import React from "react"
import styled from "@emotion/styled"
import { colors } from "../styles/variables"

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
  return (
    <StyledFooter>
      <Container>
        <Col>
          <UL>
            <LI>
              <Strong>Ett initiativ av</Strong>
            </LI>
            <LI>Gibon</LI>
          </UL>
        </Col>
        <Col>
          <UL>
            <LI>
              <Strong>Vill du veta mer?</Strong>
            </LI>
            <LI>Om oss</LI>
            <LI>Support</LI>
          </UL>
        </Col>
        <Col>
          <UL>
            <LI>License</LI>
            <LI>GitHub</LI>
            <LI>Contribute</LI>
          </UL>
        </Col>
      </Container>
    </StyledFooter>
  )
}
