import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  padding-bottom: 15px;
`;

const styles = {
  StyledForm,
  InputContainer,
};

export default styles;
