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
    expect(move.textContent).toBe("_________")
  });

  it('after first click on board produces an X', () => {
    render(<Board  />)
    const cells = screen.getAllByRole('button')
    const cellsToClick = cells.find(c => c.id === "cell_0")
    expect(cellsToClick?.textContent).toBe("_")

    fireEvent.click(cellsToClick)

    expect(cellsToClick?.textContent).toBe("X")
  });

  it('after second click the player token swithes to O', () => {
    render(<Board  />)
    const cells = screen.getAllByRole('button')
    const cellsToClick = cells.find(c => c.id === "cell_0")
    expect(cellsToClick?.textContent).toBe("_")

    fireEvent.click(cellsToClick)
    fireEvent.click(cellsToClick)

    expect(cellsToClick?.textContent).toBe("O")
  })

});