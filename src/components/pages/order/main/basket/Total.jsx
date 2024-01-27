import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Total({ amoutToPay }) {
  return (
    <TotalStyled>
      <span className="total-title">total</span>
      <span className="total-amount">{amoutToPay}</span>
    </TotalStyled>
  );
}

const TotalStyled = styled.div`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.P4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-weight: ${theme.weights.regular};
`;
