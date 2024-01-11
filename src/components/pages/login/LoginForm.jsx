import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <h1>Bienvenue chez nous! </h1>
      <br />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Entrez votre prénom..."
          value={userName}
          onChange={handleChange}
        />
        <button type="submit">Accèdez à votre espace</button>
      </form>
    </>
  );
}
