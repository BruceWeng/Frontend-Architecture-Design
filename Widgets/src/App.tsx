import * as React from 'react';
import './App.css';
import Form from "./components/form/Form";
import UserList from "./components/list/UserList";

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
        <Form />
        <UserList data={this.state.data} />
      </div>
    );
  }
}

export default App;
