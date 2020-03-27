import * as React from "react"
import styled from "@emotion/styled"

import { Sidebar } from "./Sidebar"

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 0;
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
