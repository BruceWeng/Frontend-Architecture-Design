import * as React from "react";

interface IUser {
    key: string,
    name: string,
    picture: string
}

interface ITableRowProps {
    key: string,
    rowID: number,
    row: IUser
}

const TableRow = (props: ITableRowProps) => {
    // rowID passed from TableRow props to make unique key with colID
    // Object.values iterate values in object and push them in array
    const rowID = props.rowID;
    return (
        <tr>
            <td>{rowID}</td>
            {Object.values(props.row).map((user: string, colID: number) => {
                return <td key={`cell-${rowID}-${colID}`}>{user}</td>
            })}
        </tr>
    );
}

export default TableRow;
