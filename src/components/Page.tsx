import * as React from "react"
import styled from "@emotion/styled"

import { Sidebar } from "./Sidebar"
import { widths } from "../styles/variables"

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: ${widths.md}px) {
    padding-top: 125px;
  }
`

interface PageProps {
  step1Complete?: boolean
  step2Complete?: boolean
  step3Complete?: boolean
  showSidebarSteps?: boolean
}

export const Page: React.FC<PageProps> = ({ children, step1Complete, step2Complete, step3Complete, showSidebarSteps = true }) => (
  <StyledPage>
    <Sidebar step1Complete={step1Complete} step2Complete={step2Complete} step3Complete={step3Complete} showSteps={showSidebarSteps} />
    {children}
  </StyledPage>
)
