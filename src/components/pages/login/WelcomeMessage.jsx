import { theme } from "../../../theme/index";
import styled from "styled-components";

export default function WelcomeMessage() {
  return (
    <WelcomeMessageStyled>
      <h1>Bienvenue chez nous ! </h1>
      <hr />
      <h2>Connectez-vous</h2>
    </WelcomeMessageStyled>
  );
}

const WelcomeMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  text-align: center;
  h1 {
    font-size: ${theme.fonts.P6};
  }

  hr {
    width: 100%;
    height: 3px;
    background: ${theme.colors.primary};
    border: none;
  }

  h2 {
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    margin: 20px 0px 0;
  }
`;
