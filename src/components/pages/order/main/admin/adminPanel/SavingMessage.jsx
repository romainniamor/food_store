import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BsCloudCheck } from "react-icons/bs";

export default function SavingMessage() {
  return (
    <SavingMessageStyled>
      <div className="icon">
        <BsCloudCheck />
      </div>
      <span>Modifications enregistrées !</span>
    </SavingMessageStyled>
  );
}

const SavingMessageStyled = styled.div`
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.sm};
  display: flex;
  align-items: center;
  gap: 10px;

  .icon {
    font-size: ${theme.fonts.P3};
    display: flex;
  }
`;
