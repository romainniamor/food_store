import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function InfoEditForm() {
  return (
    <InfoEditFormStyled>
      <p className="message">
        Cliquez sur un produit pour le modifier en temps réel.
      </p>
    </InfoEditFormStyled>
  );
}

const InfoEditFormStyled = styled.div`
  font-size: ${theme.fonts.s};
  color: ${theme.colors.primary};
`;
