import styled from "styled-components";
import CardProduct from "../CardProduct";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/orderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import { findInArray } from "../../../../../utils/arrays";

const DEFAULT_IMG = "/coming-soon.png";

export default function Menu() {
  const {
    products,
    isModeAdmin,
    handleDeleteProduct,
    resetProducts,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditInputRef,
    handleAddToBasket,
  } = useContext(OrderContext);

  //state

  //comportements

  const handleClick = async (id) => {
    if (isModeAdmin) {
      const productClickedOn = findInArray(products, id);
      await setIsCollapsed(false);
      await setCurrentTabSelected("edit");
      await setProductSelected(productClickedOn);
      titleEditInputRef.current.focus();
    }
    return;
  };

  const checkIfProductIsClick = (idProductInMenu, idProductClickOn) => {
    return idProductInMenu === idProductClickOn;
  };

  const handleCardDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteProduct(id);
    productSelected.id === id && setProductSelected(EMPTY_PRODUCT);
    titleEditInputRef.current.focus();
  };

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation();
    const productToAdd = findInArray(products, idProductToAdd);
    console.log("productToAdd", productToAdd);
    handleAddToBasket(productToAdd);
  };

  //render

  if (products.length === 0) {
    if (isModeAdmin) {
      return <EmptyMenuAdmin onClick={resetProducts} />;
    }
    return <EmptyMenuClient />;
  }

  return (
    <MenuStyled>
      {products.map((product) => (
        <CardProduct
          key={product.id}
          title={product.title}
          img={product.imageSource ? product.imageSource : DEFAULT_IMG}
          price={product.price}
          hasDeleteButton={isModeAdmin}
          onDelete={(e) => handleCardDelete(e, product.id)}
          onClick={() => handleClick(product.id)}
          ishoverable={isModeAdmin}
          isselected={checkIfProductIsClick(productSelected.id, product.id)}
          onAdd={(e) => handleAddButton(e, product.id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  grid-row-gap: 60px;
  overflow-y: scroll;
  padding: 50px 50px 150px;
`;
