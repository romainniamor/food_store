import styled from "styled-components";
import TextInput from "../../../../../reusableUi/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme/index";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../contexts/orderContext";
import Button from "../../../../../reusableUi/Button";

const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm() {
  //state
  const { handleAddProduct } = useContext(OrderContext);
  const [isSubmited, setIsSubmited] = useState(false);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  //url img random https://picsum.photos/200

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      id: crypto.randomUUID(),
      ...newProduct,
    };
    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  const priceInputValid = (inputValue) => {
    const isValid = /^[0-9.]+$/.test(inputValue);
    return isValid;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    if (name === "price" && !priceInputValid(newValue)) {
      return;
    }

    setNewProduct({ ...newProduct, [name]: newValue }); //dynamic property name
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          "Aucune image"
        )}
      </div>
      <div className="input-fieds">
        <TextInput
          type="text"
          name="title"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          Icon={<FaHamburger className="addForm-icon" />}
          onChange={handleChange}
          version={"minimalist"}
        />
        <TextInput
          type="text"
          name="imageSource"
          placeholder="Lien URL d'une image (ex: https://super-burger.png)"
          value={newProduct.imageSource}
          Icon={<BsFillCameraFill className="addForm-icon" />}
          onChange={handleChange}
          version={"minimalist"}
        />
        <TextInput
          type="text"
          name="price"
          placeholder="Prix"
          value={newProduct.price}
          Icon={<MdOutlineEuro className="addForm-icon" />}
          onChange={handleChange}
          version={"minimalist"}
        />
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          version="success"
          content={" Ajouter un nouveau produit au menu"}
        />
        {isSubmited && (
          <span className="submit-message">
            <FiCheck />
            Ajouté avec succès !
          </span>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 20px;
  width: 70%;
  height: 100%;

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;
    padding: 16px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.greySemiDark};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .input-fieds {
    background-color: ${theme.colors.white};
    grid-area: 1 / 2 / 4 / 3;
    display: grid;
    grid-row-gap: 9px;
  }

  .submit {
    grid-area: 4 / 2 / 5 / 3;
    display: flex;
    gap: 5px;
    align-items: center;

    .submit-button {
      width: 50%;
    }
    .submit-message {
      background-color: purple;
      display: inline-flex;
    }
  }

  .addForm-icon {
    color: ${theme.colors.greyBlue};
  }
`;
