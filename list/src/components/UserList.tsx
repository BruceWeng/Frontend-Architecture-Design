import * as React from "react";

interface IUser {
    name: string,
    picture: string
}
interface IUserListProps {
    data: IUser[]
}

class UserList extends React.Component<IUserListProps> {
    public constructor(props: IUserListProps) {
        super(props);
    }

    public render() {
        return (
            <ul>Hi</ul>
        )
    }
}

export default UserList;
