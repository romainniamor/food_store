import { theme } from "../../../../../theme/index";
import styled from "styled-components";

export default function Banner({ children }) {
  return <BannerStyled>{children}</BannerStyled>;
}

const BannerStyled = styled.div`
  height: 70px;
  width: 100%;
  background: ${theme.colors.background_dark};
  font-family: "Amatic SC";
  text-transform: uppercase;
`;
