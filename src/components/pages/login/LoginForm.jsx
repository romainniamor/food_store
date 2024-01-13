import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme/index";
import styled from "styled-components";
import TextInput from "../../reusableUi/TextInput";
import { FaChevronCircleRight } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

export default function LoginForm() {
  //state
  const [userName, setUserName] = useState("");
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  const naviagte = useNavigate();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName("");
    naviagte(`order/${userName}`);
  };

  //render
  return (
    <LoginFormStyled>
      <h1>Bienvenue chez nous ! </h1>
      <hr />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          Icon={<BsPersonCircle className="loginIcon" />}
          value={userName}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
        />
        <button type="submit">
          <span>Accèdez à mon espace</span>
          <FaChevronCircleRight />
        </button>
      </form>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Amatic SC", cursive;
  gap: ${theme.spacing.md};
  color: ${theme.colors.white};
  max-width: 464px;
  min-width: 400px;
  padding: 2.5rem 2rem;

  h1 {
    font-size: ${theme.fonts.P6};
  }

  hr {
    width: 100%;
    height: 3px;
    background: ${theme.colors.primary};
    border: none;
  }

  h2 {
    font-size: ${theme.fonts.P4};
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.md};
    width: 100%;

    .loginIcon {
      color: ${theme.colors.greyMedium};
      font-size: ${theme.fonts.P0};
    }

    button {
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
    }
  }
`;
