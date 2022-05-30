import styled from 'styled-components';

const FormControl = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  display: block;
  padding: 9px 12px;
  color: var(--grey-400);
  background: var(--light);
  border: 1px solid ;
  border-color: var(--grey-200);
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  
  &:focus {
    border-color: var(--red-100);
    outline: none;
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--secondary);
  display: inline-block;
  width: 100%;
`;

const styles = {
  FormControl,
  StyledInput,
  Label,
};

export default styles;
