import React from 'react';
import { ColumnProps } from './Column.model';
import { CardComponent } from '..';
import {
  ColumnContainerStyled,
  TitleStyled,
  CountStyled,
} from './Column.styles';

export const ColumnComponent = ({
  title,
  data,
  clearOne,
}: ColumnProps) => {
  const count = data.length;
  return (
    <ColumnContainerStyled>
      <TitleStyled>{title}</TitleStyled>
      <CountStyled>{`Count ${count}`}</CountStyled>
      {data.map(dt=>(<CardComponent key={dt.message} message={dt.message} priority={dt.priority} onClear={clearOne} />))}
    </ColumnContainerStyled>
  )
}