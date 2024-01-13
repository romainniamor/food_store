import styled from "styled-components";
import NavBarRightSide from "./NavBarRightSide";
import NavBarLeftSide from "./NavBarLeftSide";

export default function NavBar({ userName }) {
  //state

  //comportements

  //render
  return (
    <NavBarStyled>
      <NavBarLeftSide />
      <NavBarRightSide userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px 0 20px;
  width: 100%;
  color: #747b91;
`;
