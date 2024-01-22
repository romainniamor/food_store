import styled from "styled-components";

export default function EmptyMenuAdmin({ onClick }) {
  return (
    <EmptyMenuAdminStyled className="empty-menu-admin">
      <h2>le menu est vide ?</h2>
      <h2>cliquez ci-dessous pour le reinitialiser</h2>
      <button onClick={onClick}>Générer de nouveaux produits</button>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  h2 {
    text-transform: uppercase;
  }
`;
