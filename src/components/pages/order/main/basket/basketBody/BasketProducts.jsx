import styled from "styled-components";
import { theme } from "../../../../../../theme";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../../contexts/orderContext";
import { findInArray } from "../../../../../../utils/arrays";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketCardsAnimation } from "../../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../../utils/string";
import { formatPrice } from "../../../../../../utils/math";
import { BASKET_MESSAGE } from "../../../../../../enums/product";
import Sticker from "../../../../../reusableUi/Sticker";

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
              timeout={{ enter: 300, exit: 300 }}
            >
              <div className="card-container">
                {" "}
                {convertStringToBoolean(menuProduct.isAdvertised) && (
                  <Sticker label={"new"} className={"sticker"} />
                )}
                <BasketCard
                  title={menuProduct.title}
                  imageSource={menuProduct.imageSource}
                  quantity={
                    convertStringToBoolean(menuProduct.isAvailable)
                      ? basketProduct.quantity
                      : ""
                  }
                  price={
                    convertStringToBoolean(menuProduct.isAvailable)
                      ? formatPrice(menuProduct.price)
                      : BASKET_MESSAGE.NOT_AVAILABLE
                  }
                  onDelete={(e) => handleDeleteButton(menuProduct.id, e)}
                  isClickable={isModeAdmin}
                  isSelected={checkIfProductIsClick(
                    basketProduct.id,
                    productSelected.id
                  )}
                  onClick={() => handleClick(menuProduct.id)}
                  isAvailable={
                    convertStringToBoolean(menuProduct.isAvailable) === true
                  }
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.span`
  background: ${theme.colors.background_white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2) inset;
  height: calc(95vh - 140px - 100px);
  overflow-y: scroll;
  width: 100%;

  .card-container {
    position: relative;

    .sticker {
      position: absolute;
      z-index: 2;
      bottom: 10%;
      left: 25%;
    }
  }

  ${basketCardsAnimation}
`;
