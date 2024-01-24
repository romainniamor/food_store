import { React, useContext } from "react";
import { theme } from "../../../../../../theme/index";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import EditMessage from "./EditMessage";
import OrderContext from "../../../../../../contexts/orderContext";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);
  return (
    <EditFormStyled>
      <EditMessage />
      {productSelected && <p>{productSelected.title}</p>}
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div``;
