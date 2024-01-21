import styled from "styled-components";
import TextInput from "../../../../../reusableUi/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { theme } from "../../../../../../theme/index";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../contexts/orderContext";

export default function AddForm() {
  //state
  const { handleAddProduct } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState({
    title: "",
    imageSource: "",
    price: "",
  });

  //url img random https://picsum.photos/200

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      id: crypto.randomUUID(),
      ...newProduct,
    };

    handleAddProduct(newProductToAdd);
    setNewProduct(newProduct);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    setNewProduct({ ...newProduct, [name]: newValue }); //dynamic property name
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt="Aperçu de l'image" />
        ) : (
          "Aucune image"
        )}
      </div>
      <div className="input-fieds">
        <input
          type="text"
          name="title"
          placeholder="Produit"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageSource"
          placeholder="Url"
          value={newProduct.imageSource}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Prix"
          value={newProduct.price}
          onChange={handleChange}
        />
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
    padding: 16px 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
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
