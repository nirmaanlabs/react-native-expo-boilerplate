import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import { App } from './App';

test('it renders the given name in the greeting', () => {
  render(<App />);
  expect(screen.getByText('Power of self learning')).toBeOnTheScreen();
});
