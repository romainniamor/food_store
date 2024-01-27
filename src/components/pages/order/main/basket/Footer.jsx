import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Footer() {
  return <FooterStyled>Codé avec ❤️ et React.JS</FooterStyled>;
}

const FooterStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.P2};
  font-weight: ${theme.weights.bold};
  color: ${theme.colors.white};
`;
