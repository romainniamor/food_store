import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/orderContext";

export default function BasketProducts({ basket }) {
  const { handleDeleteFromBasket, isModeAdmin } = useContext(OrderContext);
  //state

  //comportements

  const handleDeleteButton = (id) => {
    handleDeleteFromBasket(id);
  };

  //affichage
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <BasketCard
          {...basketProduct}
          key={basketProduct.id}
          onDelete={() => handleDeleteButton(basketProduct.id)}
          isModeAdmin={isModeAdmin}
          isSelected={true}
        />
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
