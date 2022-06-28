import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from '../components/game';

describe("welcome message", () => {
  it('displays welcome to tic tic toe on screen', () => {
    render(<Game />);
    const linkElement = screen.getByText(/Welcome To Tic Tac Toe/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('displays custom welcome message', () => {
    render(<Game message="hello, Sean" />);
    const linkElement = screen.getByText(/hello, Sean/i);
    expect(linkElement).toBeInTheDocument();
  });
});


