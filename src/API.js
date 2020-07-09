import React, { Component } from 'react';
import axios from 'axios';

class API extends Component {
  async getUserList() {
    const data = await axios.get('/api/v1/users')
    .then(response => {
        console.log(response.data, 1)
      return response.data
    })
    .catch(error => console.log(error))
    return data
  }
}

export default API
