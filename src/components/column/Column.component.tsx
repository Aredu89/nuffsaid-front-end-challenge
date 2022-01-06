import React from 'react';
import { ColumnProps } from './Column.model';
import { CardComponent } from '..';

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
      {data.map(dt=>(<CardComponent key={dt.message} message={dt.message} priority={dt.priority} />))}
    </div>
  )
}