import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from '../components/board';

describe("Board ", () => {
  it('displays welcome to tic tic toe on screen', () => {
    render(<Board />);
    const linkElement = screen.getByText(/Wowow/i);
    expect(linkElement).toBeInTheDocument();
  });


  
})

