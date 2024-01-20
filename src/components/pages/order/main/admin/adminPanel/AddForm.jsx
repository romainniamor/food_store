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
        <TextInput
          Icon={<FaHamburger className="add-product-icon" />}
          value={""}
          onChange={() => {}}
          placeholder={"Nom du produit (ex: Super Burger)"}
        />
        <TextInput
          Icon={<BsFillCameraFill className="add-product-icon" />}
          value={""}
          onChange={() => {}}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-du-super-burger.png)"
          }
        />
        <TextInput
          Icon={<MdOutlineEuro className="add-product-icon" />}
          value={""}
          onChange={() => {}}
          placeholder={"Prix"}
        />
        <button className="submit-button">
          Ajouter un nouveau produit au menu
        </button>
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr 1fr;

  margin-left: 71px;
  margin-top: 31px;
  width: 70%;
  height: auto;

  .image-preview {
    grid-column: 1;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    border: none;
    color: ${theme.colors.greySemiDark};
    font-weight: 400;
  }

  .input-fieds {
    grid-column: 2;
    grid-row: 1 / 2;
  }

  .submit-button {
    background: ${theme.colors.success};
    border-radius: 5px;
    color: white;
    font-weight: 700;
    font-size: 12px;
    border: none;
    padding: 10px 29px;
    cursor: pointer;
  }

  .add-product-icon {
    color: ${theme.colors.greyBlue};
  }
`;
