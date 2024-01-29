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
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2) inset;
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
