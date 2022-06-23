import React from 'react';
import './board.css';

let welcome: string = "Welcome to Tic Tac Toe"

type BoardProps = {message?: string}
function Board(props: BoardProps) {
  return (
    <div className="App">
      <h1 className="App-header">{ props.message || welcome }</h1>
    </div>
  );
}

export default Board;
