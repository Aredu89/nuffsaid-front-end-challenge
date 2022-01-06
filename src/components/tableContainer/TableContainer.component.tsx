import React, { ReactElement } from 'react';
import { ColumnComponent } from '..';
import { DataReturn } from '../../helpers/data.model';

import './TableContainer.styles.css';

export const TableContainer = ({ errors, warnings, infos}: DataReturn): ReactElement => {
  return (
    <div className='table-container'>
      <ColumnComponent title='Error Type 1' data={errors} />
      <ColumnComponent title='Warning Type 2' data={warnings} />
      <ColumnComponent title='Info Type 3' data={infos} />
    </div>
  )
}