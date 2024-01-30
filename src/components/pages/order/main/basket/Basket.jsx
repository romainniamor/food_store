import styled from "styled-components";
import Footer from "./Footer";
import Banner from "./Banner";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/math";

import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

import { useContext } from "react";
import orderContext from "../../../../../contexts/orderContext";

export default function Basket() {
  //state

  const { basket } = useContext(orderContext);

  //comportements

  const sumToPay = () => {
    return basket.reduce((total, product) => {
      //@todo => check formatPrice in utils in order to avoid manage error case here
      if (isNaN(product.price)) return total;
      return total + product.price * product.quantity;
    }, 0);
  };

  //render
  return (
    <BasketStyled>
      <Banner>
        <Total amoutToPay={formatPrice(sumToPay())} />
      </Banner>
      {basket.length ? <BasketProducts basket={basket} /> : <EmptyBasket />}
      <Banner>
        <Footer />
      </Banner>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
