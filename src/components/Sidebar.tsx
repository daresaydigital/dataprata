import * as React from "react"
import styled from "@emotion/styled"
import { useIntl, Link } from "gatsby-plugin-intl"

import { colors, widths } from "../styles/variables"
import { Header2, InvisibleLinkStyle } from "./typography"
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
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;

    display: flex;
    justify-content: center;
  }
`

const InnerWrapper = styled.div`
  @media (min-width: ${widths.md}px) {
    width: 656px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const ItemWrapper = styled.div`
  display: none;
  @media (min-width: ${widths.md}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 26px;
      height: 26px;
      border: 2px solid ${colors.yellow};
      border-radius: 100%;

      margin-right: 8px;
    }

    div > p {
      color: ${colors.white};
      font-size: 12px;
      line-height: 18px;
      font-weight: 600;
    }
  }
`

export const Sidebar: React.FC<SidebarProps> = ({ step1Complete, step2Complete, step3Complete, showSteps = true }) => {
  const intl = useIntl()
  return (
    <StyledDiv>
      <InnerWrapper>
        <div>
          <Logo width={147} height={56} />
          <Header2 color={colors.white}>{intl.formatMessage({ id: "hashtag" })}</Header2>
        </div>
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
      </InnerWrapper>
    </StyledDiv>
  )
}
