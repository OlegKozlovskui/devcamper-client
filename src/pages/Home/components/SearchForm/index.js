import React, { useState } from 'react';
import styles from './style';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const { StyledForm, InputContainer } = styles;

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          name="miles"
          placeholder="Miles From"
          type="text"
          onChange={handleChange}
        />
        <Input
          name="zipcode"
          placeholder="Enter Zipcode"
          type="text"
          onChange={handleChange}
        />
      </InputContainer>
      <Button fullWidth="fullWidth" type="submit">Find Bootcamps</Button>
    </StyledForm>
  );
};

export default SearchForm;
