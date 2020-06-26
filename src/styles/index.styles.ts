import styled from "@emotion/styled"
import { Link } from "gatsby-plugin-intl"

import { colors, widths } from "./variables"

export const StyledLink = styled(Link)`
  padding: 24px;
  background: ${colors.yellow};
  text-decoration: none;
  border-radius: 4px;
`

export const ContactCard = styled.div`
  margin-top: 40px;
  padding: 32px;
  background-color: #ffd000;
  background-image: linear-gradient(-90deg, #fff543, #ffd000);

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  @media (min-width: ${widths.md}px) {
    flex-direction: row;
  }

  .leftCol {
    text-align: center;
    @media (min-width: ${widths.md}px) {
      min-width: 380px;
      text-align: left;
    }
  }

  .rightCol {
    margin-top: 32px;
    @media (min-width: ${widths.md}px) {
      margin-top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`
