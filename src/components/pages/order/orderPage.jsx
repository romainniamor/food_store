import { theme } from "../../../theme";
import styled from "styled-components";
import NavBar from "./navBar/NavBar";
import Main from "./main/Main";
import OrderContext from "../../../contexts/orderContext";
import { useState, useRef, useEffect } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useProducts } from "../../../hooks/useProducts";
import { useBasket } from "../../../hooks/useBasket";
import { findInArray } from "../../../utils/arrays";
import { useParams } from "react-router-dom";
import { getUserProducts } from "../../../api/product";
import { getLocalStorage } from "../../../utils/window";

export default function OrderPage() {
  //states
  const { userName } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditInputRef = useRef();

  //comportements via custom hooks

  const {
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetProducts,
    products,
    setProducts,
  } = useProducts();

  const {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteFromBasket,
    handleDeleteBasketProductFromMenu,
  } = useBasket();

  const handleProductSelected = async (id) => {
    const productClickedOn = findInArray(products, id);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn);
    titleEditInputRef.current.focus();
  };

  const initializeProducts = async () => {
    const dataProducts = await getUserProducts(userName);
    setProducts(dataProducts);
  };

  const initializeBasket = () => {
    const dataBasket = getLocalStorage(userName);
    console.log("basket", dataBasket);
    if (!dataBasket) return;
    setBasket(dataBasket);
  };

  const initialiseUserSession = async () => {
    await initializeProducts();
    initializeBasket();
  };

  useEffect(() => {
    initialiseUserSession();
  }, []);

  //contextValues

  const orderContextValue = {
    userName,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    handleAddProduct,
    handleDeleteProduct,
    resetProducts,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditInputRef,
    basket,
    handleAddToBasket,
    handleDeleteFromBasket,
    handleDeleteBasketProductFromMenu,
    handleProductSelected,
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
