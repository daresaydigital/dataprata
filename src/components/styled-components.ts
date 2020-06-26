import styled from "@emotion/styled"
import { colors, widths } from "../styles/variables"

export const DownloadButton = styled.a`
  text-align: left;
  width: 100%;
  background: #ffe000;
  border-radius: 4px;
  padding: 16px;
  color: ${colors.black};
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  margin: 16px 0;
  img {
    align-self: flex-end;
    width: 18px;
    height: 18px;
  }
  span {
    flex: 1;
  }

  &:hover {
    background: #e0c500;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  background: ${colors.gray.light};
  border: 3px solid #eee;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;

  .cardHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  img.wide {
    width: 128px;
    height: 40px;
  }

  .link {
    color: ${colors.black};
    letter-spacing: -0.2px;
    word-break: break-word;
  }
`

export const ToggleButton = styled.a`
  text-align: left;
  background: #f2f2f2;
  border-radius: 4px;
  padding: 16px;
  color: ${colors.black};
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 8px 8px 0;
  width: 100%;
  float: left;

  &.active {
    background: #515151;
    color: #fff;
  }

  @media (min-width: ${widths.md}px) {
    width: auto;
  }
`
