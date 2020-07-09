import React, { Component } from 'react';
import axios from 'axios';
import data from './API.js'
// import './App.css';

// constructor(props) {
//   super(props)
//   this.userList = []
//   this.getUserList();
// }

//
// componentDidMount() {
//   this.getUserList()
// }

const userList = data.getUserList()
console.log(userList)

class UserList extends Component {
  // data.getUserList().then((data) => {
  //   render() {
  //     console.log(data, 2)
  //     return (
  //       <div>
  //         { data.map((user) => {
  //           return ( <div> {user.username} </div>)
  //         })
  //        }
  //      </div>
  //     )
  //   }
  // }
}

  export default UserList
