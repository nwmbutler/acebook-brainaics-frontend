import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';

class NameStream extends Component {
  render() {
    return (
      { this.props.id }
    )
  }
}

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
          console.log(response.data.user_list[0].id, 1)
        this.setState({userList: response.data})
      })
      .catch(error => console.log(error))
    }
  
    componentDidMount() {
      this.getUserList()
    }
    
    nameLister = this.userList.map(nameListObject => {
      return (
        <NameStream { ...nameListObject} />
      )
    })     
      
    render() {
      return (
        <div>
          { nameLister }
       </div>
      )
    }
  }
  
  export default UserList