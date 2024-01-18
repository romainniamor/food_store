import React from "react";
import { theme } from "../../../../../theme/index";
import styled from "styled-components";

export default function Admin() {
  return <AdminStyled>Admin</AdminStyled>;
}

const AdminStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
