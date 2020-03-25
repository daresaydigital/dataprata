import * as React from "react"
import styled from "@emotion/styled"

import { colors } from "../../styles/variables"

const DisplayText = styled.h1`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -4px;
  font-weight: 700;
  margin: 0;
`

const HeaderLrg = styled.h2`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  font-weight: 700;
  margin: 0;
`

const HeaderSm = styled.h3`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.2px;
  font-weight: 600;
  margin: 0;
`

const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
`

const StyledCaption = styled.p`
  font-size: 12px;
  line-height: 18px;
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
  text: string
}

export const Display: React.FC<TypographyProps> = ({ color, text }) => (
  <DisplayText style={{ color: color || colors.black }}>{text}</DisplayText>
)

export const Header1: React.FC<TypographyProps> = ({ color, text }) => (
  <HeaderLrg style={{ color: color || colors.black }}>{text}</HeaderLrg>
)

export const Header2: React.FC<TypographyProps> = ({ color, text }) => <HeaderSm style={{ color: color || colors.black }}>{text}</HeaderSm>

export const Paragraph: React.FC<TypographyProps> = ({ color, text }) => (
  <StyledParagraph style={{ color: color || colors.black }}>{text}</StyledParagraph>
)

export const Caption: React.FC<TypographyProps> = ({ color, text }) => (
  <StyledCaption style={{ color: color || colors.black }}>{text}</StyledCaption>
)

export const LogoText: React.FC<TypographyProps> = ({ color, text }) => (
  <StyledLogoText style={{ color: color || colors.black }}>{text}</StyledLogoText>
)
