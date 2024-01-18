import { theme } from "../../theme/index";
import styled from "styled-components";

//utilisation du spread operator pour récupérer les props supplémentaires scalables
export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <LoginInputStyled className="inputBox">
      {Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </LoginInputStyled>
  );
}

const LoginInputStyled = styled.div`
  width: 100%;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.greyLight};
  font-size: ${theme.fonts.sm};

  input {
    border: none;
    padding: 1px;
    flex: 1;
    color: ${theme.colors.dark};
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
    &:focus {
      outline: 1px solid ${theme.colors.greySemiDark};
    }
  }
`;
