import * as React from 'react';
import './App.css';
import Form from "./components/form/Form";
import UserList from "./components/list/UserList";
import Table from "./components/table/Table";

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
                {key: "A", name: "Bruce", picture: "Bruce URL"},
                {key: "B", name: "Emily", picture: "Emily URL"},
                {key: "C", name: "Bryan", picture: "Bryan URL"}
            ]
        }
    }
  public render() {
    return (
      <div className="App">
        <Form />
        <UserList data={this.state.data} />
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
