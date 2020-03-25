import * as React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import normalize from "../styles/normalize"
import { Footer } from "./Footer"

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 100px;
  margin-bottom: -100px;
`

interface LayoutRootProps {
  className?: string
}

export const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    <Footer />
  </>
)
