

export type CellProps = {
    value: string;
    onClick: () => void;
}

export const Cell = (props: CellProps) => {
    return(
    <button data-testid="singleCell" style={style} onClick={props.onClick}>
        { props.value }
    </button>
    )   
}

const style = {
    backgroundColor: 'lightblue',
    height: '5rem',
    width: '5rem',
    padding: '0rem',
    border: "2px solid",
    fontSize: '2rem'
  }
