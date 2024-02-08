/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import styled from "styled-components/";
import { theme } from "../../../../../../theme";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusableUi/TextInput";
import { getInputTextConfig, getInputSelectConfig } from "./inputsConfig";
import React from "react";
import SelectInput from "../../../../../reusableUi/SelectInput";

const AdminForm = React.forwardRef(
  (
    { onSubmit, onChange, product, version, children, onFocus, onBlur },
    ref
  ) => {
    const inputTexts = getInputTextConfig(product);
    const inputSelects = getInputSelectConfig(product);

    return (
      <AdminFormStyled onSubmit={onSubmit}>
        <ImagePreview title={product.title} imageSource={product.imageSource} />
        <div className="input-fields">
          {inputTexts.map((inputText) => (
            <TextInput
              {...inputText}
              key={inputText.id}
              onChange={onChange}
              version={version}
              onFocus={onFocus}
              onBlur={onBlur}
              ref={ref && inputText.name === "title" ? ref : null}
            />
          ))}

          {inputSelects.map((inputSelect) => (
            <SelectInput
              key={inputSelect.id}
              options={inputSelect.options}
              value={inputSelect.value}
              clasName={inputSelect.className}
              name={inputSelect.name}
              id={inputSelect.id}
              icon={inputSelect.Icon}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          ))}
        </div>
        <div className="submit">{children}</div>
      </AdminFormStyled>
    );
  }
);

export default AdminForm;

const AdminFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 20px;
  width: 70%;
  height: 100%;

  .input-fields {
    width: 100%;
    height: 100%;

    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat (3, 1fr);
    grid-row-gap: 9px;
    grid-column-gap: 9px;

    .title {
      grid-area: 1 / 1 / -3 / 4;
    }
    .image-source {
      grid-area: 2 / 1 / 3 / 4;
    }
    .price {
      grid-area: 3 / 1 / 4 / 2;
    }

    .is-available {
      grid-area: 3 / 2 / 4 / 3;
    }

    .is-advertised {
      grid-area: 3 / 3 / 4 / 4;
    }
  }

  .submit {
    grid-area: 4 / 2 / 5 / 3;
    display: flex;
    align-items: center;

    .button-box {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;
