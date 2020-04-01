import React, { useContext } from "react"
import styled from "@emotion/styled"
import { useIntl, Link } from "gatsby-plugin-intl"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { colors, widths } from "../styles/variables"

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
  @media (min-width: ${widths.md}px) {
    width: 656px;
  }
`

const CrumbSpacer = styled.span`
  margin: 0 16px;
`

const Back = styled.span`
  margin: 0 16px;
  display: inline;
  @media (min-width: ${widths.md}px) {
    display: none;
  }
`

const prevStyle = css`
  display: none;
  text-decoration: none;
  color: ${colors.gray.dark};
  @media (min-width: ${widths.md}px) {
    display: block;
  }
`
const lastStyle = css`
  text-decoration: none;
  color: ${colors.gray.dark};
  &:visited {
    color: ${colors.gray.dark};
  }
  @media (min-width: ${widths.md}px) {
    font-weight: 700;
    color: ${colors.black};
    &:visited {
      color: ${colors.black};
    }
  }
`

export interface Crumb {
  id: string
  target: string
}

export const CrumbsContext = React.createContext<Crumb[]>([])

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
          const last = i === crumbs.length - 1
          return (
            <React.Fragment key={crumb.id}>
              {last && (
                <Link to={crumbs[i - 1].target} css={last ? lastStyle : prevStyle}>
                  <Back>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Back>
                </Link>
              )}
              <Link to={crumb.target} css={last ? lastStyle : prevStyle}>
                {intl.formatMessage({ id: crumb.id })}
                {!last && <CrumbSpacer>/</CrumbSpacer>}
              </Link>
            </React.Fragment>
          )
        })}
      </InnerWrapper>
    </Wrapper>
  )
}
