import styled from "@emotion/styled"
import { colors } from "./variables"

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  background: ${colors.gray.light};
  border: 3px solid #eee;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;

  .serviceHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  }

  .actionWrapper {
    display: flex;
    flex-direction: column;
  }

  .link {
    text-decoration: none;

    color: ${colors.black};
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.2px;
    font-weight: 600;
  }

  .link.disabled {
    color: #ccc;
  }

  img {
    width: 40px;
    height: 40px;
  }
`
