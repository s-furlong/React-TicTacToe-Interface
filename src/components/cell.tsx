

export type CellProps = {
    value: string;
    onClick: () => void;
}

export const Cell = (props: CellProps) => {
    return(
    <button data-testid="singleCell" onClick={props.onClick}>
        { props.value }
    </button>
    )   
}
