import { useContext } from "react";
import { theme } from "../../../../../../theme/index";
import styled from "styled-components";
import OrderContext from "../../../../../../contexts/orderContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusableUi/TextInput";
import { getInputTextConfig } from "./inputTextConfig";

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEditProduct } =
    useContext(OrderContext);

  const inputTexts = getInputTextConfig(productSelected);

  //comportements
  const handleChange = (e) => {
    const { value, name } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value }; //dynamic property name
    setProductSelected(productBeingUpdated); //update form
    handleEditProduct(productBeingUpdated); // update menu
  };

  //render
  return (
    <EditFormStyled>
      <ImagePreview
        title={productSelected.title}
        imageSource={productSelected.imageSource}
      />
      <div className="input-fields">
        {inputTexts.map((inputText) => (
          <TextInput
            key={inputText.id}
            name={inputText.name}
            placeholder={inputText.placeholder}
            value={productSelected[inputText.name]}
            Icon={inputText.Icon}
            onChange={handleChange}
            version={"minimalist"}
          />
        ))}
      </div>
      <div className="submit">
        <div className="message">
          Cliquez sur un produit pour le modifier en temps réel.
        </div>
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 20px;
  width: 70%;
  height: 100%;

  .input-fields {
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

  .message {
    font-size: ${theme.fonts.s};
    color: ${theme.colors.primary};
  }
`;
