import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Board } from '../board/board'

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

  // it('handles onClick event', async () => {
  //   const mockCallBack = jest.fn()
  //   render(<Board board={['X', "_", 'O', "_", 'X', 'O', "_", 'X', "_"]} onClick={mockCallBack} />)
  //   // fireEvent.click(screen.getByTestId("game-board"))
  //   fireEvent.click(screen.getByTestId("game-square"))

  //   expect(mockCallBack).toBeCalled()
  // });

  it('passes', () => {
    render(<Board />)
    const buttons = screen.getAllByRole('button')
    const buttonToClick = buttons.find(b => b.id === "cell_0")
    expect(buttonToClick?.textContent).toBe("_")

    fireEvent.click(buttonToClick)

    expect(buttonToClick?.textContent).toBe("X")
  })
});