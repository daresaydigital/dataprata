import * as React from "react"
import styled from "@emotion/styled"
import { useIntl, Link } from "gatsby-plugin-intl"

import { colors, widths } from "../styles/variables"
import { Header1, Header2, InvisibleLinkStyle } from "./typography"
import { Checkmark } from "../icons/svgs"
import { Logo } from "../icons/logos"

interface SidebarProps {
  step1Complete?: boolean
  step2Complete?: boolean
  step3Complete?: boolean
  showSteps?: boolean
}

const StyledDiv = styled.div`
  background: ${colors.black};
  padding: 16px;
  @media (min-width: ${widths.md}px) {
    padding: 32px;
    border-radius: 8px;
    min-width: 296px;
    min-height: calc(70vh);
  }
`

const ItemWrapper = styled.div`
  display: none;
  @media (min-width: ${widths.md}px) {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 26px;
      height: 26px;
      border: 2px solid ${colors.yellow};
      border-radius: 100%;

      margin-right: 16px;
    }

    div > p {
      color: ${colors.white};
      font-size: 12px;
      line-height: 18px;
      font-weight: 600;
    }
  }
`

const LogoWrapper = styled.div`
  margin-bottom: 10px;
  @media (min-width: ${widths.md}px) {
    margin-bottom: 48px;
  }
`

export const Sidebar: React.FC<SidebarProps> = ({ step1Complete, step2Complete, step3Complete, showSteps = true }) => {
  const intl = useIntl()
  return (
    <StyledDiv>
      <LogoWrapper>
        <Logo width={179} height={72} />
      </LogoWrapper>
      {showSteps && (
        <>
          <ItemWrapper>
            <div style={{ background: step1Complete ? colors.yellow : "none" }}>{step1Complete ? <Checkmark /> : <p>1</p>}</div>
            <Header2 color={colors.white}>
              <Link css={InvisibleLinkStyle} to="/">
                {intl.formatMessage({ id: "sidebar-step-1" })}
              </Link>
            </Header2>
          </ItemWrapper>

          <ItemWrapper>
            <div style={{ background: step2Complete ? colors.yellow : "none" }}>{step2Complete ? <Checkmark /> : <p>2</p>}</div>
            <Header2 color={colors.white}>
              <Link css={InvisibleLinkStyle} to="/device">
                {intl.formatMessage({ id: "sidebar-step-2" })}
              </Link>
            </Header2>
          </ItemWrapper>

          <ItemWrapper>
            <div style={{ background: step3Complete ? colors.yellow : "none" }}>{step3Complete ? <Checkmark /> : <p>3</p>}</div>
            <Header2 color={colors.white}>
              <Link css={InvisibleLinkStyle} to="/service">
                {intl.formatMessage({ id: "sidebar-step-3" })}
              </Link>
            </Header2>
          </ItemWrapper>
        </>
      )}
      <Header1 color={colors.white}>{intl.formatMessage({ id: "hashtag" })}</Header1>
    </StyledDiv>
  )
}
