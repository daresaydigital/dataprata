import * as React from "react"
import styled from "@emotion/styled"

import { css } from "@emotion/core"
import { colors, widths } from "../../styles/variables"

const DisplayText = styled.h1`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -2px;
  font-weight: 700;
  margin: 0;
  @media (min-width: ${widths.md}px) {
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -3px;
  }
`

const HeaderLrg = styled.h2`
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.3px;
  font-weight: 700;
  margin: 0;
  @media (min-width: ${widths.md}px) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.5px;
  }
`

const HeaderSm = styled.h3`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.2px;
  font-weight: 600;
  margin: 0;
  @media (min-width: ${widths.md}px) {
    font-size: 18px;
    line-height: 24px;
  }
`

const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 150%;
  font-weight: 400;
  margin: 0;
`

const StyledCaption = styled.p`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  margin: 0;
`

const StyledLogoText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -1px;
  margin: 0;
`

interface TypographyProps {
  color?: string
}

export const Display: React.FC<TypographyProps> = ({ color = colors.black, children }) => (
  <DisplayText style={{ color }}>{children}</DisplayText>
)

export const Header1: React.FC<TypographyProps> = ({ color = colors.black, children }) => (
  <HeaderLrg style={{ color }}>{children}</HeaderLrg>
)

export const Header2: React.FC<TypographyProps> = ({ color = colors.black, children }) => <HeaderSm style={{ color }}>{children}</HeaderSm>

export const Paragraph: React.FC<TypographyProps> = ({ color = colors.black, children }) => (
  <StyledParagraph style={{ color }}>{children}</StyledParagraph>
)

export const Caption: React.FC<TypographyProps> = ({ color = colors.black, children }) => (
  <StyledCaption style={{ color }}>{children}</StyledCaption>
)

export const LogoText: React.FC<TypographyProps> = ({ color = colors.black, children }) => (
  <StyledLogoText style={{ color }}>{children}</StyledLogoText>
)

export const InvisibleLinkStyle = css`
  text-decoration: none;
  color: inherit;
`
