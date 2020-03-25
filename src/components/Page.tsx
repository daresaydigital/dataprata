import * as React from "react"
import styled from "@emotion/styled"

import Sidebar from "./Sidebar"

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 0;
`

// const SidebarWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>
    <Sidebar />

    {children}
  </StyledPage>
)

export default Page
