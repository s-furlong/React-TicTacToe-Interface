import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Board} from '../board/board'

describe('board', () => {
    it('instructs user to make a selection if nothing has been clicked', async () => {
      render(<Board />);
      const linkElement = screen.getByText(/Please select button/i);
      expect(linkElement).toBeInTheDocument();
    });
  
    it('called onClick function porduces desired token', () => {
      render(<Board />);
      const test = screen.getByText('X');
      fireEvent.click(test);
      const linkElement = screen.getByText(/X has been clicked/i);
      expect(linkElement).toBeInTheDocument();
    });
  
    it('called onClick function porduces desired token', () => {
      render(<Board />);
      const test = screen.getByText('O');
      fireEvent.click(test);
      const linkElement = screen.getByText(/O has been clicked/i);
      expect(linkElement).toBeInTheDocument();
    });
  

    it('returns a blank board with nine cells', () => {
      render(<Board />)
      const cells = screen.getAllByText("_");
      expect(cells.length).toEqual(7);
    })
  });