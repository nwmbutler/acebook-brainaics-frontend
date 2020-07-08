import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';

class UserList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        userList: []
      }
    }
  
    getUserList() {
      axios.get('/api/v1/users')
      .then(response => {
          console.log(response.data.current_user)
        this.setState({userList: response.data.current_user.email})
      })
      .catch(error => console.log(error))
    }
  
    componentDidMount() {
      this.getUserList()
    }
  
    render() {
      return (
        <div>
           {this.state.userList}
       </div>
      )
    }
  }
  
  export default UserList