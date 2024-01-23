import styled from "styled-components";
import Button from "../../../../reusableUi/Button";

export default function EmptyMenuAdmin({ onClick }) {
  return (
    <EmptyMenuAdminStyled className="empty-menu-admin">
      <h2>le menu est vide ?</h2>
      <h2>cliquez ci-dessous pour le reinitialiser</h2>
      <Button
        onClick={onClick}
        content={"Générer de nouveaux produits"}
        version={"primaryOutlined"}
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  h2 {
    text-transform: uppercase;
  }
`;
