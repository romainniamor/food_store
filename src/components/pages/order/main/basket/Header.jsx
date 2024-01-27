import styled from "styled-components";
import { theme } from "../../../../../theme/index";

export default function Header() {
  return (
    <HeaderStyled>
      <span>total</span>
      <span>0.00 €</span>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  height: 70px;
  width: 100%;
  background: ${theme.colors.background_dark};
  font-family: "Amatic SC";
  text-transform: uppercase;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.P4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-weight: ${theme.weights.regular};
`;
