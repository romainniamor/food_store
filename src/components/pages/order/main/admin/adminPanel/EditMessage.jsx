import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme/index";

export default function EditMessage() {
  return (
    <EditMessageStyled>
      <span>cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </EditMessageStyled>
  );
}

const EditMessageStyled = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.P3};
  color: ${theme.colors.greyBlue};
  display: flex;
  gap: 9px;
  align-items: center;
  position: relative;
  top: 50px;
`;
