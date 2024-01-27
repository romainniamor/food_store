import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import EmptyBasket from "./EmptyBasket";
import Header from "./Header";
import Footer from "./Footer";

export default function Basket() {
  //state

  //comportements

  //render
  return (
    <BasketStyled>
      <Header />

      <div className="basket-content">
        <EmptyBasket />
      </div>
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .basket-content {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2) inset;
  }
`;
