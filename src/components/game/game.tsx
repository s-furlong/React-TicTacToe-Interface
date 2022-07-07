
import {Board} from '../board/board'
import './game.css';

const welcome = "Welcome to Tic Tac Toe"

type BoardProps = {message?: string}
function Game(props: BoardProps) {

    return (
        <div className="App" >
            <h1 >{ props.message || welcome }</h1>
            <Board />
        </div>
    )
}


export default Game;