import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Footer() {
  return (
    <FooterStyled>
      <span>Codé avec ❤️ et React.JS</span>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  height: 70px;
  width: 100%;
  background: ${theme.colors.background_dark};
  font-family: "Amatic SC";
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.P2};
  font-weight: ${theme.weights.bold};
  color: ${theme.colors.white};
`;
