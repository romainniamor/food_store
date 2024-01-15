import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">basket</div>
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow: scroll;
  display: grid;
  grid-template-columns: 25% 75%;
`;
