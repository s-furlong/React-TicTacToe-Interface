import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Board} from '../board/board'


describe('board', () => {
  it('returns a blank board with nine cells', () => {
    render(<Board />)
    const cells = screen.getAllByText("_");
    expect(cells.length).toEqual(9);
  })

  it('begins with a blank board', async () => {
    render(<Board />)
    const move = screen.getByTestId("game-board")
    expect(move.textContent).not.toBe("X")
  });

  it('after first click on board produces an X', () => {
    render(<Board />);
    const firstToClick = screen.getByTestId('cell_0')
    
    expect(firstToClick.textContent).toBe("_")
    fireEvent.click(firstToClick)
    
    expect(firstToClick?.textContent).toBe("X")
  });

  it('after second click the player token swithes to O', () => {
    render(<Board />);
    const firstToClick = screen.getByTestId('cell_0')
    const secondToClick = screen.getByTestId('cell_1')
    
    expect(firstToClick.textContent).toBe("_")
    fireEvent.click(firstToClick)
    fireEvent.click(secondToClick)

    expect(secondToClick?.textContent).toBe("O")
  })

  it('does not alter the token if it clicked twice', () => {
    render(<Board />);
    const firstToClick = screen.getByTestId('cell_0')
    
    expect(firstToClick.textContent).toBe("_")
    fireEvent.click(firstToClick)
    fireEvent.click(firstToClick)

    expect(firstToClick?.textContent).toBe("X")
  })

  it('invalidates the move is the is occupied', () => {
    render(<Board />);
    const firstToClick = screen.getByTestId('cell_0')
    const validCheck = screen.getByTestId("checker")
    
    expect(validCheck.textContent).toBe("Checker: Select Square")
    fireEvent.click(firstToClick)
    fireEvent.click(firstToClick)

    expect(validCheck?.textContent).toBe("Checker: Invalid")
  })

  it('validates the move is the is occupied', () => {
    render(<Board />);
    const firstToClick = screen.getByTestId('cell_0')
    const secondToClick = screen.getByTestId('cell_1')
    const validCheck = screen.getByTestId("checker")

    expect(validCheck.textContent).toBe("Checker: Select Square")

    fireEvent.click(firstToClick)
    fireEvent.click(secondToClick)

    expect(validCheck?.textContent).toBe("Checker: Valid")
  })
});