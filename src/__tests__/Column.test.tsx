import React from 'react';
import { render, screen } from '@testing-library/react';
import { ColumnComponent } from '../components';

describe('Column', () => {
  const props = {
    title: 'Title',
    data: [
      {
        message: 'card 1',
        priority: 0
      },
      {
        message: 'card 2',
        priority: 1
      },
      {
        message: 'card 3',
        priority: 2
      },
    ],
    clearOne: () => null,
  }
  render(
    <ColumnComponent
      {...props}
    />
  );
  it('render', () => {
    expect(screen.getByText('Title')).toBeInTheDocument()
  });
});