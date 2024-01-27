import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span className="empty-basket-message">votre commande est vide</span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-basket-message {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    font-weight: ${theme.weights.regular};
    font-family: "Amatic SC";
    text-transform: uppercase;
  }
`;
