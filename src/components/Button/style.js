import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  color: var(--light);
  background: var(--primary);
  text-align: center;
  vertical-align: center;
  font-size: 16px;
  border: none;

  ${({fullWidth}) => fullWidth && `
      width: 100%;
   `
  }
  &:hover {
    background-color: var(--red-600);
    transition: background-color 0.3s ease-in-out;
  }
`;

export default StyledButton;
