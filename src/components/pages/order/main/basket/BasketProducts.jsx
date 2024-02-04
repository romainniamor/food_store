import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/orderContext";
import { findInArray } from "../../../../../utils/arrays";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findInArray(products, basketProduct.id);
          return (
            <CSSTransition
              classNames={"basketCards"}
              appear={true}
              key={menuProduct.id}
              timeout={{ enter: 500, exit: 500 }}
            >
              <BasketCard
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
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2) inset;
  height: calc(95vh - 140px - 100px);
  overflow-y: scroll;
  width: 100%;

  .basketCards-appear {
    transform: translateX(100px);
    opacity: 0.7;
  }

  .basketCards-appear-active {
    transform: translateX(0px);
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  .basketCards-enter {
    transform: translateX(100px);
    opacity: 0;
  }

  .basketCards-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  .basketCards-exit {
    transform: translateX(0);
    opacity: 1;
  }

  .basketCards-exit {
    transform: translateX(-100px);
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
`;
