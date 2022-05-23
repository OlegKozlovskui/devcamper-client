import React from 'react';
import styles from './style';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const { StyledForm, InputContainer } = styles;

const SearchForm = () => {
  return (
    <StyledForm>
      <InputContainer>
        <Input name="miles" placeholder="Miles From" type="text" />
        <Input name="zipcode" placeholder="Enter Zipcode" type="text" />
      </InputContainer>
      <Button fullWidth="fullWidth">Find Bootcamps</Button>
    </StyledForm>
  );
};

export default SearchForm;
