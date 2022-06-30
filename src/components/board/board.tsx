import { Cell } from '../cell/cell';
import {useState} from 'react';

type boardProps = {
    board?: Array<string>,
    onClick?: (cell: number) => void; 
}

export const Board = (props: boardProps) => {
    const gameBoard = props.board || ["_","X","_","O","_","_","_","_","_"]
    const [board] = useState<Array<string>>(gameBoard)
    const [boardValue, setBoardValue] = useState<string | null>(null)
    
    const responseMessage = () => {
        if (boardValue === null) {
            return "Please select button"
        } else {
            return `${boardValue} has been clicked`
        }
    }
    
    return(
    <div style={style} >
        {board.map((cellValue, i) => {
            return <Cell id= {`cell_${i}`} key={i} value={cellValue} onClick={() => setBoardValue(cellValue)} />
        })}
        <div>
            {responseMessage()}
        </div>
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

