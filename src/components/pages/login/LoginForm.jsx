import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme/index";
import styled from "styled-components";
import TextInput from "../../reusableUi/TextInput";
import { FaChevronCircleRight } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../reusableUi/Button";

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
          Icon={<BsPersonCircle className="login-icon" />}
          value={userName}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          version="normal"
        />
        <Button
          Icon={<FaChevronCircleRight />}
          content={"Accèdez à mon espace"}
          version={"normal"}
        />
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
    font-weight: ${theme.weights.bold};
    margin: 20px 0px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.md};
    width: 100%;
  }
`;
