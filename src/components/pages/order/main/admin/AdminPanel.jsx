import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import OrderContext from "../../../../../contexts/orderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminPanel() {
  const { isAddTabSelected, isEditTabSelected, currentTabSelected } =
    useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && <PanelEdit />}
      {currentTabSelected === "edit" && <div>Editer un produit</div>}

      {/* {isAddTabSelected ? (
        <div>Ajouter un produit</div>
      ) : (
        <div>Editer un produit</div>
      )} */}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;

function PanelEdit() {
  return (
    <div>
      <h1>Panel edit</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
        corporis.
      </p>
    </div>
  );
}
