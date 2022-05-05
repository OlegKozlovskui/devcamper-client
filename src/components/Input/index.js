import React from "react";
import styles from './style';

const { FormControl, StyledInput, Label } = styles;

const Input = ({
  label,
  name,
  value,
  type,
  placeholder,
  onChange
}) => {
  return (
    <FormControl >
      {label && <Label>{label}</Label>}
      <StyledInput
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormControl>
  )
};

export default Input;
