import React from 'react';
import { CardProps } from './Card.model';

import './Card.styles.css';

export const CardComponent = ({
  message,
  priority,
  onClear,
}: CardProps) => {
  const getBackgroundColor = (): string => {
    switch(priority) {
      case 0:
        return 'error';
      case 1:
        return 'warning';
      default:
        return 'info';
    }
  }
  return (
    <div className={`card-container ${getBackgroundColor()}`}>
      <div className='message'>{message}</div>
      <div className='button-container'>
        <button
          className='clear-button'
          type="button"
          onClick={() => onClear({ message, priority })}
        >
          Clear
        </button>
      </div>
    </div>
  )
};