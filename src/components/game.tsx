import * as React from 'react';
import { Cell } from './cell'
import './board.css';

const welcome = "Welcome to Tic Tac Toe"

type BoardProps = {message?: string}
function Game(props: BoardProps) {
    return (
        <div className="App">
           <h1 >{ props.message || welcome }</h1>
            <Cell value="1" onClick={() => alert("X")} />
            <Cell value="2" onClick={() => alert("X")} />
            <Cell value="3" onClick={() => alert("X")} />
            <Cell value="4" onClick={() => alert("X")} />
            <Cell value="5" onClick={() => alert("X")} />
            <Cell value="6" onClick={() => alert("X")} />
            <Cell value="7" onClick={() => alert("X")} />
            <Cell value="8" onClick={() => alert("X")} />
            <Cell value="9" onClick={() => alert("X")} />
        </div>
    )
}

export default Game;