import styled from "styled-components";
import NavBarRightSide from "./NavBarRightSide";
import Logo from "../../reusableUi/Logo";
import { theme } from "../../../theme/index";

export default function NavBar({ userName }) {
  //state

  //comportements

  //render
  return (
    <NavBarStyled>
      <Logo />
      <NavBarRightSide userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px 0 20px;
  width: 100%;
  color: ${theme.colors.greyBlue};
`;
