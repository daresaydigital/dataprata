import React from "react"

import { css, Global } from "@emotion/core"
import styled from "@emotion/styled"

import { colors } from "../styles/variables"
import { Footer } from "./Footer"
import { Header } from "./Header"
import normalize from "../styles/normalize"

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
`

interface LayoutRootProps {
  className?: string
  showCTA: boolean
  trackEvent: (name: string) => void
}

export const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className, trackEvent, showCTA }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>
      <Header showCTA={showCTA} trackEvent={trackEvent} />
      {children}
    </StyledLayoutRoot>
    <Footer trackEvent={trackEvent} />
  </>
)
