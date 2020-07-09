import React, { Component } from 'react';
import axios from 'axios';

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    axios.get("/api/v1/users")
      .then((res) => res)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: [...result.data.user_list],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          {users.map((user) => (
            <article className="user" key={user.id}>
              <p>{user.username}</p>
            </article>
          ))}
        </section>
      );
    }
  }
}

  export default UserList
