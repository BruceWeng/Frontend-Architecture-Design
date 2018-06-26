import * as React from 'react';
import './App.css';
import UserList from "./components/UserList";

interface IUser {
    key: string,
    name: string,
    picture: string
}

interface IAppState {
    data: IUser[]
}

class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {key: "1", name: "Bruce", picture: "Bruce URL"},
                {key: "2", name: "Emily", picture: "Emily URL"},
                {key: "3", name: "Bryan", picture: "Bryan URL"}
            ]
        }
    }
  public render() {
    return (
      <div className="App">
        <UserList data={this.state.data} />
      </div>
    );
  }
}

export default App;
