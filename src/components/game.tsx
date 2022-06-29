import {useState} from 'react';
import { Cell } from './cell'
import './board.css';

const welcome = "Welcome to Tic Tac Toe"

type BoardProps = {message?: string}
function Game(props: BoardProps) {

    const [boardValue, setBoardValue] = useState<string | null>(null)

    const responseMessage = () => {
        if (boardValue === null) {
            return "Please select button"
        } else {
            return `${boardValue} has been clicked`
        }
    }

    return (
        <div className="App" data-testid="X">
           <h1 >{ props.message || welcome }</h1>
            <Cell value="_" onClick={() => setBoardValue("_")} />
            <Cell value="X" onClick={() => setBoardValue("X")} />
            <Cell value="O" onClick={() => setBoardValue("O")} />
            <div>
                {responseMessage()}
            </div>
        </div>
    )
}

export default Game;