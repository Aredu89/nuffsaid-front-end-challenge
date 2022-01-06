import React from 'react';
import { CardProps } from './Card.model';
import Button from '@mui/material/Button';

export const CardComponent = ({
  message,
  priority
}: CardProps) => {
  return (
    <div className='card-container'>
      <div className='message'>{message}</div>
      <div className='button-container'>
        <Button variant="text">Clear</Button>
      </div>
    </div>
  )
};