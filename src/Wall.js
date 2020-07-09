import React, { Component } from 'react';
import axios from 'axios';

class Wall extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    axios.get(`/api/v1/wall/2`)
      .then((res) => res)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: [...result.data.posts],
          });
          console.log(result.data)
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
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          {posts.map((post) => (
            <article className="post" key={post.id}>
              <p>{post.user_id}</p>
              <p>{post.message}</p>
            </article>
          ))}
        </section>
      );
    }
  }
}

  export default Wall