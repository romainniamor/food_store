import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

export default function PrimaryButton({ Icon, content }) {
  return (
    <PrimaryButtonStyled type="submit">
      <span>{content}</span>
      {Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  border: none;
  font-size: ${theme.fonts.P0};
  font-weight: 800;
  color: ${theme.colors.white};
  padding: 18px 24px;
  cursor: pointer;
  &:hover:not(:disabled) {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    transition: all 0.3s ease-out;
  }
  &:active {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
`;
