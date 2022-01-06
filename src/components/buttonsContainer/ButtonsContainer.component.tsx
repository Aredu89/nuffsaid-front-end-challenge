import React, { ReactElement } from 'react';
import { ButtonComponent } from '..';

import './ButtonsContainer.styles.css';

export const ButtonsContainer = (): ReactElement => (
  <div className='buttons-container'>
    <ButtonComponent description='Stop' />
    <ButtonComponent description='Clear' />
  </div>
)