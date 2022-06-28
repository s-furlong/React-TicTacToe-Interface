import { useState } from 'react';
import { Cell } from './cell'
import './board.css';

const defaultWelcome = "Welcome to Tic Tac Toe"

type BoardProps = { message?: string }

function Game(props: BoardProps) {

  const [displayValue, updateDisplayValue] = useState<string | null>(null)

  const footerMessage = () => {
    if (displayValue === null) {
      return "No value was selected"
    } else {
      return `Box ${displayValue} was selected`
    }
  }


  return (
    <div className="App">
      <h1 >{props.message || defaultWelcome}</h1>
      <Cell value="_" data-testid="_" onClick={() => updateDisplayValue("_")} />
      <Cell value="X" onClick={() => alert("X")} />
      <Cell value="O" onClick={() => alert("X")} />


      <div>
        {footerMessage()}
        <div>
          {`The value of displayValue is ${displayValue}`}
        </div>
      </div>
      {/* <Cell value="4" onClick={() => alert("X")} />
      <Cell value="5" onClick={() => alert("X")} />
      <Cell value="6" onClick={() => alert("X")} />
      <Cell value="7" onClick={() => alert("X")} />
      <Cell value="8" onClick={() => alert("X")} />
      <Cell value="9" onClick={() => alert("X")} /> */}
    </div>
  )
}

export default Game;
