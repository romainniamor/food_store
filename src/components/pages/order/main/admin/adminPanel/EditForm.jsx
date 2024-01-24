import { React, useContext, useState } from "react";
import { theme } from "../../../../../../theme/index";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import EditMessage from "./EditMessage";
import OrderContext from "../../../../../../contexts/orderContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusableUi/TextInput";
import { getInputTextConfig } from "./inputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function EditForm() {
  const { productSelected, setProductSelected } = useContext(OrderContext);
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT);

  const inputTexts = getInputTextConfig(productSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductSelected({ ...productSelected, [name]: value }); //dynamic property name
  };

  return (
    <EditFormStyled>
      <ImagePreview
        title={productSelected.title}
        imageSource={productSelected.imageSource}
      />
      <div className="input-fieds">
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
      <div className="submit"></div>
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
