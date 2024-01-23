import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./menu/Menu";
import Admin from "./admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../contexts/orderContext";

export default function Main() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
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
  }
`;
