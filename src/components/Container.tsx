import * as React from "react"
import styled from "@emotion/styled"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 32px;
  padding-left: 32px;
  /* In order to position container content correctly from fixed sidebar */
  margin-left: 296px;
`

interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)
