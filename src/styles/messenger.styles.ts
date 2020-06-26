import styled from "@emotion/styled"
import { colors } from "./variables"

export const StyledDiv = styled.div`
  margin-bottom: 16px;
  .link {
    color: ${colors.black};
    letter-spacing: -0.2px;
  }
  img {
    max-width: 100%;
  }
`

export const ToggleWrapper = styled(StyledDiv)`
  width: 100%;
  padding: 16px 0;
`
