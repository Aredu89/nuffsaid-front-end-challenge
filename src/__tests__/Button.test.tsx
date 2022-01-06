import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonComponent } from '../components';

describe('Button', () => {
  const props = {
    description: 'Hello',
    onButtonclick: () => {console.log('Hello')}
  }
  render(
    <ButtonComponent
      {...props}
    />
  );
  it('render', () => {
    expect(screen.getByText('Hello')).toBeInTheDocument()
  });
});