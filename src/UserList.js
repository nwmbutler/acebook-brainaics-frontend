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
    console.log(this.state.users)
  }

  componentDidMount() {
    axios.get("/api/v1/users")
      .then((res) => res)
      .then(
        (result) => {
          console.log(result)
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
      console.log("loading..")
      return <div>Loading...</div>;
    } else {
      return (
        console.log(users ,1),
        <section>
          {users.map((user) => (
            console.log("loaded", user),
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
