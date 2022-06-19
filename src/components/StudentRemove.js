import React from "react";
import axios from "axios";

export default class StudentRemove extends React.Component {
  state = {
    id: "",
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:8080/api/students/${this.state.id}`)
      .then((res) => {
        // console.log(res);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    window.location.reload(true);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="id"
            placeholder="Student ID to remove"
            onChange={this.handleChange}
          />
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
