import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Game from './game';

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

describe('board', () => {
  it('instructs user to make a selection if nothing has been clicked', async () => {
    render(<Game />);
    const linkElement = screen.getByText(/Please select button/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('called onClick function porduces desired token', () => {
    render(<Game />);
    const test = screen.getByText('X');
    fireEvent.click(test);
    const linkElement = screen.getByText(/X has been clicked/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('called onClick function porduces desired token', () => {
    render(<Game />);
    const test = screen.getByText('O');
    fireEvent.click(test);
    const linkElement = screen.getByText(/O has been clicked/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('called onClick function porduces desired token', () => {
    render(<Game />);
    const test = screen.getByText('_');
    fireEvent.click(test);
    const linkElement = screen.getByText(/_ has been clicked/i);
    expect(linkElement).toBeInTheDocument();
  });
});


