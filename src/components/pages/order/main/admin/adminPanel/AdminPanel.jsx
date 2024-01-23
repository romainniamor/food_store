import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import OrderContext from "../../../../../../contexts/orderContext";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && <AddForm />}
      {currentTabSelected === "edit" && <EditForm />}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.white};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
`;
