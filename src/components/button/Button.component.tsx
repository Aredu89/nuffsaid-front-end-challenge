import React, { ReactElement } from 'react';
import { ButtonProps } from './Button.model';
import { StyledButton } from './Button.styles';

export const ButtonComponent = ({
  description,
}: ButtonProps): ReactElement => {

  return (
    <StyledButton variant="contained" size="medium">{description}</StyledButton>
  )
};