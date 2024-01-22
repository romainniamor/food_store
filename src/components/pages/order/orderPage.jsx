import { theme } from "../../../theme";
import styled from "styled-components";
import NavBar from "./navBar/NavBar";
import Main from "./main/Main";
import OrderContext from "../../../contexts/orderContext";
import { useState } from "react";
import { fakeMenu as menu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const [products, setProducts] = useState(menu.MEDIUM);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (idProduct) => {
    setProducts([...products].filter((product) => product.id !== idProduct));
  };

  const resetProducts = () => {
    setProducts(menu.MEDIUM);
  };

  //comportements

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    setProducts,
    handleAddProduct,
    handleDeleteProduct,
    resetProducts,
  };

  //render
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <NavBar></NavBar>
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
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
