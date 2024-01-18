import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

export default function Tab({ icon }) {
  return (
    <TabStyled>
      <div className="icon">{icon}</div>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;

  position: relative;
  top: 1px;
  left: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${theme.fonts.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  border: 1px 1px 2px 1px;
  border-color: ${theme.colors.greyLight};
  border-style: solid;
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0 0;

  cursor: pointer;

  .icon {
    display: flex;
  }

  &:hover {
    border-bottom: 1px solid ${theme.colors.white};
  }
`;
