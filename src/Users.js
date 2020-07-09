import React, { Component } from 'react'
import UserList from "./UserList.js";


export class Users extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <UserList/>
      </div>
    );
  }
}

export default Users
