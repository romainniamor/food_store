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

  //render
  return (
    <BasketStyled>
      <Banner>
        <Total amoutToPay={formatPrice(0)} />
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
