import styled from "styled-components";
import Profile from "./Profile";

export default function NavBarRightSide({ userName }) {
  //state

  return (
    <NavBarRightSideStyled>
      <div>Admin button</div>
      <Profile userName={userName} />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
