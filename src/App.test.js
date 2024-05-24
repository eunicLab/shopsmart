import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('checks for text in homepage', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText( "List. Buy. Check");
  expect(linkElement).toBeInTheDocument();
});
