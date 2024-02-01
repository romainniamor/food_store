import styled from "styled-components";
import Button from "../../../../reusableUi/Button";
import { theme } from "../../../../../theme";

export default function EmptyMenuAdmin({ onClick }) {
  return (
    <EmptyMenuAdminStyled>
      <span>le menu est vide ?</span>
      <span>cliquez ci-dessous pour le reinitialiser</span>
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

  span:nth-child(1) {
    font-weight: ${theme.weights.bold};
  }

  span {
    font-weight: ${theme.weights.regular};
    text-transform: uppercase;
    font-family: "Amatic SC", sans-serif;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P4};
  }
`;
