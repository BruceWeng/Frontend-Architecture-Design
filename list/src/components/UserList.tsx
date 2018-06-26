import * as React from "react";
import UserRow from "./UserRow";

interface IUser {
    key: string,
    name: string,
    picture: string
}

interface IUserListProps {
    data: IUser[]
}

const UserList = (props: IUserListProps) => {
    return (
        // Put <li> array between <ul> tags
        <ul>
            {props.data.map((user) => {
                return <UserRow key={user.key} name={user.name} picture={user.picture} />
            })}
        </ul>
    );
}

export default UserList;
