import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/orderContext";
import { findInArray } from "../../../../../utils/arrays";

export default function BasketProducts({ basket }) {
  const {
    userName,
    handleDeleteFromBasket,
    isModeAdmin,
    products,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);
  //state

  //comportements

  const handleDeleteButton = (id, e) => {
    e.stopPropagation();
    handleDeleteFromBasket(id, userName);
  };

  const handleClick = (id) => {
    if (!isModeAdmin) {
      return;
    }
    handleProductSelected(id);
  };

  const checkIfProductIsClick = (idProductBasket, idProductClickOn) => {
    if (!isModeAdmin) return false;
    return idProductBasket === idProductClickOn;
  };

  //affichage
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findInArray(products, basketProduct.id);
        return (
          <BasketCard
            key={menuProduct.id}
            title={menuProduct.title}
            imageSource={menuProduct.imageSource}
            quantity={basketProduct.quantity}
            price={menuProduct.price}
            onDelete={(e) => handleDeleteButton(menuProduct.id, e)}
            isClickable={isModeAdmin}
            isSelected={checkIfProductIsClick(
              basketProduct.id,
              productSelected.id
            )}
            onClick={() => handleClick(menuProduct.id)}
          />
        );
      })}
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
