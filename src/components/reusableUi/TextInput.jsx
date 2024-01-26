/* eslint-disable react/prop-types */
import { theme } from "../../theme/index";
import { styled, css } from "styled-components";
import React from "react";

//utilisation du spread operator pour récupérer les props supplémentaires scalables
const TextInput = React.forwardRef(
  ({ value, onChange, Icon, version, ...extraProps }, ref) => {
    return (
      <TextInputStyled version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          {...extraProps}
        />
      </TextInputStyled>
    );
  }
);

export default TextInput;

const TextInputStyled = styled.div`
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  color: ${theme.colors.greyLight};
  font-size: ${theme.fonts.sm};

  input {
    border: none;
    padding: 2px;
    flex: 1;
    background: transparent;
    color: ${theme.colors.dark};
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
    &:focus {
      outline: 1px solid ${theme.colors.greySemiDark};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.sm};
  }

  ${(props) => props.version === "normal" && extraNormalStyle};
  ${(props) => props.version === "minimalist" && extraMinimalistStyle};
`;
// dans le cas où on a pas de props dans un object
//  const extraStyles = {
//   normal: extraNormalStyle,
//   minimalist: extraMinimalistStyle,
// }

/* ou
   ${(props) => {
    extraStyles[props.version];
  }};*/

const extraNormalStyle = css`
  //used for loginForm
  background: ${theme.colors.white};
  gap: ${theme.spacing.s};
`;

const extraMinimalistStyle = css`
  //used for adminForm
  background: ${theme.colors.background_white};
  gap: ${theme.spacing.md};
  padding: 8px 24px;
  border: none;
  input:focus {
    outline: none;
  }
`;
