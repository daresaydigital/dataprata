import * as React from "react"
import styled from "@emotion/styled"
import { widths } from "../styles/variables"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  min-height: 100vh;
  @media (min-width: ${widths.md}px) {
    padding: 0;
    max-width: 656px;
    margin: 0 auto;
    margin-top: 128px;
  }
`

interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)
