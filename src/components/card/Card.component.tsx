import React from 'react';
import { CardProps } from './Card.model';
import {
  CardContainerStyled,
  CardMessageStyled,
  CardButtonContainerStyled,
  ClearButtonStyled,
} from './Card.styles';

export const CardComponent = ({
  message,
  priority,
  onClear,
}: CardProps) => {
  const getBackgroundColor = (): string => {
    switch(priority) {
      case 0:
        return '#F56236';
      case 1:
        return '#FCE788';
      default:
        return '#88FCA3';
    }
  };
  return (
    <CardContainerStyled color={getBackgroundColor()}>
      <CardMessageStyled>{message}</CardMessageStyled>
      <CardButtonContainerStyled>
        <ClearButtonStyled
          className='clear-button'
          type="button"
          onClick={() => onClear({ message, priority })}
        >
          Clear
        </ClearButtonStyled>
      </CardButtonContainerStyled>
    </CardContainerStyled>
  )
};