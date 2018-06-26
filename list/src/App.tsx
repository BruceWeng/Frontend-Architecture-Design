import * as React from 'react';
import './App.css';
import UserList from "./components/UserList";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <UserList data={[]} />
      </div>
    );
  }
}

export default App;
