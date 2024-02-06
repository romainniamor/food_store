import React from "react";
import styled from "styled-components";

export default function SelectInput({ options, className, name, id }) {
  return (
    <SelectInputStyled className={className} name={name} id={id}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select``;
