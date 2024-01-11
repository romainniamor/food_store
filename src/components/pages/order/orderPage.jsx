import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  //state
  const { userName } = useParams();

  //comportements

  //render
  return (
    <>
      <h1>Bonjour {userName}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </>
  );
}
