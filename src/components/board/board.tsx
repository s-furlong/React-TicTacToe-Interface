import { Cell } from '../cell/cell';
import { useState } from 'react';

type boardProps = {
  board?: Array<string>,
  onClick?: (cell: number) => void;
}

export const Board = (props: boardProps) => {
  const gameBoard = props.board || ["_", "_", "_", "_", "_", "_", "_", "_", "_"]

  const [board, setBoard] = useState<Array<string>>(gameBoard)
  const [playerTokenX, setPlayerTokenX] = useState(true);


  const changeCell = (i: number) => {
    const updateBoard = [...board];
    updateBoard[i] = playerTokenX ? "X" : "O";
    setBoard(updateBoard);
    setPlayerTokenX(!playerTokenX);
  };

  return (
    <div style={style} data-testid="game-board">
      {board.map((cellValue, i) => {
        return <Cell id={`cell_${i}`} key={i} value={cellValue} onClick={() => changeCell(i)} data-testid="game-square" />
      })}
    </div>
  )
}

const style = {
  border: "10px solid pink",
  borderRadius: "2rem",
  width: "250px",
  height: "250px",
  padding: "3rem",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

