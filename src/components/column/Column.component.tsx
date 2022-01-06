import React from 'react';
import { ColumnProps } from './Column.model';

import './Column.styles.css';

export const ColumnComponent = ({
  title,
  data,
}: ColumnProps) => {
  const count = data.length;
  return (
    <div className='column-container'>
      <h2 className='title'>{title}</h2>
      <div className='count'>{`Count ${count}`}</div>
      {data.map(dt=>(<div key={dt.message}>{dt.message}</div>))}
    </div>
  )
}