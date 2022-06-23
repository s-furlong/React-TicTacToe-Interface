import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from '../game/board';

describe("Board ", () => {
  it('displays welcome to tic tic toe on screen', () => {
    render(<Board />);
    const linkElement = screen.getByText(/Welcome To Tic Tac Toe/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('displays custom welcome message', () => {
    render(<Board message="hello, Sean" />);
    const linkElement = screen.getByText(/hello, Sean/i);
    expect(linkElement).toBeInTheDocument();
  });
  
})

