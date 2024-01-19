import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import OrderContext from "../../../../../contexts/orderContext";

export default function AdminPanel() {
  const { isAddTabSelected, isEditTabSelected } = useContext(OrderContext);
  return (
    <AdminPanelStyled>
      {isAddTabSelected ? (
        <div>Ajouter un produit</div>
      ) : (
        <div>Editer un produit</div>
      )}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
