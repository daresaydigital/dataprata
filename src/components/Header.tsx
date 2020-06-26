import * as React from "react"

import { Link, useIntl } from "gatsby-plugin-intl"
import styled from "@emotion/styled"

import { colors, widths } from "../styles/variables"
import { Crumbs } from "./Crumbs"
import { InvisibleLinkStyle, Paragraph } from "./typography"
import { LogoSmall } from "../icons/logos"

interface Props {
  showCTA?: boolean
  trackEvent: (name: string) => void
}

const Wrapper = styled.div`
  width: 100%;
  z-index: 999;
  @media (min-width: ${widths.md}px) {
    position: fixed;
    left: 0;
    top: 0;
  }
`

const StyledDiv = styled.div`
  background: ${colors.black};
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${widths.md}px) {
    width: 656px;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ItemWrapper = styled.div`
  display: none;
  @media (min-width: ${widths.md}px) {
    display: flex;
    margin-left: 24px;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StyledButton = styled(Link)`
  padding: 8px 12px;
  background: ${colors.yellow};
  color: ${colors.black};
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
`

export const Header: React.FC<Props> = ({ showCTA = true, trackEvent }) => {
  const intl = useIntl()
  return (
    <Wrapper>
      <StyledDiv>
        <InnerWrapper>
          <LogoWrapper onClick={() => trackEvent("LogoClick")}>
            <div style={{ marginRight: 16, marginTop: 8 }}>
              <Link css={InvisibleLinkStyle} to="/">
                <LogoSmall />
              </Link>
            </div>
          </LogoWrapper>

          <LinkWrapper>
            <ItemWrapper>
              <Paragraph color={colors.white}>
                <Link css={InvisibleLinkStyle} to="/about" onClick={() => trackEvent("AboutUsClick")}>
                  {intl.formatMessage({ id: "footer-aboutUs" })}
                </Link>
              </Paragraph>
            </ItemWrapper>
            {showCTA && (
              <div style={{ marginLeft: 24 }}>
                <StyledButton to="/device" color={colors.white} onClick={() => trackEvent("GetStartedClick")}>
                  {intl.formatMessage({ id: "homepageCTA" })}
                </StyledButton>
              </div>
            )}
          </LinkWrapper>
        </InnerWrapper>
      </StyledDiv>
      <Crumbs />
    </Wrapper>
  )
}
