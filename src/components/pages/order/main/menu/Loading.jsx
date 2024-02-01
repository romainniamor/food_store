import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Loading() {
  return (
    <LoadingStyled>
      <span>chargement en cours ...</span>
    </LoadingStyled>
  );
}

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.P4};
  font-weight: ${theme.weights.regular};
`;
