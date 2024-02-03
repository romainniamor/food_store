import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <span>victime de notre succès ?! :d </span>
      <span>de nouvelles recettes sont en cours de préparation</span>
      <span>à très vite</span>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  font-weight: ${theme.weights.regular};
  text-transform: uppercase;
  font-family: "Amatic SC", sans-serif;
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.P4};

  span:nth-child(1) {
    font-weight: ${theme.weights.bold};
  }
`;
