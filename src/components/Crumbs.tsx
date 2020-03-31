import React, { useContext } from "react"
import styled from "@emotion/styled"
import { useIntl, Link } from "gatsby-plugin-intl"
import { colors, widths } from "../styles/variables"
import { CrumbsContext } from "../layouts"
import { InvisibleLinkStyle } from "./typography"

const Wrapper = styled.div`
  background-color: ${colors.yellow};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
`

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: ${widths.md}px) {
    width: 656px;
  }
`

export const Crumbs: React.FC = () => {
  const crumbs = useContext(CrumbsContext)
  const intl = useIntl()
  if (crumbs.length === 0) {
    return null
  }
  return (
    <Wrapper>
      <InnerWrapper>
        {crumbs.map((crumb, i) => {
          return (
            <Link to={crumb.target} css={InvisibleLinkStyle}>
              {` ${intl.formatMessage({ id: crumb.id })}${i < crumbs.length - 1 ? " /" : ""}`}
            </Link>
          )
        })}
      </InnerWrapper>
    </Wrapper>
  )
}
