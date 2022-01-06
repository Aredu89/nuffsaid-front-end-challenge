import React, { ReactElement } from 'react';
import { ButtonComponent } from '..';
import { ButtonContainerProps } from './ButtonsContainer.model';
import { ButtonContainerStyled } from './ButtonContainer.styles';

export const ButtonsContainer = ({ clearAll, stopStart, stop }: ButtonContainerProps): ReactElement => (
  <ButtonContainerStyled>
    <ButtonComponent description={`${stop ? 'start' : 'stop'}`} onButtonclick={stopStart} />
    <ButtonComponent description='Clear' onButtonclick={clearAll} />
  </ButtonContainerStyled>
)