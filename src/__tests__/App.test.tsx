import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App render', () => {
  const comp = render(<App />);
  expect(comp).toBeTruthy();
  expect(screen.getByText('nuffsaid.com Coding Challenge')).toBeInTheDocument();
});

test('has stop button', () => {
  render(<App />);
  expect(screen.getByText(/stop/i)).toBeInTheDocument();
});
