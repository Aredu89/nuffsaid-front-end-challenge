import React, { ReactElement } from 'react';
import { ButtonComponent } from '..';
import { ButtonContainerProps } from './ButtonsContainer.model';

import './ButtonsContainer.styles.css';

export const ButtonsContainer = ({ clearAll, stopStart, stop }: ButtonContainerProps): ReactElement => (
  <div className='buttons-container'>
    <ButtonComponent description={`${stop ? 'start' : 'stop'}`} onButtonclick={stopStart} />
    <ButtonComponent description='Clear' onButtonclick={clearAll} />
  </div>
)