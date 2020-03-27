import * as React from "react"
import styled from "@emotion/styled"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
`

interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)
