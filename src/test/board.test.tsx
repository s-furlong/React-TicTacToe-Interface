import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from '../game/board';

test('renders learn react link', () => {
  render(<Board />);
  const linkElement = screen.getByText(/Welcome To Tic Tac Toe/i);
  expect(linkElement).toBeInTheDocument();
});
