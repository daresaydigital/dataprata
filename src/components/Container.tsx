import * as React from "react"
import styled from "@emotion/styled"
import { widths } from "../styles/variables"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  @media (min-width: ${widths.md}px) {
    padding: 32px;
    max-width: 656px;
    margin: 0 auto;
  }
`

interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)
