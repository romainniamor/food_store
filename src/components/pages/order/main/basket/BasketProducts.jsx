import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";

export default function BasketProducts({ basket }) {
  //state

  //comportements

  //affichage
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <BasketCard {...basketProduct} key={basketProduct.id} />
      ))}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2) inset;
  height: calc(95vh - 140px - 100px);
  overflow-y: scroll;
  width: 100%;
`;
