import * as React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import normalize from "../styles/normalize"
import { Footer } from "./Footer"
import { widths } from "../styles/variables"

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${widths.md}px) {
    min-height: 100vh;
    padding-bottom: 250px;
    margin-bottom: -250px;
  }
`

interface LayoutRootProps {
  className?: string
  trackEvent: (name: string) => void
}

export const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className, trackEvent }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    <Footer trackEvent={trackEvent} />
  </>
)
