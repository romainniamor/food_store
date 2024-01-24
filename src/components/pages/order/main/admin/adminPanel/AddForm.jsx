import styled from "styled-components";
import TextInput from "../../../../../reusableUi/TextInput";

import { theme } from "../../../../../../theme/index";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../contexts/orderContext";
import Button from "../../../../../reusableUi/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";

import { getInputTextConfig } from "./inputTextConfig";

export const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm() {
  //state
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);
  const [isSubmited, setIsSubmited] = useState(false);

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

  const inputTexts = getInputTextConfig(newProduct);

  console.log("text", inputTexts);

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        title={newProduct.title}
        imageSource={newProduct.imageSource}
      />
      <div className="input-fieds">
        {inputTexts.map((inputText) => (
          <TextInput
            key={inputText.id}
            name={inputText.name}
            placeholder={inputText.placeholder}
            value={newProduct[inputText.name]}
            Icon={inputText.Icon}
            onChange={handleChange}
            version={"minimalist"}
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          version="success"
          content={" Ajouter un nouveau produit au menu"}
        />
        {isSubmited && <SubmitMessage />}
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
  }
  .addForm-icon {
    color: ${theme.colors.greyBlue};
  }
`;
