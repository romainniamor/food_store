import styled from "styled-components";
import Footer from "./Footer";
import Banner from "./Banner";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/math";
import BasketBody from "./BasketBody";

export default function Basket() {
  //state

  //comportements

  //render
  return (
    <BasketStyled>
      <Banner>
        <Total amoutToPay={formatPrice(0)} />
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
