import React from "react";
import { styled, css } from "styled-components";
import { theme } from "../../theme/index";

export default function Button({ Icon, content, version = "normal", onClick }) {
  return (
    <ButtonStyled type="submit" version={version} onClick={onClick}>
      <span>{content}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.weights.bold};
  border-radius: ${theme.borderRadius.round};
  ${(props) => extraStyle[props.version]};
`;

const extraStylePrimary = css`
  width: 100%;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.primary};
  font-size: ${theme.fonts.sm};
  font-weight: ${theme.weights.bold};
  padding: 18px 24px;
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

const extraStyleSuccess = css`
  background-color: ${theme.colors.success};
  font-size: ${theme.fonts.s};
  padding: 12px 30px;
  &:hover {
    background-color: transparent;
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  &:active {
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
  }
`;

const extraStylePrimaryOutlined = css`
  padding: 12px 24px;
  background-color: ${theme.colors.primary};
  text-transform: capitalize;
  font-size: ${theme.fonts.xs};
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
  primaryOutlined: extraStylePrimaryOutlined,
};
