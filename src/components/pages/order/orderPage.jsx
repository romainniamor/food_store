import { Link, useParams } from "react-router-dom";
import { theme } from "../../../theme";
import styled from "styled-components";
import NavBar from "./NavBar";
import Main from "./Main";

export default function OrderPage() {
  //state

  //comportements

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar></NavBar>
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 1400px;
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 15px;
  }
`;
