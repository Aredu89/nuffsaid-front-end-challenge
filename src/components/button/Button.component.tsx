import React, { ReactElement } from 'react';
import { ButtonProps } from './Button.model';
import { StyledButton } from './Button.styles';

export const ButtonComponent = ({
  description,
  onButtonclick,
}: ButtonProps): ReactElement => {

  return (
    <StyledButton
      variant="contained"
      size="medium"
      onClick={()=>onButtonclick()}
    >
      {description}
    </StyledButton>
  )
};