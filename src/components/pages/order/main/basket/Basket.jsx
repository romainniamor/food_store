import styled from "styled-components";
import Footer from "./Footer";
import Banner from "./Banner";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/math";

import BasketBody from "./basketBody/BasketBody";
import { useContext } from "react";
import orderContext from "../../../../../contexts/orderContext";
import { findInArray } from "../../../../../utils/arrays";

export default function Basket() {
  //state

  const { basket, products } = useContext(orderContext);

  //comportements

  const sumToPay = () => {
    return basket.reduce((total, product) => {
      //using products array to find data about product price
      const productInMenu = findInArray(products, product.id);
      if (productInMenu.isAvailable === "false") return total;
      //@todo => check formatPrice in utils in order to avoid manage error case here
      // if (isNaN(product.price)) return total;
      return total + product.quantity * productInMenu.price;
    }, 0);
  };

  //render
  return (
    <BasketStyled>
      <Banner>
        <Total amoutToPay={formatPrice(sumToPay())} />
      </Banner>
      <BasketBody />
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
