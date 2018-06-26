import * as React from "react";
import TableRow from "./TableRow";

interface IUser {
    key: string,
    name: string,
    picture: string
}

interface ITableProps {
    data: IUser[]
}

const Table = (props: ITableProps) => {
    // Add <th /> for first blank col
    // Object.keys iterate keys in object and push them in array
    return (
        <table>
            <thead>
                <tr>
                    <th />
                    {Object.keys(props.data[0]).map((title: string, j: number) => {
                        return <th key={`col-${j}`}>{title}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {props.data.map((user: IUser, i: number) => {
                    return <TableRow key={`row-${i}`} rowID={i} row={user} />
                })}
            </tbody>
        </table>
    );
}

export default Table;
