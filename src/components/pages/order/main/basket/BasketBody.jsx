import { theme } from "../../../../../theme";
import styled from "styled-components";
import EmptyBasket from "./EmptyBasket";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <EmptyBasket />
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2) inset;
`;
