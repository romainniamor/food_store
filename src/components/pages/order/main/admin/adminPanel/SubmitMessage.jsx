import { FiCheckCircle } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../../theme/index";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <FiCheckCircle />
      Ajouté avec succès !
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  display: inline-flex;
  gap: 5px;
  color: ${theme.colors.success};
  font-size: ${theme.fonts.s};
  padding-left: 10px;
`;
