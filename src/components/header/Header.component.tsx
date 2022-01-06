import React, { ReactElement } from 'react';
import { HeaderProps } from './Header.model';

import './Header.styles.css';

export const HeaderComponent = ({
  title,
}: HeaderProps): ReactElement => (
  <div className='header-container'>
    {title}
  </div>
);