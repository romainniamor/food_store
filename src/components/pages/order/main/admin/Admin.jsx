import { useState, useContext } from "react";
import { theme } from "../../../../../theme/index";
import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./adminPanel/AdminPanel";
import OrderContext from "../../../../../contexts/orderContext";
import { fadeFromBottom } from "../../../../../theme/animations";

export default function Admin() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  animation: ${fadeFromBottom} 0.3s ease-in-out;
`;
