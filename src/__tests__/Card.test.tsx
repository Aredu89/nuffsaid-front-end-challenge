import { render, screen } from '@testing-library/react';
import { CardComponent } from '../components';

describe('Card', () => {
  const props = {
    message: 'Card',
    priority: 0,
    onClear: () => null,
  }
  render(
    <CardComponent
      {...props}
    />
  );
  it('render', () => {
    expect(screen.getByText('Card')).toBeInTheDocument()
  });
});