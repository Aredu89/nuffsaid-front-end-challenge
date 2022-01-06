import React, { ReactElement } from 'react';
import { ColumnComponent } from '..';
import { TableContainerProps } from './TableContainer.model';
import { TableContainerStyled } from './TableContainer.styles';

export const TableContainer = ({ errors, warnings, infos, clearOne }: TableContainerProps): ReactElement => {
  return (
    <TableContainerStyled>
      <ColumnComponent title='Error Type 1' data={errors} clearOne={clearOne} />
      <ColumnComponent title='Warning Type 2' data={warnings} clearOne={clearOne} />
      <ColumnComponent title='Info Type 3' data={infos} clearOne={clearOne} />
    </TableContainerStyled>
  )
};