import React, { Component } from "react";
import Toggle from "./components/toggle/Toggle";
import Users from "./components/users/Users";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    console.log("componentDidMount de App.js");
    const res = await fetch(
      "https://randomuser.me/api/?seed=rush&nat=br&results=10"
    );
    const json = await res.json();

    this.setState({
      users: json.results,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate de App.js");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount de App.js");
  }

  handleShowUsers = (isChecked) => {
    this.setState({ showUsers: isChecked });
  };

  //{ showUsers ? <div>Users</div> : <div>Exibição de usuários desativada</div> }

  render() {
    const { showUsers, users } = this.state;

    return (
      <div>
        <div>
          <h3>React Lifecycle</h3>
          <Toggle 
            description="Mostrar usuários: "
            enabled={showUsers} 
            onToggle={this.handleShowUsers}
          />
          <hr />
          {showUsers && <Users users={users} />}
        </div>
      </div>
    );
  }
}
