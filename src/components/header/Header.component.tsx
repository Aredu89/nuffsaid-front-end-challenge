import React, { ReactElement } from 'react';
import { HeaderProps } from './Header.model';
import { HeaderContainerStyled } from './Header.styles';

export const HeaderComponent = ({
  title,
}: HeaderProps): ReactElement => (
  <HeaderContainerStyled>
    {title}
  </HeaderContainerStyled>
);