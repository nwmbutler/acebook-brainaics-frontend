import React, { Component } from "react";
import axios from "axios";

export class WallPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        message: "",
        user_id: "",
        wall_id: "",
      },
      isSubmitting: false,
      isError: false,
    };
  }
  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });

  submitForm = async (e) => {
    if (e) e.preventDefault();
    this.setState({ isSubmitting: true });
    const result = await axios.post("/api/v1/posts", {
      method: "POST",
      post: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setState({ isSubmitting: false });
    const data = await result.json();
    if (!data.hasOwnProperty("error")) {
      this.setState({ message: data.success })
      window.location.href = `http://localhost:4000/wall/${this.props.match.id}`;
    } else {
      this.setState({ message: data.error, isError: true })
    }
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="message">Create Post</label>
        <input
          type="textarea"
          name="message"
          onChange={this.handleInputChange}
          value={this.state.values.message}
          required
        />
        <input type="hidden"
          name="user_id"
          value="3"
          required
          />
          <input type="hidden"
          name="wall_id"
          value="3"
          required
          />

        <input type="submit" className="submit" />
      </form>
    );
  }
}

export default WallPost;
