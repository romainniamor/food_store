import { theme } from "../../../theme";
import styled from "styled-components";
import NavBar from "./navBar/NavBar";
import Main from "./main/Main";
import OrderContext from "../../../contexts/orderContext";
import { useState } from "react";
import { fakeMenu as menu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/arrays";

export default function OrderPage() {
  //states

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [products, setProducts] = useState(menu.MEDIUM);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  //CRUD

  const handleAddProduct = (newProduct) => {
    //copie du array
    const productsCopy = deepClone(products);

    //manip du array
    const productsUpdated = [newProduct, ...productsCopy];

    //update du state
    setProducts(productsUpdated);
  };

  const handleDeleteProduct = (idProduct) => {
    //copy
    const productsCopy = deepClone(products);

    //manip du tableau
    const productsUpdated = productsCopy.filter(
      (product) => product.id !== idProduct
    );

    //maj state
    setProducts(productsUpdated);
  };

  const handleEditProduct = (productBeingEdited) => {
    //copie du state
    const productsCopy = deepClone(products);
    //manip du state
    const indexProductToEdit = products.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    productsCopy[indexProductToEdit] = productBeingEdited;

    //update du state
    setProducts(productsCopy);
  };

  const resetProducts = () => {
    setProducts(menu.MEDIUM);
  };

  //contextValues

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
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEditProduct,
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
