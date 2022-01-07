import React, { ReactElement } from 'react';
import { ColumnComponent } from '..';
import { TableContainerStyled } from './TableContainer.styles';
import { useTableContext } from '../../hooks';

export const TableContainer = (): ReactElement => {
  const { errors, warnings, infos, clearOne } = useTableContext();
  return (
    <TableContainerStyled>
      <ColumnComponent title='Error Type 1' data={errors} clearOne={clearOne} />
      <ColumnComponent title='Warning Type 2' data={warnings} clearOne={clearOne} />
      <ColumnComponent title='Info Type 3' data={infos} clearOne={clearOne} />
    </TableContainerStyled>
  )
};