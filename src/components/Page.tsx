import * as React from "react"
import styled from "@emotion/styled"

import Sidebar from "./Sidebar"
import Footer from "./Footer"

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 0;
`

interface PageProps {
  step1Complete?: boolean
  step2Complete?: boolean
  step3Complete?: boolean
}

const Page: React.FC<PageProps> = ({ children, step1Complete, step2Complete, step3Complete }) => (
  <StyledPage>
    <Sidebar step1Complete={step1Complete} step2Complete={step2Complete} step3Complete={step3Complete} />
    {children}
    <Footer />
  </StyledPage>
)

export default Page
