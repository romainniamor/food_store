import styled from "styled-components";
import TextInput from "../../../../../reusableUi/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { theme } from "../../../../../../theme/index";

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview">aucune image </div>
      <div className="input-fieds">
        <input type="text" placeholder="Produit" />
        <input type="text" placeholder="Url" />
        <input type="text" placeholder="Prix" />
      </div>
      <button className="submit-button">
        Ajouter un nouveau produit au menu
      </button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  background-color: blue;
  width: 70%;
  height: 100%;

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;
    background: pink;
  }

  .input-fieds {
    background-color: orange;
    grid-area: 1 / 2 / 4 / 3;
    display: grid;
  }

  .submit-button {
    grid-area: 4 / 2 / 5 / 3;
    cursor: pointer;
    background-color: green;
    width: 50%;
  }

  .add-product-icon {
    color: ${theme.colors.greyBlue};
  }
`;
