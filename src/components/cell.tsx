

export type CellProps = {
  value: string;
  onClick: () => void;
}

export const Cell = (props: CellProps) => {
  return (
    <button data-testid="singleCell" style={style} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

const style = {
  backgroundColor: 'red',
  height: '5rem',
  width: '5rem',
  margin: '2rem',
}