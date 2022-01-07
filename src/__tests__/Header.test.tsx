import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from '../components';

describe('Header', () => {
  const props = {
    title: 'Hello header'
  }
  render(
    <HeaderComponent
      {...props}
    />
  );
  it('render', () => {
    expect(screen.getByText('Hello header')).toBeInTheDocument()
  });
});