import * as React from "react";

interface IUser {
    key: string,
    name: string,
    picture: string
}

const UserRow = (props: IUser) => {
    // Remember to assign key to <li> and fix the missing key issue
    // Keys help React identify which items have changed, are added,
    // or are removed. Keys should be given to the elements inside the
    // array to give the elements a stable identity

    // Put multiple tags in <li>
    return (
        <li key={props.key}>
            <div>{props.name}</div>
            <div>{props.picture}</div>
        </li>
    );
}

export default UserRow;
