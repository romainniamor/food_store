import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">admin</div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: 1fr;

  height: calc(95vh - 10vh);

  .basket {
    background: pink;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;

    .admin {
      background: red;
      height: 250px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
`;
