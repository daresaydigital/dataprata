/* eslint-disable import/no-default-export */
import { fonts, colors } from "./variables"

export default `
  html {
    box-sizing: border-box;
    font-feature-settings: "liga" 1, "calt" 1, "ss01" 1, "ss03" 1;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.black};
    background-color: ${colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
`
