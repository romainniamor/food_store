import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import OrderContext from "../../../../../contexts/orderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && <div>Ajouter un produit</div>}
      {currentTabSelected === "edit" && <div>Editer un produit</div>}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
