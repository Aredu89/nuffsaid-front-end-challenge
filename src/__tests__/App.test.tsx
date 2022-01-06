import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('App render', () => {
  const comp = render(<App />);
  expect(comp).toBeTruthy();
});
