import styled from "styled-components";
import NavBarRightSide from "./NavBarRightSide";
import Logo from "../../../reusableUi/Logo";
import { theme } from "../../../../theme/index";
import { refreshPage } from "../../../../utils/window";

export default function NavBar({ userName }) {
  //state

  //comportements

  //render
  return (
    <NavBarStyled>
      <Logo className="logo-nav" onClick={refreshPage} />
      <NavBarRightSide userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 70px 5px 20px;
  width: 100%;
  color: ${theme.colors.greyBlue};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-nav {
    cursor: pointer;
  }
`;
