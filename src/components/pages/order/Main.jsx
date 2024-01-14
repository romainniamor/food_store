import styled from "styled-components";
import { theme } from "../../../theme/index";

export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
