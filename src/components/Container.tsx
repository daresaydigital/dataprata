import * as React from "react"
import styled from "@emotion/styled"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 32px;
  padding-left: 32px;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
