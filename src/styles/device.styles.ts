import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, widths } from "./variables"

export const PrimaryLink = styled(Link)`
  align-self: stretch;
  padding: 32px;
  margin-bottom: 40px;

  background: rgba(255, 224, 0, 0.16);
  border: 3px solid ${colors.yellow};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    transform: translateY(-2px);
    background: rgba(255, 224, 0, 0);
  }

  &:focus {
    transition: all 0.2s ease;
    transform: translateY(-2px);
    background: rgba(255, 224, 0, 0);
  }

  .innerWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .row {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`

export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-bottom: 64px;
`

export const SecondaryLink = styled(Link)`
  display: flex;
  justify-content: center;

  text-decoration: none;
  background: ${colors.gray.light};
  border: 3px solid #eee;
  width: 100%;
  margin-bottom: 16px;
  padding: 32px;
  border-radius: 8px;

  transition: all 0.2s ease;

  @media (min-width: ${widths.md}px) {
    padding: 0;
    max-width: 210px;
    height: 240px;
  }

  &:hover {
    transform: translateY(-2px);
    border: 3px solid #ddd;
    transition: all 0.2s ease;
  }

  &:focus {
    transform: translateY(-2px);
    border: 3px solid #ddd;
    transition: all 0.2s ease;
  }

  .innerWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (min-width: ${widths.md}px) {
      flex-direction: column;
      justify-content: center;
    }

    .row {
      display: flex;
      align-items: center;
      flex-direction: row;
      @media (min-width: ${widths.md}px) {
        flex-direction: column;
        justify-content: center;
      }
    }

    .iconMargin {
      margin-right: 24px;
      margin-bottom: 0;
      @media (min-width: ${widths.md}px) {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }

    .arrow {
      display: block;
      @media (min-width: ${widths.md}px) {
        display: none;
      }
    }
  }
`
