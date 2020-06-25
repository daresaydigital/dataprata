import styled from "@emotion/styled"
import { colors, widths } from "./variables"

export const TipCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  background: rgba(255, 224, 0, 0.16);
  border: 3px solid ${colors.yellow};
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

  .link {
    color: ${colors.black};
    letter-spacing: -0.2px;
    word-break: break-word;
  }

  .inputWrapper {
    margin-top: 24px;

    @media (min-width: ${widths.md}px) {
      width: 256px;
    }
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    max-width: 420px;
    padding: 12px;
    border: 0;
    border-radius: 6px;
    border: 1px solid ${colors.yellow};
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .btn {
    display: flex;
    justify-content: center;

    background: ${colors.yellow};
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);

    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: ${colors.black};

    margin-top: 24px;
    padding: 16px;
    text-decoration: none;
    border-radius: 4px;
  }

  .btn:focus {
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.8);
  }
`

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
