import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <h1>victime de notre succès ?! :d </h1>
      <h2>de nouvelles recettes sont en cours de préparation</h2>
      <h2>à très vite</h2>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;

  h1 {
    font-weight: ${theme.weights.bold};
  }

  h2 {
    font-weight: ${theme.weights.regular};
  }

  h2,
  h1 {
    text-transform: uppercase;
    font-family: "Amatic SC", sans-serif;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P4};
  }
`;
