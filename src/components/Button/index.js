import React from 'react';
import StyledButton from './style';

const Button = ({
  text,
  type='button',
  fullWidth,
  children,
  onClick
}) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      type={type}
      onClick={onClick}
    >
      {text || children}
    </StyledButton>
  )
}

export default Button;
