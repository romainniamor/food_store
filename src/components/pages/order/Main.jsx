import styled from "styled-components";
import { theme } from "../../../theme/index";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket"></div>
      <div className="menu"></div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: 25% 75%;
`;
