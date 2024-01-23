import styled from "styled-components";
import Button from "../../../../reusableUi/Button";
import { theme } from "../../../../../theme";

export default function EmptyMenuAdmin({ onClick }) {
  return (
    <EmptyMenuAdminStyled>
      <h1>le menu est vide ?</h1>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;

  h1 {
    font-weight: ${theme.weights.bold};
  }

  h2 {
    font-weight: ${theme.weights.regular};
  }

  h2,
  h1 {
    text-transform: uppercase;
    font-family: "Amatic SC", sans-serif;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P4};
  }
`;
