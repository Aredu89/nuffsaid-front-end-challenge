import React, { ReactElement } from 'react';
import { ButtonComponent } from '..';
import { ButtonContainerStyled } from './ButtonContainer.styles';
import { useButtonsContext } from '../../hooks';

export const ButtonsContainer = (): ReactElement => {
  const { clearAll, stopStart, stop } = useButtonsContext();
  return (
    <ButtonContainerStyled>
      <ButtonComponent description={`${stop ? 'start' : 'stop'}`} onButtonclick={stopStart} />
      <ButtonComponent description='Clear' onButtonclick={clearAll} />
    </ButtonContainerStyled>
  )
};