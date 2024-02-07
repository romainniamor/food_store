import React from "react";
import styled from "styled-components";

export default function SelectInput({
  options,
  className,
  name,
  id,
  value,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <SelectInputStyled
      className={className}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {options.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select``;
