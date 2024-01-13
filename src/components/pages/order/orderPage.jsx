import { Link, useParams } from "react-router-dom";
import { theme } from "../../../theme";
import styled from "styled-components";
import NavBar from "./NavBar";
import Main from "./Main";

export default function OrderPage() {
  //state
  const { userName } = useParams();

  //comportements

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar userName={userName}></NavBar>
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
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
