import * as React from "react"
import styled from "@emotion/styled"

import { colors } from "../styles/variables"
import { LogoText, Header1, Header2 } from "./typography"

const StyledDiv = styled.div`
  width: 296px;
  background: ${colors.black};
  height: calc(100vh - 80px);
  border-radius: 8px;
  padding: 32px;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    color: ${colors.white};
  }
`

interface HeaderProps {
  title: string
}

const Sidebar: React.FC<HeaderProps> = ({ title }) => (
  <StyledDiv>
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginBottom: 6 }}>
        <LogoText style={colors.yellow} text="Ringmera.se" />
      </div>
      <Header1 text="#vitecherupp" style={colors.white} />
    </div>

    <ItemWrapper>
      <div>
        <p>1</p>
      </div>
      <Header2 style={colors.white} text="Introduktion" />
    </ItemWrapper>
  </StyledDiv>
)

export default Sidebar
