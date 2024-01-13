import styled from "styled-components";
import { theme } from "../../theme/index";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>food</h1>
      <img src={"/logo.png"} alt="Burger Logo" />
      <h1>store</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(2.5);

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
  }
  h1 {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    word-wrap: break-word;
  }
`;
