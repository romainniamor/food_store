import styled from "styled-components";
import CardProduct from "../CardProduct";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/orderContext";
import EmptyMenuAdmin from "./emptyMenuAdmin";
import EmptyMenuClient from "./emptyMenuClient";

const DEFAULT_IMG = "/coming-soon.png";

export default function Menu() {
  const { products, isModeAdmin, handleDeleteProduct, resetProducts } =
    useContext(OrderContext);
  //state

  //comportements

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
          onDelete={() => handleDeleteProduct(product.id)}
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
