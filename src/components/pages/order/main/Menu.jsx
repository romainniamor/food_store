import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { fakeMenu2 as menu } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  //state
  const [products, setProducts] = useState(menu);

  //comportements

  //render
  return (
    <MenuStyled>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.title}
            img={product.imageSource}
            price={product.price}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
`;
