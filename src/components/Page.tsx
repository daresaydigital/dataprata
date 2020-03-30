import * as React from "react"
import styled from "@emotion/styled"

import { Nav } from "./nav"

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
`

interface PageProps {
  showCTA?: boolean
}

export const Page: React.FC<PageProps> = ({ children, showCTA = true }) => (
  <StyledPage>
    <Nav showCTA={showCTA} />
    {children}
  </StyledPage>
)
