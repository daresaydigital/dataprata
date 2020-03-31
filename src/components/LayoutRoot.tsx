import * as React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import normalize from "../styles/normalize"
import { Footer } from "./Footer"

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
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
